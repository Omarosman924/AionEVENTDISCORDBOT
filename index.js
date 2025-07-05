const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const moment = require('moment-timezone');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const TOKEN = process.env.TOKEN;

const fullSchedule = {
  Monday: [
    { time: "00:00", event: "Discipline" },
    { time: "03:00", event: "Cooperation" },
    { time: "05:00", event: "Discipline / Chaos" },
    { time: "10:00", event: "Discipline" },
    { time: "12:00", event: "Discipline" },
    { time: "14:00", event: "Cooperation" },
    { time: "19:00", event: "Discipline / Chaos" },
    { time: "16:00", event: "Siege – Asteria Fortress" },
    { time: "20:00", event: "Siege – Roah Fortress" },
    { time: "23:00", event: "TVT (Auto Group)" },
    { time: "04:00", event: "Jormungand" },
    { time: "07:00", event: "TVT (Group)" },
    { time: "08:00", event: "RvR (Random)" },
    { time: "09:00", event: "Dredgion/Asmo" },
    { time: "10:00", event: "FFA (Random)" },
    { time: "13:00", event: "TVT (Auto Group)" },
    { time: "17:00", event: "Guardian/Asmo" },
    { time: "18:00", event: "TVT (Group)" },
    { time: "21:00", event: "God’s Throne 12v12" },
    { time: "22:00", event: "MIXFIGHT" },
        { time: "14:30", event: "PvP Boss" },
    { time: "18:30", event: "PvP Boss" },
    { time: "23:30", event: "PvP Boss" }
  ],
  Tuesday: [
    { time: "00:00", event: "Discipline" },
    { time: "03:00", event: "Cooperation" },
    { time: "05:00", event: "Discipline / Chaos" },
    { time: "10:00", event: "Discipline" },
    { time: "12:00", event: "Discipline" },
    { time: "14:00", event: "Cooperation" },
    { time: "19:00", event: "Discipline / Chaos" },
    { time: "20:00", event: "Siege – Temple of Scales / Vorgaltem Citadel" },
    { time: "23:00", event: "TVT (Auto Group)" },
    { time: "04:00", event: "RvR (Random)" },
    { time: "07:00", event: "TVT (Group)" },
    { time: "08:00", event: "Dredgion" },
    { time: "09:00", event: "Guardian/Asmo" },
    { time: "10:00", event: "FFA (Random)" },
    { time: "13:00", event: "TVT (Auto Group)" },
    { time: "17:00", event: "Jormungand" },
    { time: "18:00", event: "TVT (Group)" },
    { time: "21:00", event: "God’s Throne 12v12" },
    { time: "22:00", event: "MIXFIGHT" },
        { time: "14:30", event: "PvP Boss" },
    { time: "18:30", event: "PvP Boss" },
    { time: "23:30", event: "PvP Boss" }
  ],
  Wednesday: [
    { time: "00:00", event: "Discipline" },
    { time: "03:00", event: "Cooperation" },
    { time: "05:00", event: "Discipline / Chaos" },
    { time: "10:00", event: "Discipline" },
    { time: "12:00", event: "Discipline" },
    { time: "14:00", event: "Cooperation" },
    { time: "19:00", event: "Discipline / Chaos" },
    { time: "20:00", event: "Siege – Altar of Avarice / Crimson Temple" },
    { time: "23:00", event: "TVT (Auto Group)" },
    { time: "04:00", event: "Jormungand" },
    { time: "07:00", event: "TVT (Group)" },
    { time: "08:00", event: "God’s Throne 12v12" },
    { time: "09:00", event: "(Guardian/Elyos)" },
    { time: "10:00", event: "FFA (Random)" },
    { time: "13:00", event: "TVT (Auto Group)" },
    { time: "17:00", event: "(Guardian/Elyos)" },
    { time: "18:00", event: "TVT (Group)" },
    { time: "21:00", event: "God’s Throne 12v12" },
    { time: "22:00", event: "MIXFIGHT" } ,
        { time: "14:30", event: "PvP Boss" },
    { time: "18:30", event: "PvP Boss" },
    { time: "23:30", event: "PvP Boss" }
  ],
  Thursday: [
    { time: "00:00", event: "Discipline" },
    { time: "03:00", event: "Cooperation" },
    { time: "05:00", event: "Discipline / Chaos" },
    { time: "10:00", event: "Discipline" },
    { time: "12:00", event: "Discipline" },
    { time: "14:00", event: "Cooperation" },
    { time: "19:00", event: "Discipline / Chaos" },
    { time: "16:00", event: "Siege – Sulfur Fortress / Kysis Fortress" },
    { time: "23:00", event: "TVT (Auto Group)" },
    { time: "04:00", event: "Runatorium" },
    { time: "07:00", event: "TVT (Group)" },
    { time: "08:00", event: "RvR (Random)" },
    { time: "09:00", event: "FFA (Random)" },
    { time: "10:00", event: "FFA (Random)" },
    { time: "13:00", event: "TVT (Auto Group)" },
    { time: "17:00", event: "Jormungand" },
    { time: "18:00", event: "TVT (Group)" },
    { time: "21:00", event: "Dredgion" },
    { time: "22:00", event: "MIXFIGHT" } , 
        { time: "14:30", event: "PvP Boss" },
    { time: "18:30", event: "PvP Boss" },
    { time: "23:30", event: "PvP Boss" }
  ],
  Friday: [
    { time: "00:00", event: "Discipline" },
    { time: "03:00", event: "Cooperation" },
    { time: "05:00", event: "Discipline / Chaos" },
    { time: "10:00", event: "Discipline" },
    { time: "12:00", event: "Discipline" },
    { time: "14:00", event: "Cooperation" },
    { time: "19:00", event: "Discipline / Chaos" },
    { time: "16:00", event: "Siege – Krotan Refuge" },
    { time: "20:00", event: "Siege – Miren Fortress" },
    { time: "23:00", event: "TVT (Auto Group)" },
    { time: "04:00", event: "RvR (Random)" },
    { time: "07:00", event: "TVT (Group)" },
    { time: "08:00", event: "Kamar" },
    { time: "09:00", event: "FFA (Random)" },
    { time: "10:00", event: "FFA (Random)" },
    { time: "13:00", event: "TVT (Auto Group)" },
    { time: "17:00", event: "God’s Throne 12v12" },
    { time: "18:00", event: "TVT (Group)" },
    { time: "21:00", event: "Kamar" },
    { time: "22:00", event: "MIXFIGHT" } ,
        { time: "14:30", event: "PvP Boss" },
    { time: "18:30", event: "PvP Boss" },
    { time: "23:30", event: "PvP Boss" }
  ],
  Saturday: [
    { time: "00:00", event: "Discipline" },
    { time: "03:00", event: "Cooperation" },
    { time: "05:00", event: "Discipline / Chaos" },
    { time: "10:00", event: "Discipline" },
    { time: "12:00", event: "Discipline" },
    { time: "14:00", event: "Cooperation / Glory" },
    { time: "19:00", event: "Discipline / Chaos" },
    { time: "16:00", event: "Siege – Siel’s Fortresses" },
    { time: "20:00", event: "Siege – Anoha Fortress" },
    { time: "23:00", event: "TVT (Auto Group)" },
    { time: "04:00", event: "Runatorium" },
    { time: "07:00", event: "TVT (Group)" },
    { time: "08:00", event: "God’s Throne 12v12" },
    { time: "09:00", event: "FFA (Random)" },
    { time: "10:00", event: "FFA (Random)" },
    { time: "13:00", event: "TVT (Auto Group)" },
    { time: "17:00", event: "God’s Throne 12v12" },
    { time: "18:00", event: "TVT (Group)" },
    { time: "21:00", event: "God’s Throne 12v12" },
    { time: "22:00", event: "RvR (Random)" } , 
        { time: "14:30", event: "PvP Boss" },
    { time: "18:30", event: "PvP Boss" },
    { time: "23:30", event: "PvP Boss" }
  ],
  Sunday: [
    { time: "00:00", event: "Discipline" },
    { time: "03:00", event: "Cooperation" },
    { time: "05:00", event: "Discipline / Chaos" },
    { time: "10:00", event: "Discipline" },
    { time: "12:00", event: "Discipline" },
    { time: "14:00", event: "Cooperation / Glory" },
    { time: "19:00", event: "Discipline / Chaos" },
    { time: "16:00", event: "Siege – Divine Fortress" },
    { time: "20:00", event: "Siege – Agents Battle" },
    { time: "23:00", event: "TVT (Auto Group)" },
    { time: "04:00", event: "Kamar" },
    { time: "07:00", event: "TVT (Group)" },
    { time: "08:00", event: "Runatorium" },
    { time: "09:00", event: "FFA (Random)" },
    { time: "10:00", event: "FFA (Random)" },
    { time: "13:00", event: "TVT (Auto Group)" },
    { time: "17:00", event: "Kamar" },
    { time: "18:00", event: "TVT (Group)" },
    { time: "21:00", event: "God’s Throne 12v12" },
    { time: "22:00", event: "RvR (Random)" } ,
        { time: "14:30", event: "PvP Boss" },
    { time: "18:30", event: "PvP Boss" },
    { time: "23:30", event: "PvP Boss" }
  ]
};



