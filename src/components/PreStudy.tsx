import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import Cookies from 'universal-cookie';
import {
    Button, Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@material-ui/core";
import {sendMessage, setPreStudyAnswer, startNewPreStudy} from '../utils/dbUtils';

interface Props {
};

const PreStudy: React.FC<Props> = ({}) => {
    const [docId, SetDocId] = React.useState('');
    const [waitDiv, setWaitDiv] = React.useState(false);
    const classes = useStyles();
    const cookies = new Cookies();

    useEffect(() => {
        submitHandler();
    }, []);

    const submitHandler = async () => {
        const userName = 'You';
        const chatDocId = await startNewPreStudy(userName, 3);
        cookies.set('displayName', chatDocId);
        SetDocId(chatDocId);
        localStorage.setItem("id", chatDocId);
        //initChat(userName, chatDocId, chatDocId);
    };


    const [value1, setValue1] = React.useState('');
    const [error1, setError1] = React.useState(false);
    const [helperText1, setHelperText1] = React.useState('Choose wisely');

    const handleRadioChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue1((event.target as HTMLInputElement).value);
        setHelperText1(' ');
        setError1(false);
    };

    var [value2, setValue2] = React.useState('');
    var [other2, setOther2] = React.useState('');
    const [error2, setError2] = React.useState(false);
    const [helperText2, setHelperText2] = React.useState('Choose wisely');

    const handleRadioChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue2((event.target as HTMLInputElement).value);
        setHelperText2(' ');
        setError2(false);
    };

    const handleOtherChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOther2((event.target as HTMLInputElement).value);
        setHelperText2(' ');
        setError2(false);
    };

    var [value3, setValue3] = React.useState('');
    var [other3, setOther3] = React.useState('');
    const [error3, setError3] = React.useState(false);
    const [helperText3, setHelperText3] = React.useState('Choose wisely');

    const handleRadioChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue3((event.target as HTMLInputElement).value);
        setHelperText3(' ');
        setError3(false);
    };
    const handleOtherChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOther3((event.target as HTMLInputElement).value);
        setHelperText2(' ');
        setError2(false);
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
        setOther4((event.target as HTMLInputElement).value);
        setHelperText2(' ');
        setError2(false);
    };

    var [value5, setValue5] = React.useState('');
    var [other5, setOther5] = React.useState('');
    const [error5, setError5] = React.useState(false);
    const [helperText5, setHelperText5] = React.useState('Choose wisely');

    const handleRadioChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue5((event.target as HTMLInputElement).value);
        setHelperText5(' ');
        setError5(false);
    };
    const handleOtherChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOther5((event.target as HTMLInputElement).value);
        setHelperText2(' ');
        setError2(false);
    };

    var [value6, setValue6] = React.useState('');
    var [other6, setOther6] = React.useState('');
    const [error6, setError6] = React.useState(false);
    const [helperText6, setHelperText6] = React.useState('Choose wisely');

    const handleRadioChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue6((event.target as HTMLInputElement).value);
        setHelperText6(' ');
        setError6(false);
    };
    const handleOtherChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOther6((event.target as HTMLInputElement).value);
        setHelperText2(' ');
        setError2(false);
    };

    const [value7, setValue7] = React.useState('');
    const [error7, setError7] = React.useState(false);
    const [helperText7, setHelperText7] = React.useState('Choose wisely');

    const handleRadioChange7 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue7((event.target as HTMLInputElement).value);
        setHelperText7(' ');
        setError7(false);
    };

    var [value8, SetValue8] = React.useState<any[]>([]);
    var [other8, setOther8] = React.useState('');
    const [error8, setError8] = React.useState(false);
    const [helperText8, setHelperText8] = React.useState('Choose wisely');

    const handleRadioChange8 = (event: React.ChangeEvent<HTMLInputElement>) => {
        //addEntry8((event.target as HTMLInputElement).value);
        var val = (event.target as HTMLInputElement).value;
        if ((event.target as HTMLInputElement).checked) {
            SetValue8(value8 => [...value8, ...[val]]);
        }

        //SetValue8((event.target as HTMLInputElement).value);
        setHelperText8(' ');
        setError8(false);
    };
    const handleOtherChange8 = (event: React.ChangeEvent<HTMLInputElement>) => {
        SetValue8(value8 => [...value8, ...[other8]]);
        setOther8((event.target as HTMLInputElement).value);
        setHelperText2(' ');
        setError2(false);
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

    //console.log(value1, value2, value3, value4, value5, value6, value7, value8, value9, value10);
    const validate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (value1 === '') {
            setValue1('None');
        }

        if (value2 === '') {
            setValue2('None');
        }

        if (value3 === '') {
            setValue3('None');
        }

        if (value4 === '') {
            setValue4('None');
        }

        if (value5 === '') {
            setValue5('None');
        }

        if (value6 === '') {
            setValue6('None');
        }

        if (value7 === '') {
            setValue7('None');
        }

        if (value8.length === 0) {
            SetValue8([]);
        }

        if (value9 === '') {
            setValue9('None');
        }

        if (value10 === '') {
            setValue10('None');
        }

        setWaitDiv(true);
        setPreStudyAnswer(docId, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10);
        setTimeout(() => {
            window.open('/chat', '_self');
        }, 10000);

    }

    return (<div>
        <form onSubmit={validate}>
            <div className={classes.questions}>
                <Typography variant='h5'>
                    <span style={{color: "#666666"}}>Tell us a little bit about yourself</span>
                </Typography>
                <Typography>
                    <span
                        style={{color: "#666666"}}>Please complete these questions to let us know a bit about you.</span>
                </Typography>
                <FormControl error={error1} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q1) Please select your age group:</FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange1} value={value1} row aria-label="gender"
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="18 - 25" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="18 - 25"/>
                        <FormControlLabel value="26 - 35" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="26 - 35"/>
                        <FormControlLabel value="36 - 45" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="36 - 45"/>
                        <FormControlLabel value="46 - 55" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="46 - 55"/>
                        <FormControlLabel value="56 - 65" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="56 - 65"/>
                        <FormControlLabel value="> 65" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="> 65"/>
                        <FormControlLabel value="Prefer not to say"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Prefer not to say"/>
                    </RadioGroup>
                    <FormHelperText>{helperText1}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error2} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q2) What is your pronoun?</FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange2} value={value2} row aria-label="gender"
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="he/him" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="he/him"/>
                        <FormControlLabel value="she/her" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="she/her"/>
                        <FormControlLabel value="they/them"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="they/them"/>
                        <FormControlLabel value="Prefer not to say"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Prefer not to say"/>
                        <span>
                        <FormControlLabel value="Other" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Other"/>
                        <TextField onChange={handleOtherChange2} value={other2} id="gender" className={classes.textroot}
                                   InputProps={{
                                       className: classes.textinput
                                   }}/></span>
                    </RadioGroup>
                    <FormHelperText>{helperText2}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error3} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q3) What is your employment
                        status?</FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange3} value={value3} row aria-label="gender"
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Student" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Student"/>
                        <FormControlLabel value="Employed full-time"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Employed full-time"/>
                        <FormControlLabel value="Employed part-time"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Employed part-time"/>
                        <FormControlLabel value="Retired" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Retired"/>
                        <FormControlLabel value="Unemployed" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Unemployed"/>
                        <FormControlLabel value="Prefer not to say"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Prefer not to say"/>
                        <span>
                        <FormControlLabel value="Other" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Other"/>
                        <TextField onChange={handleOtherChange3} value={other3} id="gender" className={classes.textroot}
                                   InputProps={{
                                       className: classes.textinput
                                   }}/></span>
                    </RadioGroup>
                    <FormHelperText>{helperText3}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error4} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q4) What is your occupation?</FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange4} value={value4} row aria-label="gender"
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Business" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Business"/>
                        <FormControlLabel value="Medical"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Medical"/>
                        <FormControlLabel value="Government"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Government"/>
                        <FormControlLabel value="Education" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Education"/>
                        <FormControlLabel value="Service" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Service"/>
                        <FormControlLabel value="Prefer not to say"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Prefer not to say"/>
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


                <FormControl error={error5} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q5) What is the highest degree or level of
                        education you have completed?</FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange5} value={value5} row aria-label="gender"
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <span>
                        <FormControlLabel value="High school or equivalent"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="High school or equivalent"/></span>
                        <span>
                        <FormControlLabel value="Some college or equivalent"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Some college or equivalent"/></span>
                        <span>
                        <FormControlLabel value="Bachelor’s degree"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Bachelor’s degree"/></span>
                        <span>
                        <FormControlLabel value="Master’s degree"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Master’s degree"/></span>
                        <span>
                        <FormControlLabel value="Doctorate degree"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Doctorate degree"/></span>
                        <span>
                        <FormControlLabel value="Professional"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Professional"/></span>
                        <span>
                        <FormControlLabel value="Prefer not to say"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Prefer not to say"/></span>
                        <span>
                        <FormControlLabel value="Other" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Other"/>
                        <TextField onChange={handleOtherChange5} value={other5} id="gender" className={classes.textroot}
                                   InputProps={{
                                       className: classes.textinput
                                   }}/>
                        </span>
                    </RadioGroup>
                    <FormHelperText>{helperText5}</FormHelperText>
                </FormControl>
                <br/>


                <FormControl error={error6} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q6) How do you identify
                        yourself? </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange6} value={value6} row aria-label="gender"
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="African American"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="African American"/>
                        <FormControlLabel value="Asian"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Asian"/>
                        <FormControlLabel value="Latino or Hispanic"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Latino or Hispanic"/>
                        <FormControlLabel value="Native American"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Native American"/>
                        <FormControlLabel value="Native Hawaiian or Pacific Islander"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Native Hawaiian or Pacific Islander"/>
                        <FormControlLabel value="Mixed race"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Mixed race"/>
                        <FormControlLabel value="White"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="White"/>
                        <FormControlLabel value="Prefer not to say"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Prefer not to say"/>
                        <span>
                        <FormControlLabel value="Other" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Other"/>
                        <TextField onChange={handleOtherChange6} value={other6} id="gender" className={classes.textroot}
                                   InputProps={{
                                       className: classes.textinput
                                   }}/></span>
                    </RadioGroup>
                    <FormHelperText>{helperText6}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error7} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q7) What is your residential zip
                        code? (First 5 numbers)</FormLabel>
                    <TextField onChange={handleRadioChange7} value={value7} id="location" className={classes.textroot}
                               InputProps={{
                                   className: classes.textinput
                               }}/>
                    <FormHelperText>{helperText7}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error8} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q8) What is your relationship to the town of
                        Amherst? </FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange8} value={value8} row aria-label="gender"
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="I live here"
                                          control={<Checkbox style={{color: '#999999',}} onChange={handleRadioChange8}
                                                             size='small'/>}
                                          label="I live here"/>
                        <FormControlLabel value="I work here"
                                          control={<Checkbox style={{color: '#999999',}} onChange={handleRadioChange8}
                                                             size='small'/>}
                                          label="I work here"/>
                        <FormControlLabel value="I study here"
                                          control={<Checkbox style={{color: '#999999',}} onChange={handleRadioChange8}
                                                             size='small'/>}
                                          label="I study here"/>
                        <FormControlLabel value="I receive service here"
                                          control={<Checkbox style={{color: '#999999',}} onChange={handleRadioChange8}
                                                             size='small'/>}
                                          label="I receive service here"/>
                        <FormControlLabel value="My child goes to school here"
                                          control={<Checkbox style={{color: '#999999',}} onChange={handleRadioChange8}
                                                             size='small'/>}
                                          label="My child goes to school here"/>
                        <FormControlLabel value="Prefer not to say"
                                          control={<Checkbox style={{color: '#999999',}} onChange={handleRadioChange8}
                                                             size='small'/>}
                                          label="Prefer not to say"/>
                        <span>
                        <FormControlLabel value="Other"
                                          control={<Checkbox style={{color: '#999999',}} onChange={handleRadioChange8}
                                                             size='small'/>}
                                          label="Other"/>
                        <TextField onChange={handleOtherChange8} value={other8} id="gender" className={classes.textroot}
                                   InputProps={{
                                       className: classes.textinput
                                   }}/></span>
                    </RadioGroup>
                    <FormHelperText>{helperText8}</FormHelperText>
                </FormControl>
                <br/>

                <FormControl error={error9} component="fieldset" className={classes.question}>
                    <FormLabel component="legend" style={{color: 'black'}}>Q9) Have you previously talked with a chatbot
                        (an interactive service assistant) in a scenario like customer support, or conversational
                        assistants such as Google Assistant or Siri?</FormLabel>
                    <RadioGroup aria-required onChange={handleRadioChange9} value={value9} row aria-label="gender"
                                name="row-radio-buttons-group" style={{color: 'black'}}>
                        <FormControlLabel value="Yes" control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Yes"/>
                        <FormControlLabel value="No"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="No"/>
                        <FormControlLabel value="Maybe"
                                          control={<Radio style={{color: '#999999',}} size='small'/>}
                                          label="Maybe"/>

                    </RadioGroup>
                    <FormHelperText>{helperText9}</FormHelperText>
                </FormControl>
                <br/>
                {
                    value9 === 'Yes' ?
                        (<FormControl error={error10} component="fieldset" className={classes.question}>
                                <FormLabel component="legend" style={{color: 'black'}}>Q10) If you answered "Yes" in the
                                    previous question, how many chatbots were involved in one single
                                    conversation?</FormLabel>
                                <RadioGroup onChange={handleRadioChange10} value={value10} row aria-label="gender"
                                            name="row-radio-buttons-group" style={{color: 'black'}}>
                                    <FormControlLabel value="1"
                                                      control={<Radio style={{color: '#999999',}} size='small'/>}
                                                      label="1"/>
                                    <FormControlLabel value="2"
                                                      control={<Radio style={{color: '#999999',}} size='small'/>}
                                                      label="2"/>
                                    <FormControlLabel value="3"
                                                      control={<Radio style={{color: '#999999',}} size='small'/>}
                                                      label="3"/>
                                    <FormControlLabel value="More than 3"
                                                      control={<Radio style={{color: '#999999',}} size='small'/>}
                                                      label="More than 3"/>
                                    <FormControlLabel value="I am not aware of that"
                                                      control={<Radio style={{color: '#999999',}} size='small'/>}
                                                      label="I am not aware of that"/>
                                    <FormControlLabel value="I don’t know what you are talking about"
                                                      control={<Radio style={{color: '#999999',}} size='small'/>}
                                                      label="I don’t know what you are talking about"/>
                                </RadioGroup>
                                <FormHelperText>{helperText10}</FormHelperText>
                            </FormControl>
                        ) : (<div></div>)
                }


            </div>

            {
                waitDiv === true ? (
                    <Typography variant='h6'>
                        <p style={{color: "#b5b5cb", textAlign: 'center'}}>please wait while the data is being saved</p>
                    </Typography>
                ) : (
                    <div></div>
                )
            }
            <div className={classes.submit}>
                <Button type='submit' variant="contained" className={classes.proceed}>Proceed</Button>
            </div>


        </form>
    </div>)

}

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
        color: "black",
        maxLength: 100
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
        backgroundColor: '#D3D3D3',
    },
}));

export default PreStudy;