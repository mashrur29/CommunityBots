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
    "https://juji.ai/pre-chat/62890518-1b43-4ef2-8bbc-d44f83203166",
    "https://juji.ai/pre-chat/6289cfbd-86c5-45c2-8aa4-8252d6dffec5",
    "https://juji.ai/pre-chat/6289df54-7c15-4a32-9833-02d39668fe6b",
    "https://juji.ai/pre-chat/6289e03a-5511-4067-9960-72d3e508b4dd",
    "https://juji.ai/pre-chat/62922343-35ad-4fe5-9bbd-31c1af2326fa",
    "https://juji.ai/pre-chat/62925c41-0bb5-49ee-8424-840cfa6ae82b",
    "https://juji.ai/pre-chat/6292654e-aa88-4fbf-be41-d4dfbf8ed092",
    "https://juji.ai/pre-chat/62927958-2a34-4a74-90a2-a3d2548cdd0a",
    "https://juji.ai/pre-chat/62927cf4-c956-4039-9fd4-f92dac5cd622",
    "https://juji.ai/pre-chat/629280d4-7565-47f8-be45-5e02cb6f4f2a",
    "https://juji.ai/pre-chat/62929535-0b57-4194-ac55-434ab240e46f"
];

const testUrl = [];

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
    "Now I'd like to ask you some questions about your family and home life. Did the pandemic force you to make any large life changes? For example, moving or changing career paths.",
    "Now I'm going to ask you a few questions about virtual connections. Have you been able to connect with others (friends, colleagues, etc.) abroad through any online platforms?",
    "Finally I'd like to ask you a few questions about your household. Did you use delivery services during the pandemic?",
    "Hello, I'm a work expert chatbot who will ask you questions about your everyday work routine.",
    "Now I'm going to ask you some questions about your job. How has the pandemic affected your employment status?",
    "Now I'd like to ask you some questions about your education. Are you a student?",
    "Finally I am going to ask you some questions about online video conferencing. How have the tele-work methods affected your work (in the short and long runs)? Can you think of concrete examples such as time it takes to get a task done, or the propensity to get distracted by online shopping or social media?",
    "Hello, I'm a healthcare expert chatbot who will inquire about how you maintain your physical and mental well-being.",
    "Now I'm going to ask you some questions about your recreational activities. What do you do for leisure?",
    "Finally I am going to ask you some questions about your hobbies. Do you have any hobbies?"
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
    "Did your daily transitions (a commute, a daily walk, a daily coffee) disappear over the pandemic?",
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
            this.timeout = 18000000000000;
            ws_t.send(util.format(subFormat, chatInfo_t.participationId));
            //console.log('JUJI connection established: ', chatInfo_t);
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