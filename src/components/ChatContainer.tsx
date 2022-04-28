import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {Send} from '@material-ui/icons';
import React, {useEffect, useRef, useState} from 'react';
import {useStopwatch} from 'react-timer-hook';
//import AgentA from '../assets/botIcon/bot1.png';
//import AgentB from '../assets/botIcon/bot2.png';
//import AgentC from '../assets/botIcon/bot3.png';

import AgentA from '../assets/botIcon/bot1_new.png';
import AgentB from '../assets/botIcon/bot2_new.png';
import AgentC from '../assets/botIcon/bot3_new.png';
import typingBubble from '../assets/botIcon/chatTyping.png';

import AgentASleeping from '../assets/botIcon/bot1_new_sleeping.png';
import AgentBSleeping from '../assets/botIcon/bot2_new_sleeping.png';
import AgentCSleeping from '../assets/botIcon/bot3_new_sleeping.png';

import bgImg from '../assets/background/background11.png';
import PopSound from '../assets/audio/pop.wav';
import User from '../assets/botIcon/user1.png';
import {Chat, ChatMessage, ChatSender, Topic} from '../models/Chat';
import {Button, MuiThemeProvider, createMuiTheme} from "@material-ui/core";
import {concludingMessages, topics, welcomeMessages, welcomeMessages2, welcomeMessages3} from "../juji";
import {sendMessage} from "../utils/dbUtils";
import {userChatStarted} from "../App";
import UIfx from "uifx";

var timeLimitExceeded = 0;

interface Props {
    disable?: boolean,
    isAdmin?: boolean,
    messages: ChatMessage[],
    addMessage: (message: string, topic: Topic, ws: any, chatInfo: any, setCbtyping: any) => void,
    displayName: string,
    systemName: string,
    agents: number,
    userTyping?: boolean,
    chatbotTyping?: boolean,
    setTyping: (typing: boolean) => Promise<void>,
    ws1: any,
    chatInfo1: any,
    chatAgent1: any,
    chatTopic1: any,
    chat: Chat,
    currentTopic: any,
    incrementTopic: any,
};

const getTitle = (chatbot: ChatSender) => {
    switch (chatbot) {
        case 'chatbotAgentA':
            return 'Household Chatbot';

        case 'chatbotAgentB':
            return 'Work Chatbot';

        case 'chatbotAgentC':
            return 'Healthcare Chatbot';

        default:
            return '';
    }
};

const getImgSrc = (chatbot: ChatSender) => {
    switch (chatbot) {
        case 'chatbotAgentA':
            //agentBGcolor = '#FEFBEA';
            return AgentA;

        case 'chatbotAgentB':
            //agentBGcolor = '#A7C7E7';
            return AgentB;

        case 'chatbotAgentC':
            //agentBGcolor = '#FFD166';
            return AgentC;

        default:
            return '';
    }
};

var initial = -1;
var time = new Date()
var prevExecTime = -1;
var prevMessage = '';

