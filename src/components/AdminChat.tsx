import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { FileCopy } from '@material-ui/icons';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Chat, ChatSender, Topic } from '../models/Chat';
import { endCurrentChat, setTypingDoc, startNewChat } from '../utils/dbUtils';
import ChatContainer from './ChatContainer';
import WebSocket from "isomorphic-ws";

interface Props {
  isAdmin: boolean,
  chat: Chat,
  initChat: (displayName: string, systemName: string, chatId: string) => void,
  addMessageGenerator: (sentBy: ChatSender) => (message: string, topic: Topic) => void,
};

const AdminChat: React.FC<Props> = ({ addMessageGenerator, chat, initChat, isAdmin }) => {
  const classes = useStyles();
  const [chatbot, setChatbot] = useState<ChatSender>('chatbotAgentA');
  const [agents, setAgents] = useState(3);
  const [chatId, setChatId] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [participantName, setParticipantName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { messages } = chat;

  const openDialogHandler = async () => {
    setOpenDialog(true);
  };

  const closeDialogHandler = () => {
    setOpenDialog(false);
  };

  const copyURL = () => {
    try {
      navigator.clipboard.writeText(`${window.location.origin}?id=${chatId}&an=${agents}`);
    } catch (e) {
      console.log(`${window.location.origin}?id=${chatId}&an=${agents}`);
    }
  };

  const endChat = async () => {
    if (chatId) {
      await endCurrentChat(chatId);
    }
    setChatId('');
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const chatDocId = await startNewChat(displayName, agents);
    setChatId(chatDocId);
    initChat(displayName, chatDocId, chatDocId);
    setChatbot('chatbotAgentA');
  };

  const setTyping = async (typing: boolean) => {
    await setTypingDoc(chat.id!, true, typing);
  };

  if (!isAdmin) {
    return <Redirect to='/signin' />
  }

  return (<>
    <div className={classes.container}>
      <div className={classes.header}>
        <Typography variant='h5' style={{ fontFamily: 'Segoe UI', marginTop: '20px', marginRight: '0px', color: '#000000' }}>Admin View</Typography>
        <ButtonGroup variant='contained' color='primary'>
          <Button variant='contained' className={classes.startEndBtn} onClick={openDialogHandler}>Start a New Chat</Button>
          <Button variant='contained' className={classes.startEndBtn} onClick={endChat}>End the Current Chat</Button>
        </ButtonGroup>

        <ButtonGroup variant='contained' color='primary'>
          <Button variant='contained' color={chatbot !== 'chatbotAgentA' ? 'primary' : 'secondary'} onClick={() => setChatbot('chatbotAgentA')} className={classes.btnFonts}>Chatbot A</Button>
          <Button variant='contained' color={chatbot !== 'chatbotAgentB' ? 'primary' : 'secondary'} onClick={() => setChatbot('chatbotAgentB')} className={classes.btnFonts}>Chatbot B</Button>
          <Button variant='contained' color={chatbot !== 'chatbotAgentC' ? 'primary' : 'secondary'} onClick={() => setChatbot('chatbotAgentC')} className={classes.btnFonts}>Chatbot C</Button>
          <Button variant='contained' color={chatbot !== 'chatbotAgentD' ? 'primary' : 'secondary'} onClick={() => setChatbot('chatbotAgentD')} disabled={agents < 4} className={classes.btnFonts}>Chatbot D</Button>
          <Button variant='contained' color={chatbot !== 'chatbotAgentE' ? 'primary' : 'secondary'} onClick={() => setChatbot('chatbotAgentE')} disabled={agents < 5} className={classes.btnFonts}>Chatbot E</Button>
        </ButtonGroup>
      </div>
      <ChatContainer
        messages={messages}
        addMessage={addMessageGenerator(chatbot)}
        isAdmin
        disable={!chat.open}
        displayName={chat.displayName}
        systemName={chat.systemName}
        userTyping={chat.userTyping}
        chatbotTyping={chat.chatbotTyping}
        setTyping={setTyping}
        agents={agents}
        chat={chat}
        chatTopic1={'ss'}
        chatAgent1={'ss'}
        ws1={'null'}
        chatInfo1={'null'}
        currentTopic={'null'}
        incrementTopic={''}
      />
    </div>
    <Dialog
      open={openDialog}
      onClose={closeDialogHandler}
    >
      <DialogTitle>
        Enter the user name here:
      </DialogTitle>
      <DialogContent>
        {
          chatId === ''
            ? <form onSubmit={submitHandler}>
              <Grid container>
                <Grid item xs={12}>
                  <TextField
                    fullWidth autoComplete='off'
                    name='participantName'
                    id='participantName'
                    value={participantName}
                    onChange={(e) => setParticipantName(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <ButtonGroup variant='contained' color='primary' style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant='contained' color={agents !== 3 ? 'primary' : 'secondary'} onClick={() => setAgents(3)} className={classes.btnFonts}>3 Agents</Button>
                    <Button variant='contained' color={agents !== 4 ? 'primary' : 'secondary'} onClick={() => setAgents(4)} className={classes.btnFonts}>4 Agents</Button>
                    <Button variant='contained' color={agents !== 5 ? 'primary' : 'secondary'} onClick={() => setAgents(5)} className={classes.btnFonts}>5 Agents</Button>
                  </ButtonGroup>
                </Grid>

                <Grid item xs={12}>
                  <Button color='primary' variant='contained' type='submit' className={classes.submitBtn}>Start New Chat</Button>
                </Grid>
              </Grid>
            </form>
            : <div className={classes.header}>
              <Typography>{`${window.location.origin}?id=${chatId}`}</Typography>
              <IconButton onClick={copyURL}>
                <FileCopy />
              </IconButton>
            </div>
        }
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialogHandler}>Close</Button>
      </DialogActions>
    </Dialog>
  </>);
};

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    '& h4': {
      marginLeft: '0.5rem',
      marginBottom: '0.5rem',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  startEndBtn: {
    backgroundColor: '#a3ddd',
    fontSize: '10px',
  },
  submitBtn: {
    display: 'block',
    margin: '0.75rem auto',
    marginTop: '20px',
  },
  btnFonts: {
    fontSize: '10px',
    '&[disabled]': {
      color: 'grey',
    },
    marginTop: '10px',
  },
}));

export default AdminChat;