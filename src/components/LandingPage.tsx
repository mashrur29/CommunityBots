import {Button, makeStyles, Typography} from "@material-ui/core";
import VideoPlayer from 'react-simple-video-player';
import React, {useEffect, useRef, useState} from 'react';
import ReactPlayer from "react-player";

interface Props {
};

const LandingPage: React.FC<Props> = ({}) => {
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
            <span style={{color: "#000000"}}>Informed Consent</span>
        </Typography>
        <Typography className={classes.item}>
            <span style={{color: "#000000"}}>
                You are being invited to participate in a research study titled “Using Chatbot to understand Impacts of COVID-19 on Various Aspects of Life”. This study is being done by Pari Riahi and Narges Mahyar from the University of Massachusetts Amherst. Your participation will help us to collect useful information on the impact of COVID-19 on civic life.
            </span>
        </Typography>
        <Typography variant='h6' className={classes.item}>
            <span style={{color: "#000000"}}> Why are we doing this research study? </span>
        </Typography>
        <Typography className={classes.item}>
            <span style={{color: "#000000"}}>
                The purpose of this study is to analyze the impact of COVID-19 on civic life, and for this purpose, we are providing an online platform called “CommunityBots” where people can converse with multiple chatbots.
            </span>
        </Typography>
        <Typography variant='h6' className={classes.item}>
            <span style={{color: "#000000"}}> Who can participate in this research study? </span>
        </Typography>
        <Typography className={classes.item}>
            <span style={{color: "#000000"}}>
                Any person who is at least 18 years of age may participate in this research study.
            </span>
        </Typography>

        <Typography variant='h6' className={classes.item}>
            <span style={{color: "#000000"}}>What will I be asked to do and how much time will it take?  </span>
        </Typography>
        <Typography className={classes.item}>
            <span style={{color: "#000000"}}>
               If you agree to take part in the study, initially you will be asked to fill out an optional pre-study questionnaire to tell us more about yourself. These are mostly demographic questions and are intended to help us better understand the participants. Afterward, you will interact and converse with the chatbot system. You have to answer the questions asked by them to the best of your ability. Once the conversation ends click on the “END CHAT '' button, after which the study ends. The entire study is expected to last for about 60 minutes.
            </span>
        </Typography>

        <Typography variant='h6' className={classes.item}>
            <span style={{color: "#000000"}}>Will being in this research study help me in any way?  </span>
        </Typography>
        <Typography className={classes.item}>
            <span style={{color: "#000000"}}>
                You may not directly benefit from this research; however, we hope that your participation in the study may help researchers get a better understanding of the ways and the extent COVID-19 has impacted people's civic life. That in turn might help us pinpoint the issues we as a community need to address in these post-pandemic times.
            </span>
        </Typography>

        <Typography variant='h6' className={classes.item}>
            <span style={{color: "#000000"}}>What are my risks of being in this research study?  </span>
        </Typography>
        <Typography className={classes.item}>
            <span style={{color: "#000000"}}>
                We believe there are minimal risks associated with this research study; however, a risk of breach of confidentiality always exists and we have taken the steps to minimize this risk as outlined in the section below.
            </span>
        </Typography>
        <Typography className={classes.item}>
            <span style={{color: "#000000"}}>
                There could be a minimal risk of being upset when discussing the impact of COVID due to the mental stress of being in a pandemic. If you feel like you would like some assistance, please contact the Center for Counseling and Psychological Health at 413-545-2337 (Monday-Friday 8:30 am-4:30 pm). After hours and weekends/holidays for mental health emergencies: 877-831-7421. Also, they can contact the SAMHSA National Helpline – 1-800-662-HELP(4357). In the case of an emergency please call 911. Otherwise, they can contact their local psychological health organizations.
            </span>
        </Typography>

        <Typography variant='h6' className={classes.item}>
            <span style={{color: "#000000"}}>How will my personal information be protected?  </span>
        </Typography>
        <Typography className={classes.item}>
            <span style={{color: "#000000"}}>
                Your study records will be anonymized. We will not collect any identifiable information during the study. If you inadvertently disclose any identifiable information during the conversation with the chatbot, we will anonymize them. Upon enrollment in the study, each participant will be assigned a random 20 digit ID number and stored in a password-protected secure machine. Only the trained research team will have access to the data for analysis purposes.
            </span>
        </Typography>
        <Typography className={classes.item}>
            <span style={{color: "#000000"}}>
                The data collected from you and your code will be kept separate. The results of this study will be coded in such a way that your identity will not be attached to the final form of this study. The researcher retains the right to use and publish non-identifiable data. While individual responses are confidential, aggregate data will be presented representing averages or generalizations about the responses as a whole. All data will be stored in a secure location accessible only to the IRB approved researcher.
            </span>
        </Typography>

        <Typography variant='h6' className={classes.item}>
            <span style={{color: "#000000"}}>Will I be given any money or other compensation for being in this research study?  </span>
        </Typography>
        <Typography className={classes.item}>
            <span style={{color: "#000000"}}>
                Participation in this study is completely voluntary and the participants will not be compensated for their participation.
            </span>
        </Typography>

        <Typography variant='h6' className={classes.item}>
            <span style={{color: "#000000"}}>What happens if I say yes, but I change my mind later?  </span>
        </Typography>
        <Typography className={classes.item}>
            <span style={{color: "#000000"}}>
                You do not have to be in this study if you do not want to. If you agree to be in the study, but later change your mind, you may drop out at any time. Understand that by dropping out, you are forfeiting compensation. There are no penalties of any other kind.
            </span>
        </Typography>

        <Typography variant='h6' className={classes.item}>
            <span style={{color: "#000000"}}>Who can I talk to if I have questions?  </span>
        </Typography>
        <Typography className={classes.item}>
            <span style={{color: "#000000"}}>
                If you have questions about this project or if you have a research-related problem, you may contact the researcher, Pari Riahi at priahi@umass.edu. If you have any questions concerning your rights as a research subject, you may contact the University of Massachusetts Amherst Human Research Protection Office (HRPO) at (413) 545-3428 or humansubjects@ora.umass.edu.
            </span>
        </Typography>


        <Typography variant='h6' className={classes.demo}>
            <span style={{color: "#000000"}}>By clicking "PROCEED" below you are indicating that you are at least 18 years old, have read this consent form, and agree to participate in this research study. Please print a copy of this page for your records.</span>
        </Typography>
        <div className={classes.submit}>
            <Button href="/tutorial" variant="contained" className={classes.proceed}>Proceed</Button>
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

export default LandingPage;