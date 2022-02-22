import {Typography} from '@material-ui/core';
import React from 'react';
import Cookies from 'universal-cookie';

interface Props {
};

const Finish: React.FC<Props> = () => {
    const cookies = new Cookies();
    return (<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center',}}>
        <Typography variant='h4'>
            <span style={{color: "#666666", marginTop: '10%'}}>Thank you for taking part in the conversation.</span>
        </Typography>

        <Typography variant='h6'>
            <span style={{color: "#666666", marginTop: '10%'}}>Your ID is: <b>{cookies.get('displayName')}</b></span>
        </Typography>

        <Typography variant='h6'>
            <span style={{color: "#666666", marginTop: '10%'}}>If you are a Mechanical Turker, please copy your user ID and proceed to Mechanical-Turk for the last step to finish the study and receive your payment.</span>
        </Typography>

    </div>);
};

export default Finish;