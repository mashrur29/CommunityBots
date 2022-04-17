import UIfx from "uifx";
import {auth} from './config/fbConfig';
import Navbar from './components/Navbar';
import PreStudy from './components/PreStudy';
import UserChat from './components/UserChat';
import React, {useEffect, useState} from 'react';
import LandingPage from './components/LandingPage';
import {makeStyles} from '@material-ui/core/styles';
import {Chat, ChatSender, Topic} from './models/Chat';
import CssBaseline from '@material-ui/core/CssBaseline';
import {initChatDB, sendMessage} from './utils/dbUtils';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {
    getResponseQuality,
    topics,
    welcomeMessages,
    concludingMessages,
    welcomeMessages2,
    welcomeMessages3
} from "./juji";
import PopSound from './assets/audio/pop.wav';
import PostStudy from "./components/PostStudy";
import Finish from "./components/Finish";
import MultiAgentUsage from "./components/MultiAgentUsage";
import Introduction from "./components/tutorial/Introduction";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

interface Props {
    chatAgent1: any,
    chatTopic1: any,
    ws1: any,
    chatInfo1: any,
};

const chatFormat = `
                mutation {
                    saveChatMessage(input: {
                        type: "normal"
                        pid: "%s"
                        text: "%s"
                    }) {
                        success
                    }
                }
                `;

const util1 = require('util');
var cnt = 0;

/*
    Elements for turn-taking
 */

