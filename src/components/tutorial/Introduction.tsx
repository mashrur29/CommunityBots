import {Button, makeStyles, Typography} from "@material-ui/core";
import VideoPlayer from 'react-simple-video-player';
import React, {useEffect, useRef, useState} from 'react';
import ReactPlayer from "react-player";

interface Props {
};

const Introduction: React.FC<Props> = ({}) => {
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
        //scrollToBottom()
    });

    return (<>
        <Typography variant='h5' className={classes.instructions}>
            <span style={{color: "#000000"}}>Introduction</span>
        </Typography>
        <Typography className={classes.item}>
            <span style={{color: "#000000"}}>Welcome to CommunityBots! The COVID-19 pandemic has transformed people's lives and their experience of space and mobility. Big cities have large infrastructures to support people’s mobility. But smaller communities, like ours, rely on individual resources and self-sustaining structures that may have been severely impacted by the pandemic, causing permanent shifts in daily life. We are researchers at the Landscape Architecture and Regional Planning (LARP) and Manning College of Information and Computer Sciences (CICS) at the University of Massachusetts Amherst. In order to better understand the impacts of COVID-19, we have designed and developed a new chatbot platform — CommunityBots. The chatbot is designed to converse with people and collect information regarding their experiences during COVID-19 and the impacts it had on their lives. If you want to learn how to use this platform, go to the top navigation bar and click the “Tutorial” button.</span>
        </Typography>
        <Typography className={classes.item}>
            <span style={{color: "#000000"}}>Please help us in our study by sharing your experiences during COVID-19 via CommunityBots. Your provided information will be anonymous. Your participation will essentially help us to design and build a series of interactive visualizations, such as maps and diagrams, of Amherst and its neighborhoods to help both civilians and experts understand and absorb the implications of the pandemic on their lives as well as the community.</span>
        </Typography>

        <div className={classes.submit}>
            <Button href="/consent" variant="contained" className={classes.proceed}>Read Consent</Button>
            <div style={{alignSelf: "center", clear: "both"}}
                 ref={messagesEndRef}>
            </div>
        </div>
    </>);
}

const useStyles = makeStyles((theme) => ({
    instructions: {
        marginTop: '2%',
    },
    item: {
        marginTop: '1%',
        textAlign: 'justify',
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

export default Introduction;