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
    if (msg.channel.name == "weebz-nutz") {
      let waifuURL = getWaifu();
      msg.reply("did you know bees are the best waifus?", {
        embed: {
          image: { url: waifuURL }
        }
      });

      return;
    } else if (msg.channel.name == "mashallah") {
      msg.reply("الله يحب النحل", {
        embed: {
          image: {
            url:
              "https://cdn.discordapp.com/attachments/471500645099241474/607989485774438400/d2ogkd3-914ce616-1154-44e5-a908-4778af3359d1.png"
          }
        }
      });

      return;
    }

    replyWithBees(msg);
  } else if (/(?:^|\W)(bee|bees|beez)(?:$|\W)/g.test(message)) {
    msg.react("🐝");
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

function getWaifu() {
  const waifus = [
    "https://i.pinimg.com/originals/34/b8/c9/34b8c9617dd86a99f3ef2ca323a6e5dc.jpg",
    "https://i.kym-cdn.com/photos/images/original/001/102/868/1b1.png",
    "https://i.kym-cdn.com/photos/images/original/001/167/258/d50.png",
    "https://cdn.imgbin.com/3/25/25/imgbin-queen-bee-monster-musume-everyday-life-with-monster-girls-online-female-lovely-23bX21neha51G0ftqDurtKP3G.jpg",
    "https://vignette.wikia.nocookie.net/monstergirlencyclopedia/images/2/2b/Honey_Bee.jpeg/revision/latest?cb=20150121222651",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQenIP9x0810V7LfK3rft6EWuviK-rpaeTTf7MUVSmbLFta-AoNfw",
    "https://static.zerochan.net/Nardack.full.283631.jpg",
    "https://cdn.discordapp.com/attachments/507945456064790553/608009488162881586/hqdefault.png",
    "https://cdn.discordapp.com/attachments/507945456064790553/608127613759782922/BEE.webm"
  ];

  return waifus[Math.floor(Math.random() * waifus.length)];
}

client.login(process.env.TOKEN);
