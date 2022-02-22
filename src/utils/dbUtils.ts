import firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from "../config/fbConfig";
import { Chat, ChatMessage, ChatSender, Topic } from "../models/Chat";

export const initChatDB = async (displayName: string, systemName: string, chatDocId: string, setChat: React.Dispatch<React.SetStateAction<Chat>>) => {
  db.collection('chats').doc(chatDocId).onSnapshot(chatDoc => {
    db.collection('chats').doc(chatDocId).collection('messages').orderBy('sentAt').onSnapshot(msgsnapsot => {
      const messages = msgsnapsot.docs.map(doc => ({ id: doc.id, ...doc.data(), sentAt: doc.data().sentAt.toDate() } as ChatMessage));

      setChat({
        id: chatDocId,
        ...(chatDoc.data() as Chat),
        startedAt: chatDoc.data()!.startedAt.toDate(),
        endedAt: chatDoc.data()!.endedAt && chatDoc.data()!.endedAt.toDate(),
        displayName: displayName,
        systemName: systemName,
        messages,
      });
    });
  });
};

export const resetChat = async (chatDocId: string) => {
  db.collection('chats').doc(chatDocId).onSnapshot(chatDoc => {
   return chatDoc.data()!.displayName
})};

export const startNewChat = async (displayName: string, agents: number) => {

  await db.collection('chats').doc(displayName).set({
    startedAt: firebase.firestore.FieldValue.serverTimestamp(),
    open: true,
    displayName,
  });

  return displayName;
};

export const startNewPreStudy = async (displayName: string, agents: number) => {
  const docRef = await db.collection('prestudy').add({
    startedAt: firebase.firestore.FieldValue.serverTimestamp(),
    open: true,
    displayName,
  });

  await db.collection('prestudy').doc(docRef.id).update({
    systemName: docRef.id
  });

  return docRef.id;
};

export const startNewPostStudy = async (displayName: string, agents: number) => {


  await db.collection('poststudy').doc(displayName).set({
    startedAt: firebase.firestore.FieldValue.serverTimestamp(),
    open: true,
    displayName
  });

  return displayName;
};

export const endCurrentChat = async (chatId: string) => {
  await db.collection('chats').doc(chatId).update({
    endedAt: firebase.firestore.FieldValue.serverTimestamp(),
    open: false,
  });
  const messages = await db.collection('chats').doc(chatId).collection('messages').orderBy('sentAt').get();
  var messages_transcript = '';
  messages.docs.forEach(doc => {
    messages_transcript = messages_transcript + doc.data().sentAt.toDate() + " by " + doc.data().sentBy + ": " + doc.data().messageText + "\n";
  });

  const element = document.createElement("a");
  const file = new Blob([messages_transcript], {type: 'text/plain'});
  element.href = URL.createObjectURL(file);
  element.download = "transcript" + chatId + ".txt";
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
};

export const sendMessage = async (chatDocId: string, sentBy: any, messageText: string, topic: string) => {
  await db.collection('chats').doc(chatDocId).collection('messages').add({
    sentAt: firebase.firestore.Timestamp.fromDate(new Date()),
    messageText,
    sentBy,
    topic,
  });
};

export const sendFormMessagePostStudy = async (messageText: string) => {
  await db.collection('postStudyResponses').add({
    sentAt: firebase.firestore.Timestamp.fromDate(new Date()),
    messageText,
  });
};

export const getAgentNumber = async(participantName: string) => {
  // console.log(participantName);
  const docRef = await db.collection('chats').where("participantName", "==", participantName).get();
  //console.log(docRef.docs[0].data().agents);
  return docRef.docs[0].data().agents;
};

export const setTypingDoc = async (chatDocId: string, isAdmin: boolean, typing: boolean) => {
  const docRef = db.collection('chats').doc(chatDocId);

  if (isAdmin) {
    await docRef.update({
      chatbotTyping: typing,
    });
  } else {
    console.log('called');
    await docRef.update({
      userTyping: typing,
    });
  }
};

export const setPreStudyAnswer = async (docId: string, v1: string, v2: string, v3: string, v4: string, v5: string, v6: string, v7: string, v8: any, v9: string, v10: string) => {
  await db.collection('prestudy').doc(docId).update({
    answer1: v1,
    answer2: v2,
    answer3: v3,
    answer4: v4,
    answer5: v5,
    answer6: v6,
    answer7: v7,
    answer8: v8,
    answer9: v9,
    answer10: v10,
  });
};

export const setPostStudyAnswer = async (docId: string, userName: string, v1: string, v2: string, v3: string, v4: string, v5: string, v6: string, v7: string, v8: string, v9: string, v10: string,  v11: string,  v11a: string, v12: string,  v13: string,  v14: string,  v15: string,  v16: string, v17: string, v18: string, v19: string, v20: string, v21: string, v22: string, v23: string, v24: string, v25: string, v26: string, v27: string, v28: string) => {
  await db.collection('poststudy').doc(docId).update({
    displayName: userName,
    answer1: v1,
    answer2: v2,
    answer3: v3,
    answer4: v4,
    answer5: v5,
    answer6: v6,
    answer7: v7,
    answer8: v8,
    answer9: v9,
    answer10: v10,
    answer11: v11,
    answer11a: v11a,
    answer12: v12,
    answer13: v13,
    answer14: v14,
    answer15: v15,
    answer16: v16,
    answer17: v17,
    answer18: v18,
    answer19: v19,
    answer20: v20,
    answer21: v21,
    answer22: v22,
    answer23: v23,
    answer24: v24,
    answer25: v25,
    answer26: v26,
    answer27: v27,
    answer28: v28,
  });
};