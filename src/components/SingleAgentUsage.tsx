import {Button, makeStyles, Typography} from "@material-ui/core";
import VideoPlayer from 'react-simple-video-player';
import React, {useEffect, useRef, useState} from 'react';
import ReactPlayer from "react-player";
import chatStart from '../assets/tutorial/single_start.png';
import chatSkip from '../assets/tutorial/skip_topic.png';
import chatEnd from '../assets/tutorial/end_single.png';
import chatTurn from '../assets/tutorial/turn-taking.png';
import chatId from '../assets/tutorial/user_id.png';

interface Props {
};

const SingleAgentUsage: React.FC<Props> = ({}) => {
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
            <span style={{color: "#666666", textAlign: 'justify'}}><b>How to use CommunityBot?</b></span>
        </Typography>
        <Typography className={classes.item}>
            <p style={{color: "#000000", textAlign: 'justify'}}>This page contains instructions for using CommunityBot. You can access this page anytime from the navigation bar at the top.</p>
        </Typography>
        <br/>

        <Typography className={classes.item}>
            <p style={{color: "red", textAlign: 'center', fontSize: '15px'}}>** After accepting the consent form on the first page please do not close the window or hit refresh unless you want to start over. **</p>
        </Typography>
        <Typography variant='h6' className={classes.item}>
            <span style={{color: "#666666"}}><b>Pre-study Questionnaire</b></span>
        </Typography>
        <Typography>
            <p style={{color: "#000000", textAlign: 'justify'}}>After accepting the consent form, you will be taken to a pre-study questionnaire. Answer these questions to the best of your ability. The questions are intended to provide us with a general understanding of our participants. When you've finished answering all of them, click the "PROCEED" button.</p>
        </Typography>
        <Typography variant='h6' className={classes.item}>
            <span style={{color: "#666666"}}><b>Conversing with CommunityBot</b> </span>
        </Typography>
        <img src={chatStart} width="50%" style={{alignSelf: 'center'}}/><br/>
        <Typography>
            <p style={{color: "#000000", textAlign: "justify"}}>After answering the pre-study questions, you will be directed to a page to converse with CommunityBot. As seen in the image, in the leftmost region you will be able to see the time elapsed from the start of the conversation with the help of a timer. You can type your response to the chatbot's question in the textbox below. After you are done typing your response either hit "Enter" on your keyboard or click the button beside the text box to send your response. The chat history between you and the chatbot is stored in the upper-right region. It displays the message from the chatbot on the left and your message on the right.</p>
        </Typography><br/>



        <img src={chatEnd} width="50%" style={{alignSelf: 'center'}}/><br/>
        <Typography>
            <p style={{color: "#000000", textAlign: "justify"}}>
                 When the conversation is finished, you must click the "END CHAT" button that appears below in the leftmost region. This takes you to the Post-study questionnaire.
            </p>
        </Typography>

        <Typography variant='h6' className={classes.item}>
            <span style={{color: "#666666"}}><b>Post-study Questionnaire</b> </span>
        </Typography>
        <Typography>
            <p style={{color: "#000000", textAlign: "justify"}}>
                Following your conversation with CommunityBot, you must complete the post-study questions. The post-study questions are critical for answering our research questions, and you must complete them in order to receive payment. After you have completed the post-study questions, you must click the "FINISH" button. This will take you to the final page, which contains your user id. To receive your payment, you must save this id and submit it via Mechanical Turk.
            </p>
        </Typography><br/>
        <img src={chatId} width="50%" style={{alignSelf: 'center'}}/><br/>

        <br/>
        <br/><br/><br/></div>


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

export default SingleAgentUsage;