const axios = require("axios");

require("dotenv").config();


const { App } = require("@slack/bolt");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true
});

const pingResponses = [
    "System fully operational!",
    "Reporting for duty!",
    "Ready to go!",
    "Cybra is here and ready to assist!",
    "Cybra is online and ready to help!",
    "Cybra is fully functional and ready to assist!",
    "Cybra is functioning at peak performance!",
    "Cybra is performing flawlessly!",
    "Cybra is running smoothly!",
    "Cybra is operating without any issues!",
    "All gears spinning perfectly!",
    "Cybra is functioning optimally!",
    "Cybra is functioning at optimal performance!",
    "Cybra system online and healthy!",
    "Cybra is functioning at peak performance!",
    "Beep boop! Everything looks great!"
];


app.command("/super-cybra-ping", async ({ command, ack, respond }) => {
    const start = Date.now();
    await ack();
    const latency = Date.now() - start;

    const randomIndex = Math.floor(Math.random() * pingResponses.length);
    const randomAnswer = pingResponses[randomIndex];

    await respond({
        text: `${randomAnswer}\nLatency: ${latency}ms`
    });
});


(async () => {
    await app.start();
    console.log("bot is running!");
})();

const definitionResponses = [
    "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks."
];

app.command("/super-cybra-cyberdefinition", async ({ ack, respond }) => {
    await ack(); // Only acknowledge once

    const randomAnswer =
        definitionResponses[Math.floor(Math.random() * definitionResponses.length)];

    await respond({
        text: randomAnswer
    });
});

const phishingResponses = [
    "Phishing is a type of cyber attack that involves sending fraudulent emails or messages to trick individuals into revealing sensitive information."
];

app.command("/super-cybra-phishing", async ({ ack, respond }) => {
    await ack(); // Only acknowledge once

    const randomAnswer =
        phishingResponses[Math.floor(Math.random() * phishingResponses.length)];

    await respond({
        text: randomAnswer
    });
});

const malwareResponses = [
    "Malware is malicious software designed to harm or exploit any programmable device."
];

app.command("/super-cybra-malware", async ({ ack, respond }) => {
    await ack(); // Only acknowledge once

    const randomAnswer =
        malwareResponses[Math.floor(Math.random() * malwareResponses.length)];

    await respond({
        text: randomAnswer
    });
});


const ransomwareResponses = [
    "Ransomware is a type of malware that encrypts a victim's files and demands payment for the decryption key."
];

app.command("/super-cybra-ransomware", async ({ ack, respond }) => {
    await ack(); // Only acknowledge once

    const randomAnswer =
        ransomwareResponses[Math.floor(Math.random() * ransomwareResponses.length)];

    await respond({
        text: randomAnswer
    });
});

const passwordtipsResponses = [
    "Enable Multi-Factor Authentication (MFA) wherever possible.",
    "Avoid using the same password across multiple sites."
];

app.command("/super-cybra-passwords", async ({ ack, respond }) => {
    await ack(); // Only acknowledge once

    const randomAnswer =
        passwordtipsResponses[Math.floor(Math.random() * passwordtipsResponses.length)];

    await respond({
        text: randomAnswer
    });
});

const multifactorauthenticationResponses = [
    "Enable Multi-Factor Authentication (MFA) wherever possible to help secure your accounts better using things that define you such as your fingerprint, eyes, and face, as examples.",
    "Use a password manager to generate and store unique passwords."
];

app.command("/super-cybra-mfa", async ({ ack, respond }) => {
    await ack(); // Only acknowledge once

    const randomAnswer =
        multifactorauthenticationResponses[Math.floor(Math.random() * multifactorauthenticationResponses.length)];

    await respond({
        text: randomAnswer
    });
});

const socialengineeringResponses = [
    "Social engineering is a manipulation technique that exploits human psychology to gain confidential information."
];

app.command("/super-cybra-socialengineering", async ({ ack, respond }) => {
    await ack(); // Only acknowledge once

    const randomAnswer =
        socialengineeringResponses[Math.floor(Math.random() * socialengineeringResponses.length)];

    await respond({
        text: randomAnswer
    });
});

const identitytheftResponses = [
    "Identity theft is the fraudulent use of a person's private identifying information, usually to commit fraud or other crimes."
];

app.command("/super-cybra-identitytheft", async ({ ack, respond }) => {
    await ack(); // Only acknowledge once

    const randomAnswer =
        identitytheftResponses[Math.floor(Math.random() * identitytheftResponses.length)];

    await respond({
        text: randomAnswer
    });
});


const suspiciousEmailDetectionResponses = [
    "Be cautious of unsolicited emails and attachments."
];

