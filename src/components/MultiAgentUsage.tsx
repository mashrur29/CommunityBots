import {Button, makeStyles, Typography} from "@material-ui/core";
import VideoPlayer from 'react-simple-video-player';
import React, {useEffect, useRef, useState} from 'react';
import ReactPlayer from "react-player";
import chatStart from '../assets/tutorial/start.png';
import chatSkip from '../assets/tutorial/skip_topic.png';
import chatEnd from '../assets/tutorial/end_chat.png';
import chatTurn from '../assets/tutorial/turn-taking.png';
import chatId from '../assets/tutorial/user_id.png';

interface Props {
};

const MultiAgentUsage: React.FC<Props> = ({}) => {
    const classes = useStyles();

    const urls = [
        'https://www.youtube.com/watch?v=C0DPdy98e4c'
    ]
    const [currentUrlIndex, setCurrentUrlIndex] = React.useState(0)
    const [showNextButton, setShowNextButton] = React.useState(false)

    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
    }

    useEffect(() => {
        scrollToBottom()
    });

    return (<>
        <div style={{width: '70%', margin: '0 auto'}}>
        <Typography variant='h6' className={classes.item}>
            <span style={{color: "#666666", textAlign: 'justify'}}><b>How to use CommunityBots?</b></span>
        </Typography>
        <Typography className={classes.item}>
            <p style={{color: "#000000", textAlign: 'justify'}}>This page contains instructions for using CommunityBots. You can access this page anytime from the navigation bar at the top.</p>
        </Typography>
        <Typography className={classes.item}>
            <p style={{color: "red", textAlign: 'center', fontSize: '15px'}}>** After accepting the consent form on the first page please do not close the window or hit refresh unless you want to start over. **</p>
        </Typography>
        <Typography variant='h6' className={classes.item}>
            <span style={{color: "#666666"}}><b>Demographic Questionnaire</b></span>
        </Typography>
        <Typography>
            <p style={{color: "#000000", textAlign: 'justify'}}>After you start the study, you will be taken to a questionnaire. Answer these questions to the best of your ability. The questions are intended to provide us with a general understanding of our participants. When you've finished answering all of them, click the "PROCEED" button.</p>
        </Typography>
        <Typography variant='h6' className={classes.item}>
            <span style={{color: "#666666"}}><b>Conversing with CommunityBots</b> </span>
        </Typography>

        <img src={chatStart} width="70%" /><br/>
        <Typography>
            <p style={{color: "#000000", textAlign: 'justify'}}>After completing the demographic questions, you will be taken to a page to converse with CommunityBots. As seen in the image, the leftmost region contains information on the chatbots that you will converse with. The logo of the chatbot that will ask you questions will have its eyes open and will display the name of the topic on which it is currently conversing with you below it. You will also see a timer at the top where you can check the time elapsed from the start of your conversation. You can type your response to the chatbot's question in the textbox region below. After you are done typing your response either hit "Enter" on your keyboard or click the button beside the text box to send your response. The chat history between you and the chatbot is stored in the upper-right region. It displays the message from the chatbot on the left and your message on the right.</p>
        </Typography><br/>
        <img src={chatSkip} width="70%" /><br/>
        <Typography>
            <p style={{color: "#000000"}}>
                You may choose to skip a topic at any time during the conversation. To trigger this type; skip this topic.
            </p>
        </Typography><br/>

        <img src={chatTurn} width="65%" style={{paddingLeft:"2%"}}/><br/><br/>
        <Typography>
            <p style={{color: "#000000", textAlign: "justify"}}>
                You'll notice the chatbot taking turns during the conversation. It means that the current chatbot has finished asking questions and that the next chatbot will begin asking questions. This happens automatically, and you don't need to do anything; simply continue your conversation with the new chatbot.
            </p>
        </Typography><br/>

        <img src={chatEnd} width="68%" style={{paddingLeft:"1%"}}/><br/>
        <Typography>
            <p style={{color: "#000000", textAlign: "justify"}}>
                 When the conversation is finished, you must click the "END CHAT" button that appears below the names of the expert chatbots. This takes you to the Post-study questionnaire.
            </p>
        </Typography>



        <br/>
        <div className={classes.submit}>
        <Button href='/prestudy' type='submit' variant="contained" className={classes.proceed}>START STUDY</Button>
        </div>
        <br/><br/>
        </div>


    </>);
}

const useStyles = makeStyles((theme) => ({
    instructions: {
        marginTop: '2%',
    },
    item: {
        marginTop: '1%',
    },
    demo: {
        marginTop: '2%',
        textAlign: 'center',
    },
    video: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        paddingBottom: '2%'
    },
    proceed: {
        marginTop: '2%',
        marginBottom: '2%',
        backgroundColor: '#D3D3D3',
    },
    submit: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
    },
}));

export default MultiAgentUsage;