const ChatContainer: React.FC<Props> = ({
                                            isAdmin = 'false',
                                            messages,
                                            addMessage,
                                            disable,
                                            displayName,
                                            systemName,
                                            agents,
                                            userTyping = false,
                                            chatbotTyping,
                                            setTyping,
                                            chat,
                                            chatAgent1,
                                            chatTopic1,
                                            ws1,
                                            chatInfo1,
                                            currentTopic,
                                            incrementTopic,
                                        }) => {
    const initState = {
        messageInp: "",
        topic: 'dwelling' as Topic,
    };

    const [state, setState] = useState(initState);
    const [sender, setSender] = useState(String);
    const [cbtyping, setCbtyping] = useState(true);
    const classes = useStyles();
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const popSound = new UIfx(PopSound, {volume: 0.5});

    var ws = ws1[currentTopic];
    var chatAgent = chatAgent1[currentTopic];
    var chatTopic = chatTopic1[currentTopic];
    var chatInfo = chatInfo1[currentTopic];

    if (currentTopic >= topics) {
        ws = null;
        disable = true;
    }

    state.topic = chatTopic;
    useEffect(() => {
        messagesEndRef.current!.scrollIntoView({behavior: "smooth"});
        if (currentTopic < topics) {
            if (ws.readyState === WebSocket.OPEN) {
                ws.onmessage = function (incoming: any) {
                    //console.log('In ws');

                    var data = JSON.parse(incoming.data);

                    if ('data' in data && 'chat' in data.data) {

                        var message = data.data.chat;
                        if (message.role == 'rep') {
                            if (message.type == 'normal' && message.text !== null) {
                                setCbtyping(false);
                                var msg = message.text.replace(/<[^>]+>/g, '');
                                if (msg !== 'Hello639') {
                                    popSound.play();
                                }


                                /*
                                    current topic ended
                                 */
                                if (msg === concludingMessages[currentTopic]) {
                                    //sendMessage(chat.id!, chatAgent, msg, chatTopic);
                                    currentTopic = incrementTopic();
                                    if (currentTopic >= topics) {
                                        sendMessage(chat.id!, chatAgent, "Thank you! the survey is now complete. Please click on 'END CHAT' button.", chatTopic);
                                    } else {
                                        var welcMsg = welcomeMessages[currentTopic];
                                        setTimeout(() => {
                                            sendMessage(chat.id!, chatAgent1[currentTopic], welcMsg, chatTopic1[currentTopic]);
                                        }, 205);
                                        setCbtyping(false);

                                        if (currentTopic === 4 || currentTopic === 8) {
                                            setTimeout(() => {
                                                sendMessage(chat.id!, chatAgent1[currentTopic], welcomeMessages2[currentTopic], chatTopic1[currentTopic]);
                                            }, 210);
                                            setTimeout(() => {
                                                sendMessage(chat.id!, chatAgent1[currentTopic], welcomeMessages3[currentTopic], chatTopic1[currentTopic]);
                                            }, 215);
                                        }
                                    }
                                } else {
                                    if (msg !== 'Hello639') {
                                        sendMessage(chat.id!, chatAgent, msg, chatTopic);
                                    }
                                }
                            } else if (message.type == 'user-joined') {
                                //console.log('');
                                //console.log('=== Welcome to Juji Bot ===');
                                //console.log('');
                            }
                        }
                    } else {
                        //setCbtyping(true);
                    }
                };
            }
        }

    }, [messages]);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        /*if (e.target.value !== '') {
            if (isAdmin && !chatbotTyping) {
                setCbtyping(true);
            } else if (!userTyping) {
                setCbtyping(true);
            }
        } else {
            setCbtyping(false);
        }*/
        setState({...state, [e.target.name]: e.target.value});
    };


    var {
        seconds,
        minutes,
        hours,
        start,
        isRunning,
        reset,
    } = useStopwatch({autoStart: true});

    const submitHandler = () => {
        addMessage(state.messageInp, state.topic, ws, chatInfo, setCbtyping);
        setState(initState);
        //setCbtyping(true);
    };


    if (userChatStarted === 1 && initial === -1) {
        hours = 0;
        minutes = 0;
        seconds = 0;
        initial = 1;
        reset();
    }

    var sec_str = String("00" + seconds).slice(-2);
    var min_str = String("00" + minutes).slice(-2);
    var hour_str = String("00" + hours).slice(-2);

    if (currentTopic >= 10 || minutes >= 60) {
        timeLimitExceeded = 1;
    }



    return (
        <div className={classes.backdrop}>

            <div className={classes.agentPanel}>
                <div style={{
                    color: "black",
                    textAlign: "center",
                    fontSize: "15px",
                    //border: '0.5px solid black',
                    borderRadius: '3px',
                    padding: '1%',
                    width: '100%',
                    backgroundColor: 'white'
                }}>
                    {
                        userChatStarted === 1
                            ? (<div>Time Elapsed: <span>{hour_str}</span>:<span>{min_str}</span>:<span>{sec_str}</span>
                            </div>)
                            : (
                                <div>Time Elapsed: <span>{"00"}</span>:<span>{"00"}</span>:<span>{"00"}</span></div>)
                    }

                </div>
                <br/>
                <Typography className={classes.agentIntro} style={{color: '#444444'}}><b>Expert
                    Chatbots</b></Typography>
                <hr style={{width: "100%", textAlign: "left", marginLeft: "0", color: "#dddddd"}}></hr>
                <br/>

                {
                    chatAgent == 'chatbotAgentA'
                        ? (
                            <div><img src={AgentA} className={classes.agentInfo} style={{border: '0px solid green'}}
                                      alt=""/></div>
                        )
                        :
                        (
                            <div><img src={AgentASleeping} className={classes.agentInfo}
                                      style={{border: '0px solid black'}}
                                      alt=""/></div>
                        )
                }
                <div style={{color: "black", textAlign: "center", fontSize: "14px"}}><b>Household Chatbot</b></div>
                {
                    chatAgent == 'chatbotAgentA'
                        ? (
                            <Typography className={classes.topicInfo}
                                        style={{background: '#f4b183', border: '0px', fontSize: "13px"}}> Topic: {state.topic} </Typography>
                        )
                        :
                        (
                            <Typography className={classes.topicInfo}></Typography>
                        )
                }

                <br/>
                {
                    chatAgent == 'chatbotAgentB'
                        ? (
                            <div><img src={AgentB} className={classes.agentInfo} style={{border: '0px solid green'}}
                                      alt=""/></div>
                        )
                        :
                        (
                            <div><img src={AgentBSleeping} className={classes.agentInfo}
                                      style={{border: '0px solid black'}}
                                      alt=""/></div>
                        )
                }
                <div style={{color: "black", textAlign: "center", fontSize: "14px"}}><b>Work Chatbot</b></div>
                {
                    chatAgent == 'chatbotAgentB'
                        ? (
                            <Typography className={classes.topicInfo}
                                        style={{background: '#9dc3e6', border: '0px', fontSize: "12px"}}> Topic: {state.topic} </Typography>
                        )
                        :
                        (
                            <Typography className={classes.topicInfo}></Typography>
                        )
                }
                <br/>
                {
                    chatAgent == 'chatbotAgentC'
                        ? (
                            <div><img src={AgentC} className={classes.agentInfo} style={{border: '0px solid green'}}
                                      alt=""/></div>
                        )
                        :
                        (
                            <div><img src={AgentCSleeping} className={classes.agentInfo}
                                      style={{border: '0px solid black'}}
                                      alt=""/></div>
                        )
                }
                <div style={{color: "black", textAlign: "center", fontSize: "14px"}}><b>Healthcare Chatbot</b></div>

                {
                    chatAgent == 'chatbotAgentC'
                        ? (
                            <Typography className={classes.topicInfo}
                                        style={{background: '#a9ce91', border: '0px', fontSize: "13px"}}> Topic: {state.topic} </Typography>
                        )
                        :
                        (
                            <Typography className={classes.topicInfo}></Typography>
                        )
                }


                {
                    timeLimitExceeded === 1 ?
                    (<Button href='/finish' type='submit' variant="contained" className={classes.proceed}>End
                        Chat</Button>)
                    : (<Button href='/finish' type='submit' variant="contained" className={classes.proceed} disabled={true}>End
                        Chat</Button>)
                }
                {
                    currentTopic>=topics && window.innerHeight >= 750? (
                        <div style={{paddingBottom: '10%'}}></div>
                    ):(
                        <div></div>
                    )
                }

                {
                    currentTopic>=topics && window.innerHeight < 750? (
                        <div style={{paddingBottom: '10%'}}></div>
                    ):(
                        <div></div>
                    )
                }

                {
                    window.innerHeight >= 750? (
                        <div style={{paddingBottom: "4%"}}></div>
                    ):(
                        <div style={{paddingBottom: "0%"}}></div>
                    )
                }


            </div>
            <div className={classes.container}>
                <Grid container className={classes.verticalCenter}>
                    <Typography component='span' variant='caption'>
                        {
                            isAdmin
                                ? userTyping && 'typing...'
                                : chatbotTyping && 'typing...'
                        }
                    </Typography>
                    <Grid item xs>
                        <MuiThemeProvider theme={muitheme}>
                            <TextField
                                fullWidth
                                multiline
                                autoComplete='off'
                                placeholder='Type your message here'
                                value={state.messageInp}
                                onChange={changeHandler}
                                //variant='filled'
                                name='messageInp'
                                id='messageInp'
                                inputProps={{className: classes.inp, disableUnderline: true}}
                                className={[classes.inp, classes.fonts].join(' ')}
                                disabled={disable}
                                onKeyUp={(e) => {
                                    //console.log(`Pressed keyCode ${ev.key}`);
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        var msg = state.messageInp.replace(/\n$/, "");
                                        msg = msg.replace(/\/+$/, "");
                                        msg = msg.replace(/\\+$/, "");
                                        addMessage(msg, state.topic, ws, chatInfo, setCbtyping);
                                        setState(initState);
                                        //setCbtyping(true);
                                    }
                                }}
                            />
                        </MuiThemeProvider>

                    </Grid>
                    <Grid item>
                        <IconButton onClick={submitHandler} className={classes.send} id='sendButton'>
                            <Send/>
                        </IconButton>
                    </Grid>
                </Grid>
                <div className={classes.chatContainer}>
                    <div>
                        {

                            messages.map(message =>
                                message.sentBy == 'chatbotAgentA'
                                    ? <div key={message.id} className={classes.chatMessageChatbot}
                                           style={!isAdmin ? ({marginLeft: 'auto'}) : {}}>
                                        {<>
                                            <img src={getImgSrc(message.sentBy)}
                                                 style={{
                                                     width: '3.5%',
                                                     marginRight: '10px',
                                                     border: '0px',
                                                     borderRadius: '0px'
                                                 }} alt=""/>
                                            <div>
                                                <Typography variant='caption'>{getTitle(message.sentBy)}</Typography>
                                                <Typography style={{background: '#fcede2', border: '0px'}}>
                                                    {
                                                        message.messageText.split('\n').map((msg, idx) => <span
                                                            key={idx}>{msg}<br/></span>)
                                                    }
                                                </Typography>
                                            </div>
                                        </>
                                        }
                                    </div>
                                    : message.sentBy == 'chatbotAgentB'
                                        ? <div key={message.id} className={classes.chatMessageChatbot}
                                               style={!isAdmin ? ({marginLeft: 'auto'}) : {}}>
                                            {<>
                                                <img src={getImgSrc(message.sentBy)}
                                                     style={{
                                                         width: '3.5%',
                                                         marginRight: '10px',
                                                         border: '0px',
                                                         borderRadius: '0px'
                                                     }} alt=""/>
                                                <div>
                                                    <Typography variant='caption'>{getTitle(message.sentBy)}</Typography>
                                                    <Typography style={{background: '#ddf4ff', border: '0px'}}>
                                                        {
                                                            message.messageText.split('\n').map((msg, idx) => <span
                                                                key={idx}>{msg}<br/></span>)
                                                        }
                                                    </Typography>
                                                </div>
                                            </>
                                            }
                                        </div>
                                        : message.sentBy == 'chatbotAgentC'
                                            ? <div key={message.id} className={classes.chatMessageChatbot}
                                                   style={!isAdmin ? ({marginLeft: 'auto'}) : {}}>
                                                {<>
                                                    <img src={getImgSrc(message.sentBy)}
                                                         style={{
                                                             width: '3.5%',
                                                             marginRight: '10px',
                                                             border: '0px',
                                                             borderRadius: '0px'
                                                         }} alt=""/>
                                                    <div>
                                                        <Typography
                                                            variant='caption'>{getTitle(message.sentBy)}</Typography>
                                                        <Typography style={{background: '#eaf4e4', border: '0px'}}>
                                                            {
                                                                message.messageText.split('\n').map((msg, idx) => <span
                                                                    key={idx}>{msg}<br/></span>)
                                                            }
                                                        </Typography>
                                                    </div>
                                                </>
                                                }
                                            </div>
                                            : <div key={message.id} className={classes.chatMessageUser}
                                                   style={isAdmin ? ({marginLeft: 'auto'}) : {}}>
                                                {
                                                    <>
                                                        <div>
                                                            <Typography variant='caption'>You</Typography>
                                                            <Typography style={{background: '#FFFFFF', border: '0px'}}>
                                                                {
                                                                    message.messageText.split('\n').map((msg, idx) => <span
                                                                        key={idx}>{msg}<br/></span>)
                                                                }
                                                            </Typography>
                                                        </div>
                                                    </>
                                                }
                                            </div>
                            )
                        }

                        {cbtyping ?
                            <div>
                                <img style={{width: '3.5%'}} src={typingBubble}/>
                            </div>
                            : <div/>
                        }
                        {
                            currentTopic >= 11? (
                                <div>
                                    <div style={{color: "black", textAlign: "center", fontSize: "12px"}}>--------------------------</div>
                                    <div style={{color: "black", textAlign: "center", fontSize: "15px"}}><b>You may now click on the "END CHAT" button to end the conversation</b></div>
                                </div>
                            ):(
                                <div></div>
                            )
                        }
                        <div ref={messagesEndRef}/>
                    </div>

                </div>
            </div>
        </div>

    );
};

