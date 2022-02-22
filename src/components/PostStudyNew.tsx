import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/styles";
import {sendFormMessagePostStudy, setPostStudyAnswer, startNewPostStudy} from '../utils/dbUtils';
import {
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@material-ui/core";
import chatSample from '../assets/background/chat_sample.png';
import Cookies from "universal-cookie";

interface Props {
};

const PostStudy: React.FC<Props> = ({}) => {
    const [docId, SetDocId] = React.useState('');
    const classes = useStyles();
    const cookies = new Cookies();
    const userName = cookies.get('displayName');

    useEffect(() => {
        submitHandler();
    }, []);

    const submitHandler = async () => {
        const chatDocId = await startNewPostStudy(userName, 3);
        SetDocId(chatDocId);
        //cookies.set('displayName', chatDocId);
        //localStorage.setItem("id", chatDocId);
        //initChat(userName, chatDocId, chatDocId);
    };

    const [value1, setValue1] = React.useState('');
    const [error1, setError1] = React.useState(false);
    const [helperText1, setHelperText1a] = React.useState('Choose wisely');

    const handleRadioChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue1((event.target as HTMLInputElement).value);
        setHelperText1a(' ');
        setError1(false);
    };

    const [value2, setValue2] = React.useState('');
    const [error2, setError2] = React.useState(false);
    const [helperText2, setHelperText2] = React.useState('Choose wisely');

    const handleRadioChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue2((event.target as HTMLInputElement).value);
        setHelperText2(' ');
        setError2(false);
    };

    const [value3, setValue3] = React.useState('');
    const [error3, setError3] = React.useState(false);
    const [helperText3, setHelperText3] = React.useState('Choose wisely');

    const handleRadioChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue3((event.target as HTMLInputElement).value);
        setHelperText3(' ');
        setError3(false);
    };

    var [value4, setValue4] = React.useState('');
    var [other4, setOther4] = React.useState('');
    const [error4, setError4] = React.useState(false);
    const [helperText4, setHelperText4] = React.useState('Choose wisely');

    const handleRadioChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue4((event.target as HTMLInputElement).value);
        setHelperText4(' ');
        setError4(false);
    };
    const handleOtherChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        value4 = other4;
        setOther4((event.target as HTMLInputElement).value);
        setHelperText4(' ');
        setError4(false);
    };

    const [value5, setValue5] = React.useState('');
    const [error5, setError5] = React.useState(false);
    const [helperText5, setHelperText5] = React.useState('Choose wisely');

    const handleRadioChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue5((event.target as HTMLInputElement).value);
        setHelperText5(' ');
        setError5(false);
    };

    const [value6, setValue6] = React.useState('');
    const [error6, setError6] = React.useState(false);
    const [helperText6, setHelperText6] = React.useState('Choose wisely');

    const handleRadioChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue6((event.target as HTMLInputElement).value);
        setHelperText6(' ');
        setError6(false);
    };

    const [value7, setValue7] = React.useState('');
    const [error7, setError7] = React.useState(false);
    const [helperText7, setHelperText7] = React.useState('Choose wisely');

    const handleRadioChange7 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue7((event.target as HTMLInputElement).value);
        setHelperText7(' ');
        setError7(false);
    };

    const [value8, setValue8] = React.useState('');
    const [error8, setError8] = React.useState(false);
    const [helperText8, setHelperText8] = React.useState('Choose wisely');

    const handleRadioChange8 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue8((event.target as HTMLInputElement).value);
        setHelperText8(' ');
        setError8(false);
    };

    const [value9, setValue9] = React.useState('');
    const [error9, setError9] = React.useState(false);
    const [helperText9, setHelperText9] = React.useState('Choose wisely');

    const handleRadioChange9 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue9((event.target as HTMLInputElement).value);
        setHelperText9(' ');
        setError9(false);
    };

    const [value10, setValue10] = React.useState('');
    const [error10, setError10] = React.useState(false);
    const [helperText10, setHelperText10] = React.useState('Choose wisely');

    const handleRadioChange10 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue10((event.target as HTMLInputElement).value);
        setHelperText10(' ');
        setError10(false);
    };

    var [value11, setValue11] = React.useState('');
    var [other11, setOther11] = React.useState('');
    const [error11, setError11] = React.useState(false);
    const [helperText11, setHelperText11] = React.useState('Choose wisely');

    const handleRadioChange11 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue11((event.target as HTMLInputElement).value);
        setHelperText11(' ');
        setError11(false);
    };
    const handleOtherChange11 = (event: React.ChangeEvent<HTMLInputElement>) => {
        value11 = other11;
        setOther11((event.target as HTMLInputElement).value);
        setHelperText11(' ');
        setError11(false);
    };

    var [value11a, setValue11a] = React.useState('');
    var [other11a, setOther11a] = React.useState('');
    const [error11a, setError11a] = React.useState(false);
    const [helperText11a, setHelperText11a] = React.useState('Choose wisely');

    const handleRadioChange11a = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue11a((event.target as HTMLInputElement).value);
        setHelperText11a(' ');
        setError11a(false);
    };
    const handleOtherChange11a = (event: React.ChangeEvent<HTMLInputElement>) => {
        value11a = other11a;
        setOther11a((event.target as HTMLInputElement).value);
        setHelperText11a(' ');
        setError11a(false);
    };

    const [value12, setValue12] = React.useState('');
    const [error12, setError12] = React.useState(false);
    const [helperText12, setHelperText12] = React.useState('Choose wisely');

    const handleRadioChange12 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue12((event.target as HTMLInputElement).value);
        setHelperText12(' ');
        setError12(false);
    };

    const [value13, setValue13] = React.useState('');
    const [error13, setError13] = React.useState(false);
    const [helperText13, setHelperText13] = React.useState('Choose wisely');

    const handleRadioChange13 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue13((event.target as HTMLInputElement).value);
        setHelperText13(' ');
        setError13(false);
    };

    const [value14, setValue14] = React.useState('');
    const [error14, setError14] = React.useState(false);
    const [helperText14, setHelperText14] = React.useState('Choose wisely');

    const handleRadioChange14 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue14((event.target as HTMLInputElement).value);
        setHelperText14(' ');
        setError14(false);
    };

    const [value15, setValue15] = React.useState('');
    const [error15, setError15] = React.useState(false);
    const [helperText15, setHelperText15] = React.useState('Choose wisely');

    const handleRadioChange15 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue15((event.target as HTMLInputElement).value);
        setHelperText15(' ');
        setError15(false);
    };

    const [value16, setValue16] = React.useState('');
    const [error16, setError16] = React.useState(false);
    const [helperText16, setHelperText16] = React.useState('Choose wisely');

    const handleRadioChange16 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue16((event.target as HTMLInputElement).value);
        setHelperText16(' ');
        setError16(false);
    };

    const [value17, setValue17] = React.useState('');
    const [error17, setError17] = React.useState(false);
    const [helperText17, setHelperText17] = React.useState('Choose wisely');

    const handleRadioChange17 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue17((event.target as HTMLInputElement).value);
        setHelperText17(' ');
        setError17(false);
    };

    const [value18, setValue18] = React.useState('');
    const [error18, setError18] = React.useState(false);
    const [helperText18, setHelperText18] = React.useState('Choose wisely');

    const handleRadioChange18 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue18((event.target as HTMLInputElement).value);
        setHelperText18(' ');
        setError18(false);
    };

    const [value19, setValue19] = React.useState('');
    const [error19, setError19] = React.useState(false);
    const [helperText19, setHelperText19] = React.useState('Choose wisely');

    const handleRadioChange19 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue19((event.target as HTMLInputElement).value);
        setHelperText19(' ');
        setError19(false);
    };

    const [value20, setValue20] = React.useState('');
    const [error20, setError20] = React.useState(false);
    const [helperText20, setHelperText20] = React.useState('Choose wisely');

    const handleRadioChange20 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue20((event.target as HTMLInputElement).value);
        setHelperText20(' ');
        setError20(false);
    };

    var [value21, setValue21] = React.useState('');
    var [other21, setOther21] = React.useState('');
    const [error21, setError21] = React.useState(false);
    const [helperText21, setHelperText21] = React.useState('Choose wisely');

    const handleRadioChange21 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue21((event.target as HTMLInputElement).value);
        setHelperText21(' ');
        setError21(false);
    };
    const handleOtherChange21 = (event: React.ChangeEvent<HTMLInputElement>) => {
        value21 = other21;
        setOther21((event.target as HTMLInputElement).value);
        setHelperText21(' ');
        setError21(false);
    };

    const [value22, setValue22] = React.useState('');
    const [error22, setError22] = React.useState(false);
    const [helperText22, setHelperText22] = React.useState('Choose wisely');

    const handleRadioChange22 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue22((event.target as HTMLInputElement).value);
        setHelperText22(' ');
        setError22(false);
    };

    const [value23, setValue23] = React.useState('');
    const [error23, setError23] = React.useState(false);
    const [helperText23, setHelperText23] = React.useState('Choose wisely');

    const handleRadioChange23 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue23((event.target as HTMLInputElement).value);
        setHelperText23(' ');
        setError23(false);
    };

    var [value24, setValue24] = React.useState('');
    var [other24, setOther24] = React.useState('');
    const [error24, setError24] = React.useState(false);
    const [helperText24, setHelperText24] = React.useState('Choose wisely');

    const handleRadioChange24 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue24((event.target as HTMLInputElement).value);
        setHelperText24(' ');
        setError24(false);
    };
    const handleOtherChange24 = (event: React.ChangeEvent<HTMLInputElement>) => {
        value24 = other24;
        setOther24((event.target as HTMLInputElement).value);
        setHelperText24(' ');
        setError24(false);
    };

    const [value25, setValue25] = React.useState('');
    const [error25, setError25] = React.useState(false);
    const [helperText25, setHelperText25] = React.useState('Choose wisely');

    const handleRadioChange25 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue25((event.target as HTMLInputElement).value);
        setHelperText25(' ');
        setError25(false);
    };

    const [value26, setValue26] = React.useState('');
    const [error26, setError26] = React.useState(false);
    const [helperText26, setHelperText26] = React.useState('Choose wisely');

    const handleRadioChange26 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue26((event.target as HTMLInputElement).value);
        setHelperText26(' ');
        setError26(false);
    };

    const [value27, setValue27] = React.useState('');
    const [error27, setError27] = React.useState(false);
    const [helperText27, setHelperText27] = React.useState('Choose wisely');

    const handleRadioChange27 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue27((event.target as HTMLInputElement).value);
        setHelperText27(' ');
        setError27(false);
    };

    const [value28, setValue28] = React.useState('');
    const [error28, setError28] = React.useState(false);
    const [helperText28, setHelperText28] = React.useState('Choose wisely');

    const handleRadioChange28 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue28((event.target as HTMLInputElement).value);
        setHelperText28(' ');
        setError28(false);
    };

    const validate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (value1 === '') {
            setHelperText1a('Please select an option for Q1a.');
            setError1(true);
        } else {
            setError1(false);
        }


        if (value2 === '') {
            setHelperText2('Please select an option.');
            setError2(true);
        } else {
            setError2(false);
        }

        if (value3 === '') {
            setHelperText3('Please select an option.');
            setError3(true);
        } else {
            setError3(false);
        }

        if (value4 === '') {
            setHelperText4('Please enter your answer.');
            setError4(true);
        } else {
            setError4(false);
        }

        if (value5 === '') {
            setHelperText5('Please enter your answer.');
            setError5(true);
        } else {
            setError5(false);
        }

        if (value6 === '') {
            setHelperText6('Please enter your answer.');
            setError6(true);
        } else {
            setError6(false);
        }

        if (value7 === '') {
            setHelperText7('Please select an option.');
            setError7(true);
        } else {
            setError7(false);
        }

        if (value8 === '') {
            setHelperText8('Please enter your answer.');
            setError8(true);
        } else {
            setError8(false);
        }

        if (value9 === '') {
            setHelperText9('Please select an option.');
            setError9(true);
        } else {
            setError9(false);
        }

        if (value10 === '') {
            setHelperText10('Please select an option.');
            setError10(true);
        } else {
            setError10(false);
        }

        if (value11 === '') {
            setHelperText11('Please select an option.');
            setError11(true);
        } else {
            setError11(false);
        }

        if (value11 !== '' && value11 === 'Yes') {
            if (value11a === '') {
                setHelperText11a('Please select an option.');
                setError11a(true);
            } else {
                setError11a(false);
            }
        }

        if (value12 === '') {
            setHelperText12('Please enter your answer.');
            setError12(true);
        } else {
            setError12(false);
        }

        if (value13 === '') {
            setHelperText13('Please select an option.');
            setError13(true);
        } else {
            setError13(false);
        }

        if (value14 === '') {
            setHelperText14('Please select an option.');
            setError14(true);
        } else {
            setError14(false);
        }

        if (value15 === '') {
            setHelperText15('Please select an option.');
            setError15(true);
        } else {
            setError15(false);
        }

        if (value16 === '') {
            setHelperText16('Please select an option.');
            setError16(true);
        } else {
            setError16(false);
        }

        if (value17 === '') {
            setHelperText17('Please select an option.');
            setError17(true);
        } else {
            setError17(false);
        }

        if (value18 === '') {
            setHelperText18('Please select an option.');
            setError18(true);
        } else {
            setError18(false);
        }

        if (value19 === '') {
            setHelperText19('Please select an option.');
            setError19(true);
        } else {
            setError19(false);
        }

        if (value20 === '') {
            setHelperText20('Please select an option.');
            setError20(true);
        } else {
            setError20(false);
        }

        if (value21 === '') {
            setHelperText21('Please select an option.');
            setError21(true);
        } else {
            setError21(false);
        }

        if (value22 === '') {
            setHelperText22('Please select an option.');
            setError22(true);
        } else {
            setError22(false);
        }

        if (value23 === '') {
            setHelperText23('Please select an option.');
            setError23(true);
        } else {
            setError23(false);
        }

        if (value24 === '') {
            setHelperText24('Please select an option.');
            setError24(true);
        } else {
            setError24(false);
        }

        if (value25 === '') {
            setHelperText25('Please select an option.');
            setError25(true);
        } else {
            setError25(false);
        }

        if (value26 === '') {
            setHelperText26('Please select an option.');
            setError26(true);
        } else {
            setError26(false);
        }

        if (value27 === '') {
            setHelperText27('Please select an option.');
            setError27(true);
        } else {
            setError27(false);
        }

        if (value28 === '') {
            setHelperText28('Please select an option.');
            setError28(true);
        } else {
            setError28(false);
        }

        if (value1 !== '' && value2 !== '' && value3 !== '' && value4 !== '' && value5 !== '' && value6 !== '' && value7 !== '' && value8 !== '' && value9 !== '' && value10 !== '' && value11 !== '' && value12 !== '' && value13 !== '' && value14 !== '' && value15 !== '' && value16 !== '' && value17 !== '' && value18 !== '' && value19 !== '' && value20 !== '' && value21 !== '' && value22 !== '' && value23 !== '' && value24 !== '' && value25 !== '' && value26 !== '' && value27 !== '' && value28 !== '') {
            setPostStudyAnswer(docId, userName, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value11a, value12, value13, value14, value15, value16, value17, value18, value19, value20, value21, value22, value23, value24, value25, value26, value27, value28);
            window.open('/finish', '_self');
        }

    }

    return (<div>
        <form onSubmit={validate}>
            <div className={classes.questions}>
                <Typography variant='h5'>
                    <span style={{color: "#666666"}}>Post-Study Questions</span>
                </Typography>
                <Typography>
                    <span
                        style={{color: "#666666"}}>Please note your experience and feedback in the following questions</span>
                </Typography>
                <FormControl error={error1} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q1) Now that you have talked to CommunityBots
                        which has three different chatbot agents. How do you feel about providing information to a
                        specific chatbot, e.g., a healthcare chatbot?</FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange1} value={value1}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Very comfortable"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very comfortable"/>
                        <FormControlLabel value="Comfortable"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Comfortable"/>
                        <FormControlLabel value="Neutral" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Neutral"/>
                        <FormControlLabel value="Uncomfortable"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Uncomfortable"/>
                        <FormControlLabel value="Very uncomfortable"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very uncomfortable"/>
                    </RadioGroup>
                    <FormHelperText>{helperText1}</FormHelperText>
                </FormControl>
                <br/>


                <FormControl error={error2} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q2) Please rank your satisfaction with
                        talking to CommunityBots: </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange2} value={value2}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Very satisfied"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very satisfied"/>
                        <FormControlLabel value="Satisfied" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Satisfied"/>
                        <FormControlLabel value="Neutral" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Neutral"/>
                        <FormControlLabel value="Unsatisfied"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Unsatisfied"/>
                        <FormControlLabel value="Very unsatisfied"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very unsatisfied"/>
                    </RadioGroup>
                    <FormHelperText>{helperText2}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error3} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q3) How did you feel conversing with
                        CommunityBots in general? </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange3} value={value3}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Very engaging"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very engaging"/>
                        <FormControlLabel value="Engaging" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Engaging"/>
                        <FormControlLabel value="Neutral" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Neutral"/>
                        <FormControlLabel value="Non-engaging"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Non-engaging"/>
                        <FormControlLabel value="Very non-engaging"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very non-engaging"/>
                    </RadioGroup>
                    <FormHelperText>{helperText3}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error4} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q4) What is your opinion on the number of
                        chatbots in the CommunityBots? </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange4} value={value4}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="I would prefer less than three chatbots"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="I would prefer less than three chatbots"/>
                        <FormControlLabel value="I was satisfied with the number of chatbots"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="I was satisfied with the number of chatbots"/>
                        <FormControlLabel value="I would prefer more than three chatbots"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="I would prefer more than three chatbots"/>
                        <span>
                        <FormControlLabel value="Other" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Other"/>
                        <TextField onChange={handleOtherChange4} value={other4} id="gender" className={classes.textroot}
                                   InputProps={{
                                       className: classes.textinput
                                   }}/></span>
                    </RadioGroup>
                    <FormHelperText>{helperText4}</FormHelperText>
                </FormControl>
                <br/>

                <Typography>
                    <span
                        style={{color: "#666666"}}>In CommunityBots, a chatbot often switches between topics, e.g., the household chatbot asks questions on multiple topics such as dwelling, worship, family-home life, and so on. There is also a switch between three chatbots themselves (e.g. a switch between the Household, Work, and Healthcare). Please respond to questions 5-7 based on this information.</span>
                </Typography>
                <br/>

                <FormControl error={error5} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q5) How did you feel when a chatbot switched
                        from one topic to another? </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange5} value={value5}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Very clear" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very clear"/>
                        <FormControlLabel value="Clear" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Clear"/>
                        <FormControlLabel value="Neutral" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Neutral"/>
                        <FormControlLabel value="Somewhat clear"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Somewhat clear"/>
                        <FormControlLabel value="Unclear" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Unclear"/>
                    </RadioGroup>
                    <FormHelperText>{helperText5}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error6} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q6) How did you feel when a chatbot switched
                        from one topic to another? </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange6} value={value6}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Too fast" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Too fast"/>
                        <FormControlLabel value="Fast" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Fast"/>
                        <FormControlLabel value="Neutral" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Neutral"/>
                        <FormControlLabel value="Slow" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Slow"/>
                        <FormControlLabel value="Very slow" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very slow"/>
                    </RadioGroup>
                    <FormHelperText>{helperText6}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error7} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q7) How did you feel when a chatbot switched
                        from one topic to another? </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange7} value={value7}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Very clear" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very clear"/>
                        <FormControlLabel value="Clear" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Clear"/>
                        <FormControlLabel value="Neutral" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Neutral"/>
                        <FormControlLabel value="Somewhat clear"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Somewhat clear"/>
                        <FormControlLabel value="Unclear" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Unclear"/>
                    </RadioGroup>
                    <FormHelperText>{helperText7}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error8} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q8) Rank your level of engagement with
                        the <b>Household</b> chatbot: </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange8} value={value8}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Very engaging"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very engaging"/>
                        <FormControlLabel value="Engaging" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Engaging"/>
                        <FormControlLabel value="Neutral" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Neutral"/>
                        <FormControlLabel value="Non-engaging"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Non-engaging"/>
                        <FormControlLabel value="Very non-engaging"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very non-engaging"/>
                    </RadioGroup>
                    <FormHelperText>{helperText8}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error9} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q9) Rank your level of engagement with
                        the <b>Work</b> chatbot: </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange9} value={value9}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Very engaging"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very engaging"/>
                        <FormControlLabel value="Engaging" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Engaging"/>
                        <FormControlLabel value="Neutral" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Neutral"/>
                        <FormControlLabel value="Non-engaging"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Non-engaging"/>
                        <FormControlLabel value="Very non-engaging"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very non-engaging"/>
                    </RadioGroup>
                    <FormHelperText>{helperText9}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error10} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q10) Rank your level of engagement with
                        the <b>Healthcare</b> chatbot: </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange10} value={value10}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Very engaging"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very engaging"/>
                        <FormControlLabel value="Engaging" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Engaging"/>
                        <FormControlLabel value="Neutral" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Neutral"/>
                        <FormControlLabel value="Non-engaging"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Non-engaging"/>
                        <FormControlLabel value="Very non-engaging"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very non-engaging"/>
                    </RadioGroup>
                    <FormHelperText>{helperText10}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error11} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q11) Have you used online surveys in the
                        past? </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange11} value={value11}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Yes" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Yes"/>
                        <FormControlLabel value="No" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="No"/>
                        <FormControlLabel value="Maybe" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Maybe"/>
                        <FormControlLabel value="Don’t know" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Don’t know"/>
                        <span>
                        <FormControlLabel value="Other" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Other"/>
                        <TextField onChange={handleOtherChange11} value={other11} id="gender"
                                   className={classes.textroot}
                                   InputProps={{
                                       className: classes.textinput
                                   }}/></span>
                    </RadioGroup>
                    <FormHelperText>{helperText11}</FormHelperText>
                </FormControl>
                <br/>
                {
                    value11 === 'Yes' ?
                        (<FormControl error={error11a} component="fieldset" className={classes.question}>
                            <FormLabel component="legend" style={{color: 'black'}}>Q11a) If yes, would you prefer
                                CommunityBots over an online survey? </FormLabel>
                            <RadioGroup aria-required onChange={handleRadioChange11a} value={value11a}
                                        name="row-radio-buttons-group" style={{color: 'black'}}>
                                <FormControlLabel value="Yes"
                                                  control={<Radio style={{color: '#999999',}} size='small'/>}
                                                  label="Yes"/>
                                <FormControlLabel value="No" control={<Radio style={{color: '#999999',}} size='small'/>}
                                                  label="No"/>
                                <FormControlLabel value="Maybe"
                                                  control={<Radio style={{color: '#999999',}} size='small'/>}
                                                  label="Maybe"/>
                                <FormControlLabel value="Don’t know"
                                                  control={<Radio style={{color: '#999999',}} size='small'/>}
                                                  label="Don’t know"/>
                                <span>
                        <FormControlLabel value="Other" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Other"/>
                        <TextField onChange={handleOtherChange11a} value={other11} id="gender"
                                   className={classes.textroot}
                                   InputProps={{
                                       className: classes.textinput
                                   }}/></span>
                            </RadioGroup>
                            <FormHelperText>{helperText11a}</FormHelperText>
                        </FormControl>) : (<div></div>)

                }

                <br/>
                <FormControl error={error12} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q12) Please rank the ease of use of
                        CommunityBots: </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange12} value={value12}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Very easy" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very easy"/>
                        <FormControlLabel value="Easy" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Easy"/>
                        <FormControlLabel value="Ok" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Ok"/>
                        <FormControlLabel value="Difficult" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Difficult"/>
                        <FormControlLabel value="Very difficult"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very difficult"/>
                    </RadioGroup>
                    <FormHelperText>{helperText12}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error13} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q13) Please rank the usefulness of
                        CommunityBots to ask questionnaire instead of an online survey: </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange13} value={value13}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Very useful"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very useful"/>
                        <FormControlLabel value="Useful" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Useful"/>
                        <FormControlLabel value="Neutral" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Neutral"/>
                        <FormControlLabel value="Useless" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Useless"/>
                        <FormControlLabel value="Completely useless"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Completely useless"/>
                    </RadioGroup>
                    <FormHelperText>{helperText13}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error14} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q14) Please rank the usefulness of
                        CommunityBots in comparison with a human being: </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange14} value={value14}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Very useful"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very useful"/>
                        <FormControlLabel value="Useful" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Useful"/>
                        <FormControlLabel value="Neutral" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Neutral"/>
                        <FormControlLabel value="Useless" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Useless"/>
                        <FormControlLabel value="Completely useless"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Completely useless"/>
                    </RadioGroup>
                    <FormHelperText>{helperText14}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error15} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q15) Were you able to distinguish which
                        chatbot was talking with you? </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange15} value={value15}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Always" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Always"/>
                        <FormControlLabel value="Most of the time"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Most of the time"/>
                        <FormControlLabel value="Some of the time"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Some of the time"/>
                        <FormControlLabel value="Rarely" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Rarely"/>
                        <FormControlLabel value="Not at alls"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Not at all"/>
                    </RadioGroup>
                    <FormHelperText>{helperText15}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error16} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q16) Please explain why you select the
                        response to Q15:</FormLabel>
                    <TextField onChange={handleRadioChange16} value={value16} id="location" className={classes.textroot}
                               InputProps={{
                                   className: classes.textinput
                               }}/>
                    <FormHelperText>{helperText16}</FormHelperText>
                </FormControl>
                <br/>

                <br/>
                <Typography>
                    <span
                        style={{color: "#666666"}}>Please choose your answers to Q17 to Q20 about CommunityBots interface design (see Figure below).</span>
                    <img src={chatSample} width="50%"/>
                </Typography>
                <br/>

                <FormControl error={error17} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q17) The colors of three chatbots are Orange,
                        Blue, and Green, respectively. How useful was the color differentiation in helping you
                        distinguish between the chatbots? </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange17} value={value17}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Very useful"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very useful"/>
                        <FormControlLabel value="Useful" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Useful"/>
                        <FormControlLabel value="Neutral" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Neutral"/>
                        <FormControlLabel value="Useless" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Useless"/>
                        <FormControlLabel value="Completely useless"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Completely useless"/>
                    </RadioGroup>
                    <FormHelperText>{helperText17}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error18} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q18) When you were actively talking with a
                        specific chatbot which would be active with “Open Eyes” while the other two chatbots were
                        inactive with “Closed Eyes”. How useful was it in helping you identify the current
                        chatbot? </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange18} value={value18}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Very useful"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very useful"/>
                        <FormControlLabel value="Useful" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Useful"/>
                        <FormControlLabel value="Neutral" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Neutral"/>
                        <FormControlLabel value="Useless" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Useless"/>
                        <FormControlLabel value="Completely useless"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Completely useless"/>
                    </RadioGroup>
                    <FormHelperText>{helperText18}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error19} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q19) How satisfied are you with its overall
                        layout design? </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange19} value={value19}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Very satisfied"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very satisfied"/>
                        <FormControlLabel value="Satisfied" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Satisfied"/>
                        <FormControlLabel value="Neutral" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Neutral"/>
                        <FormControlLabel value="Unsatisfied"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Unsatisfied"/>
                        <FormControlLabel value="Very unsatisfied"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very unsatisfied"/>
                    </RadioGroup>
                    <FormHelperText>{helperText19}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error20} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q20) Do you have any additional comments on
                        the interface: </FormLabel>
                    <TextField onChange={handleRadioChange20} value={value20} id="location" className={classes.textroot}
                               InputProps={{
                                   className: classes.textinput
                               }}/>
                    <FormHelperText>{helperText20}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error21} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q21) Have you used online surveys in the
                        past? </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange21} value={value21}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Yes" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Yes"/>
                        <FormControlLabel value="No" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="No"/>
                        <FormControlLabel value="Maybe" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Maybe"/>
                        <FormControlLabel value="Don’t know" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Don’t know"/>
                        <span>
                        <FormControlLabel value="Other" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Other"/>
                        <TextField onChange={handleOtherChange21} value={other21} id="gender"
                                   className={classes.textroot}
                                   InputProps={{
                                       className: classes.textinput
                                   }}/></span>
                    </RadioGroup>
                    <FormHelperText>{helperText21}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error22} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q22) Please explain why you select the
                        response to Q21: </FormLabel>
                    <TextField onChange={handleRadioChange22} value={value22} id="location" className={classes.textroot}
                               InputProps={{
                                   className: classes.textinput
                               }}/>
                    <FormHelperText>{helperText22}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error23} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q23) How did you feel about the length of your conversation with the chatbot?</FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange23} value={value23}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Too long" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Too long"/>
                        <FormControlLabel value="Long" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Long"/>
                        <FormControlLabel value="Just fine" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Just fine"/>
                        <FormControlLabel value="Short" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Short"/>
                        <FormControlLabel value="Very short" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Very short"/>
                    </RadioGroup>
                    <FormHelperText>{helperText23}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error24} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q24) Did you become impatient midway during the conversation? </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange24} value={value24}
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Yes" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Yes"/>
                        <FormControlLabel value="No" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="No"/>
                        <FormControlLabel value="Maybe" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Maybe"/>
                        <FormControlLabel value="Don’t know" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Don’t know"/>
                        <span>
                        <FormControlLabel value="Other" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Other"/>
                        <TextField onChange={handleOtherChange24} value={other24} id="gender"
                                   className={classes.textroot}
                                   InputProps={{
                                       className: classes.textinput
                                   }}/></span>
                    </RadioGroup>
                    <FormHelperText>{helperText24}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error25} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q25) How can we improve the conversation
                        experience with CommunityBots? </FormLabel>
                    <TextField onChange={handleRadioChange25} value={value25} id="location" className={classes.textroot}
                               InputProps={{
                                   className: classes.textinput
                               }}/>
                    <FormHelperText>{helperText25}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error26} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q26) What did you like about
                        CommunityBots? </FormLabel>
                    <TextField onChange={handleRadioChange26} value={value26} id="location" className={classes.textroot}
                               InputProps={{
                                   className: classes.textinput
                               }}/>
                    <FormHelperText>{helperText26}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error27} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q27) What did you dislike about
                        CommunityBots? </FormLabel>
                    <TextField onChange={handleRadioChange27} value={value27} id="location" className={classes.textroot}
                               InputProps={{
                                   className: classes.textinput
                               }}/>
                    <FormHelperText>{helperText27}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error28} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q28) Do you have other comments for
                        us? </FormLabel>
                    <TextField onChange={handleRadioChange28} value={value28} id="location" className={classes.textroot}
                               InputProps={{
                                   className: classes.textinput
                               }}/>
                    <FormHelperText>{helperText28}</FormHelperText>
                </FormControl>
                <br/>


            </div>
            <div className={classes.submit}>
                <Button type='submit' variant="contained" className={classes.proceed}>Finish</Button>
            </div>
        </form>
    </div>)

}
const submitHandler = () => {
    sendFormMessagePostStudy("sample");
};

const useStyles = makeStyles((theme) => ({
    questions: {
        marginTop: '2%',
    },
    question: {
        marginTop: '2%'
    },
    textroot: {
        marginTop: '10px',
        background: "#dddddd"
    },
    textinput: {
        color: "black"
    },
    submit: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
    },
    proceed: {
        marginTop: '2%',
        marginBottom: '2%',
        backgroundColor: '#b5b5cb',
    },
}));

export default PostStudy;