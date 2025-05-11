const { makeid } = require('./gen-id');
const express = require('express');
const QRCode = require('qrcode');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    jidNormalizedUser
} = require("@whiskeysockets/baileys");
const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
 //   let num = req.query.number;
    async function DAMON_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                	
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});
            
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect,
                    qr
                } = s;
              if (qr) await res.end(await QRCode.toBuffer(qr));
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "DAMON~MD~" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `*_QR  Code Connected *
                        
𝐌𝐚𝐝𝐞 𝐖𝐢𝐭𝐡  𝐃𝐀𝐌𝐎𝐍-𝐌𝐃
______________________________________
╔════◇
║ 『 𝐖𝐎𝐖 𝐘𝐎𝐔'𝐕𝐄 𝐂𝐇𝐎𝐒𝐄𝐍 𝐃𝐀𝐌𝐎𝐍-𝐌𝐃』
║ _𝐘𝐨𝐮 𝐇𝐚𝐯𝐞 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐭𝐡𝐞 𝐅𝐢𝐫𝐬𝐭 𝐒𝐭𝐞𝐩 𝐭𝐨 𝐃𝐞𝐩𝐥𝐨𝐲 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║
║❒  𝐎𝐰𝐧𝐞𝐫: _https://wa.me/50933864i02
║❒  𝐑𝐞𝐩𝐨:* https://github.com/Hacker1208x/DAMON-MD
║❒ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: https://whatsapp.com/channel/0029VaojbRDKrWR2a38S5O1k
╚════════════════════════╝
_____________________________________

_𝐃𝐨𝐧'𝐭 𝐅𝐨𝐫𝐠𝐞𝐭 𝐓𝐨 𝐆𝐢𝐯𝐞 𝐒𝐭𝐚𝐫 𝐓𝐨 𝐌𝐲 𝐑𝐞𝐩𝐨_"

> *© 𝐃𝐀𝐌𝐎𝐍-𝐌𝐃*`; 
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: " 𝖇𝖔𝖙 𝖈𝖔𝖓𝖓𝖊𝖈𝖙𝖊𝖉",
thumbnailUrl: "https://files.catbox.moe/88o37i.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VaojbRDKrWR2a38S5O1k",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `*_QR CODE Connected*
𝐌𝐚𝐝𝐞 𝐖𝐢𝐭𝐡  𝐃𝐀𝐌𝐎𝐍-𝐌𝐃 
______________________________________
╔════◇
║ 『 𝐖𝐎𝐖 𝐘𝐎𝐔'𝐕𝐄 𝐂𝐇𝐎𝐒𝐄𝐍 𝐃𝐀𝐌𝐎𝐍-𝐌𝐃』
║ _𝐘𝐨𝐮 𝐇𝐚𝐯𝐞 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐭𝐡𝐞 𝐅𝐢𝐫𝐬𝐭 𝐒𝐭𝐞𝐩 𝐭𝐨 𝐃𝐞𝐩𝐥𝐨𝐲 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║
║❒  𝐎𝐰𝐧𝐞𝐫: _https://wa.me/50933864802
║❒  𝐑𝐞𝐩𝐨:* https://github.com/Hacker1208x/DAMON-MD
║❒ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: https://whatsapp.com/channel/0029VaojbRDKrWR2a38S5O1k
╚════════════════════════╝
_____________________________________

 𝐃𝐨𝐧'𝐭 𝐅𝐨𝐫𝐠𝐞𝐭 𝐓𝐨 𝐆𝐢𝐯𝐞 𝐒𝐭𝐚𝐫 𝐓𝐨 𝐌𝐲 𝐑𝐞𝐩𝐨"

> © 𝐃𝐀𝐌𝐎𝐍-𝐌𝐃`; 
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: " 𝖒𝖉 𝖈𝖔𝖓𝖓𝖊𝖈𝖙𝖊𝖉 ✅  ",
thumbnailUrl: "https://files.catbox.moe/88o37i.jpg",
sourceUrl: "https://whatsapp.com/channel/0029VaojbRDKrWR2a38S5O1k",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
    await GIFTED_MD_PAIR_CODE();
});
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min
module.exports = router;