const muitheme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000'
        }
    }
});

const useStyles = makeStyles(theme => ({
    fonts: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    inp: {
        color: '#000000',
        backgroundColor: '#dddddd',
        marginTop: '10px',
        paddingLeft: '1%',
        paddingRight: '1%',
        paddingBottom: '0.5%',
        borderRadius: '100px',
        //height: '3%',
        width: '100%'
    },
    textFieldInput: {
        color: '#7FB685',
    },
    backdrop: {
        flexDirection: 'column-reverse',
        padding: '0.5rem',
        height: '80%',
        float: "right",
        marginTop: "0%",
        //boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.3)',
        borderRadius: 3,
        paddingLeft: '5%',
    },
    container: {
        marginBottom: '2%',
        display: 'flex',
        flexDirection: 'column-reverse',
        background: '#ffffff',
        //border: '3px solid #dddddd',
        padding: '0.5rem',
        height: '90%',
        width: "85%",
        float: "right",
        marginTop: "0%",
        //boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.3)',
        borderRadius: 3,
    },
    chatContainer: {
        padding: '1%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100%',
        float: "right",
        marginTop: "10px",
        width: "95%",
        //backgroundColor: '#eeeeee',
        border: '0px solid #dddddd',
        borderRadius: '15px',
        backgroundImage: `url(${bgImg})`,
        [theme.breakpoints.up('md')]: {
            height: '75vh',
        },
        "& > div": {
            maxHeight: '100%',
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
                width: '13px',
            },
            '&::-webkit-scrollbar-track': {
                //boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.7)`,
                background: '#f1f1f1',
            },
            '&::-webkit-scrollbar-thumb': {
                background: '#363737',
                // outline: `1px solid slategrey`,
                borderRadius: '2px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
                background: '#112222',
            },
        },
    },
    chatMessageChatbot: {
        margin: '0.5rem',
        width: '80%',
        //maxWidth: 'max-content',
        display: 'flex',
        alignItems: 'flex-end',
        '& img': {
            borderRadius: '50%',
            width: '5%',
            height: '5%',
            border: '1px solid black',
            //scale: '4.5',
        },
        '& div': {
            fontFamily: 'Source Sans Pro',
            flex: 1,
            '& > span': {
                color: 'black',

                // display: 'block',
                // textAlign: 'right',
                padding: '0 0.5rem',
            },
            '& p': {
                padding: '0.75rem',
                background: '#b5b5cb',
                borderRadius: 5,
                color: '#000000',
                fontSize: '16px',
                border: "2px solid #cccccc",
                maxWidth: 'max-content',
            },
        },
    },
    chatMessageUser: {
        margin: '0.5rem',
        width: '80%',
        //maxWidth: 'max-content',
        display: 'flex',
        alignItems: 'flex-end',
        '& img': {
            borderRadius: '50%',
            width: '5%',
            height: '5%',
            border: '1px solid black',
            //scale: '4.5',
        },
        '& div': {
            fontFamily: 'Source Sans Pro',
            flex: 1,
            '& > span': {
                color: 'black',

                display: 'block',
                textAlign: 'right',
                //float: 'right',
            },
            '& p': {
                padding: '0.75rem',
                background: '#b5b5cb',
                borderRadius: 5,
                color: '#000000',
                fontSize: '16px',
                border: "2px solid #cccccc",
                maxWidth: 'max-content',
                float: 'right',
            },
        },
    },
    verticalCenter: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        width: '95%',
    },
    send: {
        color: '#666666',
        borderRadius: '50%',
        //border: '1px solid #888888',
        marginLeft: '10%',
        backgroundColor: '#cccccc',
        marginTop: '15%',
    },
    agentPanel: {
        height: "100%",
        float: "left",
        width: "15%",
        backgroundColor: "#ffffff",
        border: "1px solid #000000",
        borderRadius: '15px',
        marginTop: "1.3%",
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        alignItems: 'center',
        paddingTop: '1%',
        paddingBottom: '2.5%',
        backgroundImage: `url(${bgImg})`,
    },
    agentIntro: {
        color: 'black',
        textAlign: "center",
        fontSize: '16px',
    },
    agentInfo: {
        width: "60px",
        marginTop: "10px",
        borderRadius: '0%',
        border: '2px solid #888888',
        justifyItems: 'center',
        alignItems: 'center',
    },
    topicInfo: {
        color: 'black',
        textAlign: "center",
        fontSize: '12px',
        '& div': {
            fontFamily: 'Source Sans Pro',
            flex: 1,
            '& > span': {
                color: 'black',

                // display: 'block',
                // textAlign: 'right',
                padding: '0 0.5rem',
            },
            '& p': {
                padding: '0.75rem',
                background: '#b5b5cb',
                borderRadius: 5,
                color: '#000000',
                fontSize: '16px',
                border: "2px solid #cccccc",
                maxWidth: 'max-content',
            },
        },
    },
    proceed: {
        marginTop: '2%',
        marginBottom: '2%',
        backgroundColor: '#FFFFFF',
    },
}));

export default ChatContainer;