function getNow() {
  return moment().tz("America/New_York"); // UTC-4
}

function getNextEvents(n = 1) {
  const now = getNow();
  let results = [];
  let days = Object.keys(fullSchedule); // تعديل هنا
  let index = days.indexOf(now.format("dddd"));

  for (let i = 0; i < 7 && results.length < n; i++) {
    const dayName = days[(index + i) % 7];
    const events = fullSchedule[dayName]; // تعديل هنا

    for (let ev of events) {
      const eventTime = moment.tz(ev.time, "HH:mm", "America/New_York");
      eventTime.day((index + i) % 7);

      if (eventTime.isAfter(now)) {
        results.push({ ...ev, day: dayName });
        if (results.length >= n) break;
      }
    }
  }

  return results;
}

function getTodaySieges() {
  const today = getNow().format("dddd");
  const todayEvents = fullSchedule[today] || [];



  return todayEvents
    .filter(ev => ev.event.toLowerCase().includes("siege"))
    .map(ev => ({ day: today, time: ev.time, event: ev.event }));
}

client.on('messageCreate', (message) => {
  const content = message.content.trim();

  if (content.startsWith('!next')) {
    const parts = content.split(' ');
    const count = parseInt(parts[1]) || 1;
    const upcoming = getNextEvents(count);

    if (upcoming.length === 0) return message.reply("No upcoming events.");

    const reply = upcoming.map(ev =>
      `📅 ${ev.day} – 🕒 ${ev.time} – 🎮 ${ev.event}`
    ).join('\n');

    message.reply(reply);
  }

  if (content === '!siege') {
    const sieges = getTodaySieges();
    if (sieges.length === 0) return message.reply("No siege events today.");

    const reply = sieges.map(ev =>
      `🛡️ ${ev.day} – 🕒 ${ev.time} – ${ev.event}`
    ).join('\n');

    message.reply(reply);
  }
});

client.once('ready', () => {
  console.log(`✅ Bot is online as ${client.user.tag}`);
});

client.login(TOKEN);