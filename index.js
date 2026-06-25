const axios = require("axios");

require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true
});

app.command("/super-cybra-ping", async ({ command, ack, respond }) => {
    const start = Date.now();
    await ack();
    const latency = Date.now() - start;
    await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

(async () => {
    await app.start();
    console.log("bot is running!");
})();

app.command("/super-cybra-help", async ({ ack, respond }) => {
    await ack();
    await respond({
        text:
            `Available Commands:
/super-cybra-ping - Check bot latency
/super-cybra-joke - Get a joke
/super-cybra-catfact - Get a cat fact`
    });
});


app.command("/super-cybra-catfact", async ({ ack, respond }) => {
    await ack();

    try {
        const response = await axios.get("https://catfact.ninja/fact");
        await respond({ text: `Cat Fact:\n${response.data.fact}` });
    } catch (err) {
        await respond({ text: "Failed to fetch a cat fact." });
    }
});
app.command("/super-cybra-joke", async ({ ack, respond }) => {
    await ack();

    try {
        const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
        await respond({
            text:
                `${response.data.setup}

${response.data.punchline}`
        });
    } catch (err) {
        await respond({ text: "Failed to fetch a joke." });
    }
});