app.command("/super-cybra-suspiciousemails", async ({ ack, respond }) => {
    await ack(); // Only acknowledge once

    const randomAnswer =
        suspiciousEmailDetectionResponses[Math.floor(Math.random() * suspiciousEmailDetectionResponses.length)];

    await respond({
        text: randomAnswer
    });
});


const dailycybersecuritytipsResponses = [
    "Avoid using the same password across multiple sites."
];

app.command("/super-cybra-dailytips", async ({ ack, respond }) => {
    await ack(); // Only acknowledge once

    const randomAnswer =
        dailycybersecuritytipsResponses[Math.floor(Math.random() * dailycybersecuritytipsResponses.length)];

    await respond({
        text: randomAnswer
    });
    "Avoid using the same password across multiple sites."
});


app.command("/super-cybra-dailytips", async ({ ack, respond }) => {
    await ack(); // Only acknowledge once

    const randomAnswer =
        dailycybersecuritytipsResponses[Math.floor(Math.random() * dailycybersecuritytipsResponses.length)];

    await respond({
        text: randomAnswer
    });
});


const cybersecurityincidentsResponses = [
    "A cybersecurity incident is a security breach or attack that compromises the confidentiality, integrity, or availability of an organization's information systems.",
    "Examples include data breaches, ransomware attacks, and phishing attempts.",
    "It is important to have a response plan in place to minimize the impact of such incidents."
];

app.command("/super-cybra-incidents", async ({ ack, respond }) => {
    await ack(); // Only acknowledge once

    const randomAnswer =
        cybersecurityincidentsResponses[Math.floor(Math.random() * cybersecurityincidentsResponses.length)];

    await respond({
        text: randomAnswer
    });
});



const careersResponses = [
    "Cybersecurity careers include roles such as security analysts, penetration testers, and security architects."
];

app.command("/super-cybra-careers", async ({ ack, respond }) => {
    await ack(); // Only acknowledge once

    const randomAnswer =
        careersResponses[Math.floor(Math.random() * careersResponses.length)];

    await respond({
        text: randomAnswer
    });
});


const certificationsResponses = [
    "Cybersecurity certifications include roles such as security analysts, penetration testers, and security architects."
];

app.command("/super-cybra-certifications", async ({ ack, respond }) => {
    await ack(); // Only acknowledge once

    const randomAnswer =
        certificationsResponses[Math.floor(Math.random() * certificationsResponses.length)];

    await respond({
        text: randomAnswer
    });
});

const quizquestionscybersecurityquestionsResponses = [
    "What is the main goal of cybersecurity?",
    "What are some common types of cyber attacks?",
    "How can you protect your personal information online?"
];

app.command("/super-cybra-quiz", async ({ ack, respond }) => {
    await ack(); // Only acknowledge once

    const randomAnswer =
        quizquestionscybersecurityquestionsResponses[Math.floor(Math.random() * quizquestionscybersecurityquestionsResponses.length)];

    await respond({
        text: randomAnswer
    });
});


const cybersecuritywordofthedayResponses = [
    "What is the main goal of cybersecurity?",
    "What are some common types of cyber attacks?",
    "How can you protect your personal information online?"
];

app.command("/super-cybra-workoftheday", async ({ ack, respond }) => {
    await ack(); // Only acknowledge once

    const randomAnswer =
        cybersecuritywordofthedayResponses[Math.floor(Math.random() * cybersecuritywordofthedayResponses.length)];

    await respond({
        text: randomAnswer
    });
});



app.command("/super-cybra-help", async ({ ack, respond }) => {
    await ack();
    await respond({
        text:
            `Available Commands:
/super-cybra-ping:

Check bot latency

/super-cybra-help:

Help

/super-cybra-cyberdefinition:

Provides a description of what cybersecurity is!

/super-cybra-phishing:

Explains phishing attacks!

/super-cybra-malware:

Explains malware types!

/super-cybra-ransomware:

Explains ransomware

/super-cybra-passwords:

Explains the best practices for passwords!

/super-cybra-mfa:

Explains Multi-Factor Authentication!

/super-cybra-socialengineering:

Explains social engineering!

/super-cybra-identitytheft:

Explains what identity theft is!

/super-cybra-suspiciousemails:

Explains how to look out for suspicious emails!

/super-cybra-dailytips:

Explains tips for cybersecurity!

/super-cybra-incidents:

Explains cyber real-world incidents!

/super-cybra-careers:

Explains different cybersecurity careers!

/super-cybra-certifications:

Explains cybersecurity certifications!

/super-cybra-quiz:

Provides a cybersecurity quiz!

/super-cybra-workoftheday:

Explains a word from cybersecurity each day!`
    });
});

