const Discord = require("discord.js");
const client = new Discord.Client();
const facts = require("./beeFacts");
const request = require("request");

client.on("ready", () => {
  console.log("Bot started");
});

client.on("message", async msg => {
  const message = msg.content.toLowerCase();
  if (message == ">buzz") {
    replyWithBees(msg);

  } else if (/(?:^|\W)(bee|bees|beez)(?:$|\W)/g.test(message)) {
    msg.react("🐝");
  } else if (message.toLowerCase() == "ding") {
    if (msg.channel.name == "classic-wow") {
      msg.react("🐝");
    }
  }
});

async function replyWithBees(msg) {
  const getURL = `https://pixabay.com/api/?key=${
    process.env.PICKEY
  }&q=bee&image_type=photo&page=${Math.floor(Math.random() * 20)}`;

  request.get(getURL, async (err, res, body) => {
    let picURL =
      "http://2.bp.blogspot.com/-QOJMKcOSx2s/UYgJn07K5gI/AAAAAAAAEhw/KUUrTJSpIsQ/s1600/4+bee+movie+barry+sunglasses+pool.jpg";
    if (!err && res.statusCode != 400) {
      const jsonBody = JSON.parse(body);
      picURL =
        jsonBody.hits[Math.floor(Math.random() * jsonBody.hits.length)]
          .largeImageURL;
    }
    msg.reply(`${facts.getFact()}`, { embed: { image: { url: picURL } } });
  });
}

client.login(process.env.TOKEN);
