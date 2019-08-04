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
  } else if (message.includes("bee")) {
    msg.react("🐝");
  }
});

async function replyWithBees(msg) {
  const getURL = `https://pixabay.com/api/?key=${
    process.env.PICKEY
  }&q=bee&image_type=photo&page=${Math.round(Math.random() * Math.floor(20))}`;

  const beeURL = await request.get(getURL, async (err, res, body) => {
    let pic = err
      ? "http://2.bp.blogspot.com/-QOJMKcOSx2s/UYgJn07K5gI/AAAAAAAAEhw/KUUrTJSpIsQ/s1600/4+bee+movie+barry+sunglasses+pool.jpg"
      : JSON.parse(body).hits[0].largeImageURL;

    msg.reply(`${facts.getFact()}`, { embed: { image: { url: pic } } });
  });
}

client.login(process.env.TOKEN);
