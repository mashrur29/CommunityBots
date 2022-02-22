import makeStyles from '@material-ui/core/styles/makeStyles';
import React, {useEffect, useState} from 'react';
import {Chat, Topic} from '../models/Chat';
import {setTypingDoc, startNewChat} from '../utils/dbUtils';
import ChatContainer from './ChatContainer';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Cookies from 'universal-cookie';

interface Props {
    chat: Chat,
    addMessage: (message: string, topic: Topic) => void,
    initChat: (userName: string, systemName: string, chatDocId: string) => void,
    chatAgent1: any,
    chatTopic1: any,
    ws1: any,
    chatInfo1: any,
    currentTopic: any,
    incrementTopic: any,
};

const UserChat: React.FC<Props> = ({addMessage, chat, initChat, chatAgent1, chatTopic1, ws1, chatInfo1, currentTopic, incrementTopic}) => {
    const classes = useStyles();
    const [chatId, setChatId] = useState('');
    //const [systemName, setSystemName] = useState('');

    //const [openDialog, setOpenDialog] = useState(false);
    const cookies = new Cookies();
    const userName = cookies.get('displayName');

    useEffect(() => {
        const id_local = (new URLSearchParams(window.location.search)).get('id');
        const id_cookie = localStorage.getItem('id');
        console.log("Id:" + id_local + ' or ' + id_cookie)
        //const id = systemName
        /*if (id_local) {
            setChatId(id_local);
            initChat(userName, id_local, id_local);
        } else if (id_cookie) {
            setChatId(id_cookie);
            initChat(userName, id_cookie, id_cookie);
        }else {
            //setOpenDialog(true);
            submitHandler();
        }*/
        submitHandler()
        // eslint-disable-next-line
    }, []);

    const submitHandler = async () => {
        const chatDocId = await startNewChat(userName, 3);
        initChat(userName, chatDocId, chatDocId);
        setChatId('');   
    };

    const setTyping = async (typing: boolean) => {
        await setTypingDoc(chat.id!, false, typing);
    };

    return (<>
        <div className={classes.container}>
            <ChatContainer
                messages={chat.messages}
                addMessage={addMessage}
                disable={false}
                displayName={chat.displayName}
                systemName={chat.systemName}
                //userTyping={chat.userTyping}
                chatbotTyping={chat.chatbotTyping}
                setTyping={setTyping}
                agents={3}
                chat={chat}
                chatAgent1={chatAgent1}
                chatTopic1={chatTopic1}
                ws1={ws1}
                chatInfo1={chatInfo1}
                currentTopic={currentTopic}
                incrementTopic={incrementTopic}
            />
        </div>
        <MuiThemeProvider theme={theme}>
        </MuiThemeProvider>
    </>);
};

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        marginTop: '0px',
        '& h4': {
            marginLeft: '0.5rem',
            marginBottom: '0.5rem',
        },
    },
}));

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#000000'
        },
        info: {
            main: '#555555'
        }
    }
});

export default UserChat;