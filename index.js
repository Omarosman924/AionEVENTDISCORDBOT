const { Client, GatewayIntentBits } = require('discord.js');
const moment = require('moment-timezone');
const prefix = "!next"; // The prefix for the command

// Timezone definition
const timeZone = "America/New_York"; 
const fullSchedule = {
   Monday: [
    { time: "00:00", event: "Discipline" },
    { time: "01:00", event: "Cooperation" },
    { time: "03:00", event: "TvT (Auto Group)" },
    { time: "04:00", event: "Jormungand" },
    { time: "05:00", event: "DisciplineChaos" },
    { time: "07:00", event: "TvT (Group)" },
    { time: "08:00", event: "RvR (Random)" },
    { time: "10:00", event: "(Guardian)Asmo" },
    { time: "12:00", event: "Discipline" },
    { time: "13:00", event: "TvT (Auto Group)" },
    { time: "14:00", event: "Cooperation" },
    { time: "14:30", event: "PvP Boss" },
    { time: "16:00", event: "Siege – Asteria Fortress" },
    { time: "17:00", event: "(Guardian)Asmo" },
    { time: "18:00", event: "TvT (Group)" },
    
    { time: "19:00", event: "DisciplineChaos" },
           { time: "19:30", event: "PvP Boss" },

    { time: "20:00", event: " Siege - Siege – Roah Fortress" },
    { time: "21:00", event: "God's Throne 12v12" },
    { time: "22:00", event: "MIXFIGHT" },
    { time: "23:30", event: "PvP Boss" }
  ],
  Tuesday: [
    { time: "00:00", event: "Discipline" },
    { time: "01:00", event: "Cooperation" },
    { time: "03:00", event: "TvT (Auto Group)" },
    { time: "04:00", event: "RvR (Random)" },
    { time: "05:00", event: "DisciplineChaos" },
    { time: "07:00", event: "TvT (Group)" },
    { time: "08:00", event: "Dredgion" },
    { time: "10:00", event: "FFA (Random)" },
    { time: "12:00", event: "Discipline" },
    { time: "13:00", event: "TvT (Auto Group)" },
    { time: "14:00", event: "Cooperation" },
          { time: "14:30", event: "PvP Boss" },
    { time: "17:00", event: "Jormungand" },
    { time: "18:00", event: "TvT (Group)" },

    { time: "19:00", event: "DisciplineChaos" },
                { time: "19:30", event: "PvP Boss" },

    { time: "20:00", event: " Siege - Siege – Temple of ScalesVorgalten Citadel", type: "siege" },
    { time: "21:00", event: "God's Throne 12v12" },
    { time: "22:00", event: "MIXFIGHT" },
    { time: "23:30", event: "PvP Boss" }
  ],
  Wednesday: [
    { time: "00:00", event: "Discipline" },
    { time: "01:00", event: "Cooperation" },
    { time: "03:00", event: "TvT (Auto Group)" },
    { time: "04:00", event: "Jormungand" },
    { time: "05:00", event: "DisciplineChaos" },
    { time: "07:00", event: "TvT (Group)" },
    { time: "08:00", event: "God's Throne 12v12" },
    { time: "10:00", event: "(Guardian)Elyos" },
    { time: "12:00", event: "Discipline" },
    { time: "13:00", event: "TvT (Auto Group)" },
    { time: "14:00", event: "Cooperation" },
          { time: "14:30", event: "PvP Boss" },

    { time: "17:00", event: "(Guardian)Elyos" },
    { time: "18:00", event: "TvT (Group)" },

    { time: "19:00", event: "DisciplineChaos" },
                { time: "19:30", event: "PvP Boss" },

    { time: "20:00", event: " Siege - Altar of AvariceCrimson Temple", type: "siege" },
    { time: "21:00", event: "Dredgion" },
    { time: "22:00", event: "MIXFIGHT" },
    { time: "23:30", event: "PvP Boss" }
  ],
  Thursday: [
    { time: "00:00", event: "Discipline" },
    { time: "01:00", event: "Cooperation" },
    { time: "03:00", event: "TvT (Auto Group)" },
    { time: "04:00", event: "Runatorium" },
    { time: "05:00", event: "DisciplineChaos" },
    { time: "07:00", event: "TvT (Group)" },
    { time: "08:00", event: "RvR (Random)" },
    { time: "10:00", event: "FFA (Random)" },
    { time: "12:00", event: "Discipline" },
    { time: "13:00", event: "TvT (Auto Group)" },
    { time: "14:00", event: "Cooperation" },
          { time: "14:30", event: "PvP Boss" },

    { time: "16:00", event: " Siege - Sulfur Fortress" },
    { time: "17:00", event: "Jormungand" },
    { time: "18:00", event: "TvT (Group)" },

    { time: "19:00", event: "DisciplineChaos" },
                { time: "19:30", event: "PvP Boss" },

    { time: "20:00", event: " Siege - Kysis Fortress" },
    { time: "21:00", event: "God's Throne 12v12" },
    { time: "22:00", event: "MIXFIGHT" },
    { time: "23:30", event: "PvP Boss" }
  ],
  Friday: [
    { time: "00:00", event: "Discipline" },
    { time: "01:00", event: "Cooperation" },
    { time: "03:00", event: "TvT (Auto Group)" },
    { time: "04:00", event: "RvR (Random)" },
    { time: "05:00", event: "DisciplineChaos" },
    { time: "07:00", event: "TvT (Group)" },
    { time: "08:00", event: "Kamar" },
    { time: "10:00", event: "Discipline" },
    { time: "10:00", event: "FFA (Random)" },
    { time: "13:00", event: "TvT (Auto Group)" },
    { time: "14:00", event: "Cooperation" },
          { time: "14:30", event: "PvP Boss" },

    { time: "16:00", event: " Siege - Krotan Refuge" },
    { time: "17:00", event: "Two Gods" },
    { time: "18:00", event: "TvT (Group)" },

    { time: "19:00", event: "DisciplineChaos" },
                { time: "19:30", event: "PvP Boss" },

    { time: "20:00", event: " Siege - Miren Fortress" },
    { time: "21:00", event: "Kamar" },
    { time: "22:00", event: "MIXFIGHT" },
    { time: "23:30", event: "PvP Boss" }
  ],
  Saturday: [
    { time: "00:00", event: "Discipline" },
    { time: "01:00", event: "Cooperation" },
    { time: "03:00", event: "TvT (Auto Group)" },
    { time: "04:00", event: "Runatorium" },
    { time: "05:00", event: "DisciplineChaos" },
    { time: "07:00", event: "TvT (Group)" },
    { time: "08:00", event: "God's Throne 12v12" },
    { time: "10:00", event: "Discipline" },
    { time: "10:00", event: "FFA (Random)" },
    { time: "13:00", event: "TvT (Auto Group)" },
    { time: "14:00", event: "CooperationGlory" },
          { time: "14:30", event: "PvP Boss" },

    { time: "16:00", event: " Siege - Siel's Fortresses" },
    { time: "17:00", event: "Runatorium" },
    { time: "18:00", event: "TvT (Group)" },

    { time: "19:00", event: "DisciplineChaos" },
                { time: "19:30", event: "PvP Boss" },

    { time: "20:00", event: " Siege - Anoha Fortress" },
    { time: "21:00", event: "Two Gods" },
    { time: "22:00", event: "Glory" },
    { time: "22:00", event: "RvR (Random)" },
    { time: "23:30", event: "PvP Boss" }
  ],
  Sunday: [
    { time: "00:00", event: "Discipline" },
    { time: "01:00", event: "Cooperation" },
    { time: "03:00", event: "TvT (Auto Group)" },
    { time: "05:00", event: "DisciplineChaos" },
    { time: "07:00", event: "TvT (Group)" },
    { time: "08:00", event: "Runatorium" },
    { time: "10:00", event: "Discipline" },
    { time: "10:00", event: "FFA (Random)" },
    { time: "13:00", event: "TvT (Auto Group)" },
    { time: "14:00", event: "CooperationGlory" },
          { time: "14:30", event: "PvP Boss" },

    { time: "16:00", event: " Siege - Divine Fortress" },
    { time: "17:00", event: "Kamar" },
    { time: "18:00", event: "TvT (Group)" },
    { time: "19:00", event: "DisciplineChaos" },
                { time: "19:30", event: "PvP Boss" },

    { time: "20:00", event: " Siege - Agents Battle" },
    { time: "21:00", event: "Runatorium" },
    { time: "22:00", event: "Glory" },
    { time: "22:00", event: "RvR (Random)" },
    { time: "23:30", event: "PvP Boss" }
  ]
};
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const specialUserId = "11873605050488650506816"; // ID بتاعك

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  // ✅ لو الشخص المميز كتب حاجة
  if (message.author.id === specialUserId) {
    message.reply("Bruh... practice first before you embarrass yourself 🤡");
  //  return; // عشان مايكملش باقي الكود
  }

  // ✅ !next command
  if (message.content.startsWith(prefix)) {
    const args = message.content.split(" ");
    let numberOfEvents = parseInt(args[1]);
    if (isNaN(numberOfEvents)) numberOfEvents = 1;

    const now = moment.tz(timeZone);
    const dayOfWeek = now.format('dddd');
    const currentTime = now.format("HH:mm");

    const eventsForTheDay = fullSchedule[dayOfWeek] || [];
    const upcomingEvents = eventsForTheDay.filter(event => event.time >= currentTime);
    const eventsToShow = upcomingEvents.slice(0, numberOfEvents);

    function convertMinutes(minutes) {
      if (minutes < 60) {
        return `${minutes} minutes`;
      }
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return `${hours}h ${remainingMinutes}m`;
    }

    if (eventsToShow.length > 0) {
      let eventList = `📅 **Upcoming events for ${dayOfWeek}:**\n`;
      eventsToShow.forEach(event => {
        const eventTime = moment.tz(`${now.format("YYYY-MM-DD")} ${event.time}`, "YYYY-MM-DD HH:mm", timeZone);
        const unixTimestamp = eventTime.unix();
        const diffMinutes = eventTime.diff(now, 'minutes');
        const diffhm = convertMinutes(diffMinutes);
        eventList += `<t:${unixTimestamp}:F> – ${event.event} ⚔️ *Time left: ${diffhm}* Prepare for battle! 💥\n`;
      });
      message.channel.send(eventList);
    } else {
      message.channel.send(`✅ No upcoming events for **${dayOfWeek}**.`);
    }
  }

  // ✅ !siege command
  if (message.content.startsWith("!siege")) {
    const now = moment.tz(timeZone);
    const dayOfWeek = now.format('dddd');
    const eventsForTheDay = fullSchedule[dayOfWeek] || [];
    const siegeEvents = eventsForTheDay.filter(event => event.event.toLowerCase().includes("siege"));

    if (siegeEvents.length > 0) {
      let siegeList = `🏰 **Siege events for ${dayOfWeek}:**\n`;
      siegeEvents.forEach(event => {
        const eventTime = moment.tz(`${now.format("YYYY-MM-DD")} ${event.time}`, "YYYY-MM-DD HH:mm", timeZone);
        const unixTimestamp = eventTime.unix();
        siegeList += `<t:${unixTimestamp}:F>: ${event.event}\n`;
      });
      message.channel.send(siegeList);
    } else {
      message.channel.send(`❌ No siege events for **${dayOfWeek}**.`);
    }
  }
});


client.login("Your Bot Token Here"); 