var consecutiveBadResponses = 0; // based on our pilot
var currentTopic = 0;
var consecutiveBadResponsesAgent = 0;
export var userChatStarted = 0;
export var timeLimitExceeded = 0;
var isFirstTopic = -1;
const App: React.FC<Props> = ({ws1, chatAgent1, chatTopic1, chatInfo1}) => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [qualityThreshold, setqualityThreshold] = useState(2);
    const classes = useStyles();
    const [chat, setChat] = useState<Chat>({
        open: false,
        displayName: '',
        systemName: '',
        startedAt: new Date(),
        messages: [],
    });

    const popSound = new UIfx(PopSound, {volume: 0.5});

    useEffect(() => {
        auth.onAuthStateChanged(user => setIsAdmin(user != null));
    }, []);

    const initChat = (displayName: string, systemName: string, chatId: string) => {
        initChatDB(displayName, systemName, chatId, setChat);
    };

    var chatAgent: any;
    var chatTopic: any;

    chatAgent = chatAgent1[currentTopic];
    chatTopic = chatTopic1[currentTopic];


    const isSkipTopic = (msg: any) => {
        var msg_lower = msg.toLowerCase();
        if (msg_lower.includes('skip this topic')) {
            return true;
        }

        return false;
    };

    if (currentTopic >= 1) {
        if (ws1[currentTopic - 1] !== null) {
            if (ws1[currentTopic - 1].readyState === WebSocket.OPEN) {
                ws1[currentTopic - 1].close();
            }
        }
    }

    const addMessageGenerator = (sentBy: ChatSender) => (messageText: string, topic: Topic, ws: any = null, chatInfo: any = null, setCbtyping: any = null) => {
        if (sentBy === 'user') {
            setCbtyping(true);
            userChatStarted = 1;
            var msg = messageText.replace(/\n$/, "");

            if (msg.length !== 0) {

                /*
                    Turn-taking
                 */
                if(isFirstTopic === -1) {
                    isFirstTopic = 0;
                    setqualityThreshold(msg.length);
                }

                var quality = getResponseQuality(msg)[0];
                if (isSkipTopic(msg)) {
                    consecutiveBadResponses = 0;
                    currentTopic = currentTopic + 1;
                    isFirstTopic = -1;
                    sendMessage(chat.id!, sentBy, msg, chatTopic);
                    if (currentTopic >= topics) {
                        setTimeout(() => {
                            sendMessage(chat.id!, chatAgent, "Thank you! the survey is now complete. Please click on 'END CHAT' to start the post-study questionnaire.", chatTopic);
                        }, 200);
                        setCbtyping(false);
                    } else {
                        var welcMsg = welcomeMessages[currentTopic];
                        //setCbtyping(true);
                        setTimeout(() => {
                            sendMessage(chat.id!, chatAgent1[currentTopic-1], "Thank you for taking the time to respond to this topic's questions. I'm going to stop asking questions on this subject now.", chatTopic1[currentTopic]);
                        }, 200);
                        setTimeout(() => {
                            sendMessage(chat.id!, chatAgent1[currentTopic], welcMsg, chatTopic1[currentTopic]);
                        }, 205);

                        if (currentTopic === 4 || currentTopic === 8) {
                            setTimeout(() => {
                                sendMessage(chat.id!, chatAgent1[currentTopic], welcomeMessages2[currentTopic], chatTopic1[currentTopic]);
                            }, 210);
                            setTimeout(() => {
                                sendMessage(chat.id!, chatAgent1[currentTopic], welcomeMessages3[currentTopic], chatTopic1[currentTopic]);
                            }, 215);
                        }

                        setCbtyping(false);
                    }
                } else if (quality < qualityThreshold) {
                    consecutiveBadResponses = consecutiveBadResponses + 1;
                    if (consecutiveBadResponses > 3) {
                        consecutiveBadResponses = 0;
                        currentTopic = currentTopic + 1;
                        isFirstTopic = -1;
                        sendMessage(chat.id!, sentBy, msg, chatTopic);
                        var conclMsg = concludingMessages[currentTopic - 1];
                        //sendMessage(chat.id!, chatAgent, conclMsg, chatTopic);
                        if (currentTopic >= topics) {
                            setTimeout(() => {
                                sendMessage(chat.id!, chatAgent, "Thank you! the survey is now complete. Please click on 'END CHAT' to start the post-study questionnaire.", chatTopic);
                            }, 200);
                            setCbtyping(false);
                        } else {
                            var welcMsg = welcomeMessages[currentTopic];
                            //setCbtyping(true);
                            setTimeout(() => {
                                sendMessage(chat.id!, chatAgent1[currentTopic-1], "Thank you for taking the time to respond to this topic's questions. I'm going to stop asking questions on this subject now.", chatTopic1[currentTopic]);
                            }, 200);

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
                        sendMessage(chat.id!, sentBy, msg, topic);
                        if (ws !== null) {
                            if (ws.readyState === WebSocket.OPEN) {
                                ws.send(util1.format(chatFormat, chatInfo.participationId, msg));
                            }
                        } else {
                            setTimeout(() => {
                                sendMessage(chat.id!, chatAgent, "Thank you! the survey is now complete. Please click on 'END CHAT' to start the post-study questionnaire.", chatTopic);
                            }, 200);
                            setCbtyping(false);
                        }
                    }
                } else if (currentTopic < topics) {
                    sendMessage(chat.id!, sentBy, msg, topic);
                    if (ws !== null) {
                        if (ws.readyState === WebSocket.OPEN) {
                            ws.send(util1.format(chatFormat, chatInfo.participationId, msg));
                        }
                    } else {
                        setTimeout(() => {
                            sendMessage(chat.id!, chatAgent, "Thank you! the survey is now complete. Please click on 'END CHAT' to start the post-study questionnaire.", chatTopic);
                        }, 200);
                        setCbtyping(false);
                    }
                } else {
                    sendMessage(chat.id!, chatAgent, "Thank you! the survey is now complete. Please click on 'END CHAT' to start the post-study questionnaire.", chatTopic);
                    setCbtyping(false);
                }
            }
        }
        //sendMessage(chat.id!, sentBy, messageText, topic);
    };

    const incrementTopic = () => {
        currentTopic = currentTopic + 1;
        isFirstTopic = -1;
        return currentTopic;
    };

    if (currentTopic === -1) {
        currentTopic = currentTopic + 1;
        var welcMsg = welcomeMessages[currentTopic];
        sendMessage(chat.id!, chatAgent1[currentTopic], welcMsg, chatTopic1[currentTopic]);
    }


    var id = localStorage.getItem('id');

    cnt = cnt + 1;


    return (<>
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className={classes.container}>
                    <Navbar isAdmin={isAdmin}/>
                    <main className={classes.root}>
                        <Switch>
                            <Route path='/consent' render={() => <LandingPage/>}/>
                            <Route path='/tutorial' render={() => <MultiAgentUsage/>}/>
                            <Route path='/prestudy' render={() => <PreStudy/>}/>
                            <Route path='/chat'
                                   render={() => <UserChat addMessage={addMessageGenerator('user')} chat={chat}
                                                           initChat={initChat} chatAgent1={chatAgent1}
                                                           chatTopic1={chatTopic1} ws1={ws1}
                                                           chatInfo1={chatInfo1}
                                                           currentTopic={currentTopic}
                                                           incrementTopic={incrementTopic}
                                   />}/>
                            <Route path='/poststudy' render={() => <PostStudy/>}/>
                            <Route path='/finish' render={() => <Finish/>}/>
                            <Route path='/' render={() => <Introduction/>}/>
                        </Switch>
                    </main>
                </div>
            </ThemeProvider>
        </Router>
    </>);
};

const useStyles = makeStyles(theme => ({
    container: {
        //display: 'flex',
        //flexDirection: 'column',
        height: '100%',
        //flex: 1,
        backgroundColor: "#ffffff",
    },
    root: {
        //flex: 1,
        width: '95vw',
        margin: 'auto',
        //[theme.breakpoints.up('md')]: {
        //    width: '90vw',
        //},
    }
}));


export default App;