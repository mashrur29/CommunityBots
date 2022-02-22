import FormData from "form-data";
import WebSocket from "isomorphic-ws";
import util from "util";
import {sendMessage} from "./utils/dbUtils";

export function makeid(length: any) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

export const topics = 11;

const webUrl = [
    "https://juji.ai/pre-chat/614b3ce2-ab43-4cfc-b11d-808abbd3e9c0",
    "https://juji.ai/pre-chat/614c096f-82a2-4633-97c4-30bdde0ed3d8",
    "https://juji.ai/pre-chat/6150e2a3-a30b-41c6-9616-5778cdee3a42",
    "https://juji.ai/pre-chat/61510749-538c-4afa-97cb-18eaabe7fa13",
    "https://juji.ai/pre-chat/615167bb-61ee-454c-930a-b9013f298431",
    "https://juji.ai/pre-chat/6154ae99-3549-4924-b0b4-2480396658da",
    "https://juji.ai/pre-chat/6154baf2-7736-4ee2-979c-936070fcbf68",
    "https://juji.ai/pre-chat/61554f72-a94a-4e99-abe9-8a90208ec55b",
    "https://juji.ai/pre-chat/6155d87e-56b2-44e8-a83a-8fa73fb41e93",
    "https://juji.ai/pre-chat/6155ddaf-f7d7-4f3c-98a0-285895c95530",
    "https://juji.ai/pre-chat/6155f62e-1651-4b18-bc7e-43004f4eac3c"
];

const testUrl = [
    "https://juji.ai/pre-chat/614b3ce2-ab43-4cfc-b11d-808abbd3e9c0?mode=test",
    "https://juji.ai/pre-chat/614c096f-82a2-4633-97c4-30bdde0ed3d8?mode=test",
    "https://juji.ai/pre-chat/6150e2a3-a30b-41c6-9616-5778cdee3a42?mode=test",
    "https://juji.ai/pre-chat/61510749-538c-4afa-97cb-18eaabe7fa13?mode=test",
    "https://juji.ai/pre-chat/615167bb-61ee-454c-930a-b9013f298431?mode=test",
    "https://juji.ai/pre-chat/6154ae99-3549-4924-b0b4-2480396658da?mode=test",
    "https://juji.ai/pre-chat/6154baf2-7736-4ee2-979c-936070fcbf68?mode=test",
    "https://juji.ai/pre-chat/61554f72-a94a-4e99-abe9-8a90208ec55b?mode=test",
    "https://juji.ai/pre-chat/6155d87e-56b2-44e8-a83a-8fa73fb41e93?mode=test",
    "https://juji.ai/pre-chat/6155ddaf-f7d7-4f3c-98a0-285895c95530?mode=test",
    "https://juji.ai/pre-chat/6155f62e-1651-4b18-bc7e-43004f4eac3c?mode=test"
];

const chatTopics = [
    "Dwelling" ,
    "Family - Homelife" ,
    "Virtual Connection" ,
    "Delivery" ,
    "Transportation - Commute" ,
    "Work" ,
    "Education" ,
    "Zoom / Screens / Computers" ,
    "Healthcare" ,
    "Leisure" ,
    "Hobbies"
];

const chatAgent = [
    "chatbotAgentA",
    "chatbotAgentA",
    "chatbotAgentA",
    "chatbotAgentA",
    "chatbotAgentB",
    "chatbotAgentB",
    "chatbotAgentB",
    "chatbotAgentB",
    "chatbotAgentC",
    "chatbotAgentC",
    "chatbotAgentC"
];

export const welcomeMessages = [
    "Hello and thank you for connecting! I am an intelligent AI chatbot who will ask you some questions about Covid 19 and its impact on your life. At first, I am going to ask you a few questions about your dwelling. In what ways has your home changed?",
    "Now I'd like to ask you some questions about your family and home life. What was your daily life like before COVID began?",
    "Now I'm going to ask you a few questions about virtual connections. Have you been able to connect with others abroad through any online platforms?",
    "Finally I'd like to ask you a few questions about your household. Do you use delivery services more than you used to?",
    "Hello, I'm a work expert chatbot who will ask you questions about your everyday work routine.",
    "Now I'm going to ask you some questions about your job. Were you working during the height of the pandemic?",
    "Now I'd like to ask you some questions about your education. Are you a student and if so at what level?",
    "Finally I am going to ask you some questions about online video conferencing. How do you feel about video conferencing?",
    "Hello, I'm a healthcare expert chatbot who will inquire about how you maintain your physical and mental well-being.",
    "Now I'm going to ask you some questions about your recreational activities. What do you do for leisure? If anything?",
    "Finally I am going to ask you some questions about your hobbies. Have you picked up any hobbies since COVID began?"
];

export const welcomeMessages2 = [
    "",
    "",
    "",
    "",
    "I am going to start with some questions on transportation and delivery services.",
    "",
    "",
    "",
    "I'm going to start by asking you a few questions about your overall health and healthcare services.",
    "",
    ""
];

export const welcomeMessages3 = [
    "",
    "",
    "",
    "",
    "Did your daily transitions (a commute, a daily walk, a daily coffee?) disappear over the pandemic?",
    "",
    "",
    "",
    "Are you able to get the kind of healthcare that you need?",
    "",
    ""
];

export const concludingMessages = [
    "Thanks for the input!",
    "Thanks for the input!",
    "Thanks for the input!",
    "Thanks for the input!",
    "Thanks for the input!",
    "Thanks for the input!",
    "Thanks for the input!",
    "Thanks for the input!",
    "Thanks for the input!",
    "Thanks for the input!",
    "Thanks for the input!"
]

export async function startChats() {
    var FormData = require('form-data');
    let formData = new FormData();
    const WebSocket = require('isomorphic-ws');
    const subFormat = `
        subscription {
            chat(input: {
                participationId: "%s"
            }) {
                role
                text
                type
                display{
                    data{
                        questions{
                            heading
                            kind
                        }
                    }
                }
            }
        }`;

    formData.append('firstName', 'human :)');
    var ws: WebSocket = [];
    var chatInfo: any = [];

    for (var i = 0; i < topics; i++) {
        const request_t = new Request(webUrl[i],
            {method: 'POST', body: formData});
        var response_t = await fetch(request_t);
        const chatInfo_t = await response_t.json();
        chatInfo.push(chatInfo_t);

        const ws_t = new WebSocket(chatInfo_t.websocketUrl);

        ws_t.onopen = function () {
            this.timeout = 1800000;
            ws_t.send(util.format(subFormat, chatInfo_t.participationId));
            console.log('JUJI connection established: ', chatInfo_t);
            ws.push(ws_t);
        };
    }

    return [ws, chatInfo, chatAgent, chatTopics];
}

export function getResponseLength(msg = "any") {
    var len = msg.split(' '). length;
    return [len];
}

export function getResponseQuality(msg = "any") {
    var responseLength = getResponseLength(msg)[0];
    var score = responseLength;
    return [score];
}