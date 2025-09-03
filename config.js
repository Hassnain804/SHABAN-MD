const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEFUa3Y5c0ZqY0tFcFhWenU1ZWZSUkp6VHVWT3ZxQ0JLRlRrUERMMEJYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTN6d284UHNmQmIzQU1ERnBQOFNIMXprMUg5SURXSjJuOWJWaWk2d2Z5MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRVlvZk1vSWtPajRDMWVTSFdjL2NyWlFQRXdkVE1QcEJNdmZJalhmWkhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvNWlIKzQ0MTl3TVZkWUw3QndzcjdGWUYrK3piYUgrZ1lPRW5IZW5zNld3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktOejlrbjZHLzFSMTdJN1R1Q0liaENHeGVNa2VyeWxpYkJLcWs2Y0lHVjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4wRGJhSkRkUlA4UlNhWEdHRmF2elhNMklveEJ0b0JGTTJ1N29qUGliVzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU9pUEgzWkcxclJ0ZlMvRVAvYy9KUXhTbzJEUHdlR3c1M2kvc1VYUGVFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzlsSE12ejJSRk1VZnNqbFVUMm5RZXhscnlEbm1SRHZKaUxTWWJzM0t4bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9nWW1IaDdyclFTN1JWTnNFOFlPNEY4OTJsMm5Xd3ZxZ211cmltK0s5dnVZMVlMUHJ2NnVzK3R2QW9XRGpsa2N3eFhSUHVkQ01peno4YURPb21qOERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjExLCJhZHZTZWNyZXRLZXkiOiJOTE91YWpCVm8yK0ViYStTNGhxQk1aRkRGb1JLQkhhODYwd2NNMHVzbVhvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM2NTE2OTY2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0RDk0RjFDN0JERUJFQUEwMkVBMTVGQkVERjdEMjY2RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2ODk5NTIxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzNjUxNjk2NjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzIwMTBGNjJDQjBGOEE1MjU4QzRCRTY1MEVCNkUwNUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Njg5OTUyMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRkZGSE41R1IiLCJtZSI6eyJpZCI6IjkyMzM2NTE2OTY2MDo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjY0ODQ1NDg0MTA1ODU2OjVAbGlkIiwibmFtZSI6Ikhhc3NuYWluIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJM1ZudkVCRUxuUjRNVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJheUVaQTZTZ2ppWlpQR1ZnWlRUNG5kdGowMGlzSDNaQVltakRDZ0d3Q0R3PSIsImFjY291bnRTaWduYXR1cmUiOiJBQ1I2ekxEVnZmVFNJdWNYd3JidUp4eUFjMTFFQkxQeXNLeEhFNU5ibGdlSGRrQUNDOUNLUWV6RGVjZkUrUENXZHpEV2ZkQVA2dUV4VGoxeFhyZlRCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQlNSWWJGWnJ4enU5T2poU1FPSHR1WTAxNGZ0cUJhYVpaWEJCa2Y4ZnRoTFRmRC9XK1JBUEZKb1JuY3pkdURQUGZIQ01VOXM3bERGN3p5dkpEK1lxQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzNjUxNjk2NjA6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXc2hHUU9rb0k0bVdUeGxZR1UwK0ozYlk5TklyQjkyUUdKb3d3b0JzQWc4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY4OTk1MTcsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRCtxIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923365169660",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-Hassnain",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *SHABAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923365169660",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
