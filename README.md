# Discord Event Schedule Bot

A Discord bot that displays game event schedules with automatic timezone conversion for users worldwide.

## Features

- 📅 **Event Schedule Display**: Shows upcoming game events for each day of the week
- 🕐 **Automatic Timezone Conversion**: Uses Discord's native timestamp format to display events in each user's local timezone
- 🏰 **Siege Event Filter**: Dedicated command to show only siege events
- ⚔️ **Time Countdown**: Shows time remaining until each event
- 🌍 **Global Support**: Works for users in any timezone while maintaining schedule accuracy

## Commands

### `!next [number]`
Displays upcoming events for the current day.

**Usage:**
- `!next` - Shows the next upcoming event
- `!next 3` - Shows the next 3 upcoming events
- `!next 5` - Shows the next 5 upcoming events

**Example Output:**
```
📅 Upcoming events for Monday:
4:00 PM, September 21, 2025 – Jormungand ⚔️ Time left: 2h 15m Prepare for battle! 💥
7:00 PM, September 21, 2025 – TvT (Group) ⚔️ Time left: 5h 15m Prepare for battle! 💥
8:00 PM, September 21, 2025 – RvR (Random) ⚔️ Time left: 6h 15m Prepare for battle! 💥
```

### `!siege`
Displays all siege events for the current day.

**Example Output:**
```
🏰 Siege events for Monday:
4:00 PM, September 21, 2025: Siege – Asteria Fortress
8:00 PM, September 21, 2025: Siege - Siege – Roah Fortress
```

## Schedule

The bot maintains a comprehensive weekly schedule with events covering:

- **PvP Events**: TvT (Auto Group), TvT (Group), RvR (Random), FFA (Random)
- **Siege Events**: Various fortress sieges throughout the week
- **Special Events**: Jormungand, God's Throne 12v12, Two Gods, Kamar, Runatorium
- **Regular Activities**: Discipline, Cooperation, DisciplineChaos, MIXFIGHT
- **Boss Events**: PvP Boss (multiple times daily)
- **Instance Events**: Dredgion, Glory

### Weekly Schedule Overview

| Day | Major Events |
|-----|--------------|
| **Monday** | Asteria Fortress Siege (4:00 PM), Roah Fortress Siege (8:00 PM) |
| **Tuesday** | Temple of Scales/Vorgalten Citadel Siege (8:00 PM) |
| **Wednesday** | Altar of Avarice/Crimson Temple Siege (8:00 PM) |
| **Thursday** | Sulfur Fortress Siege (4:00 PM), Kysis Fortress Siege (8:00 PM) |
| **Friday** | Krotan Refuge Siege (4:00 PM), Miren Fortress Siege (8:00 PM) |
| **Saturday** | Siel's Fortresses Siege (4:00 PM), Anoha Fortress Siege (8:00 PM) |
| **Sunday** | Divine Fortress Siege (4:00 PM), Agents Battle Siege (8:00 PM) |

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm
- A Discord bot token

### Setup

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd bot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your Discord bot token**
   - Edit `` and replace the token in the last line:
   ```js
   client.login('YOUR_BOT_TOKEN_HERE');
   ```

4. **Run the bot**
   ```bash
   node 
   ```

### Discord Bot Setup

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Go to "Bot" section and create a bot
4. Copy the bot token and add it to `index.js`
5. In "OAuth2" → "URL Generator":
   - Select `bot` scope
   - Select `Send Messages`, `Read Message History` permissions
   - Use the generated URL to invite the bot to your server

## Dependencies

- **discord.js** (^14.22.1): Discord API wrapper for Node.js
- **moment-timezone** (^0.6.0): Timezone-aware date/time manipulation

## Configuration

### Timezone
The bot is configured to use `America/New_York` timezone as the base schedule. All events are calculated from this timezone but displayed in each user's local timezone.

```js
const timeZone = "America/New_York";
```

### Command Prefix
The main command prefix can be changed:

```js
const prefix = "!next"; // Change this to your preferred prefix
```

### Special User Feature
The bot includes a special response for a specific user ID:

```js
const specialUserId = "11873605050488650506816"; // Replace with desired user ID
```

When this user sends any message, the bot responds with: "Bruh... practice first before you embarrass yourself 🤡"

## How Timezone Conversion Works

1. **Base Schedule**: All events are stored in `America/New_York` timezone
2. **Calculation**: The bot calculates when each event occurs in New York time
3. **Unix Timestamp**: Converts the event time to a Unix timestamp (universal time)
4. **Discord Format**: Uses Discord's `<t:timestamp:F>` format for automatic timezone conversion
5. **User Display**: Each user sees the event time in their local timezone automatically

### Example
- Event scheduled for "16:00" (4:00 PM New York time)
- User in London sees: "9:00 PM"
- User in Tokyo sees: "5:00 AM (next day)"
- User in Los Angeles sees: "1:00 PM"

## File Structure

```
bot/
├── index.js              # Main bot file
├── package.json      # Project dependencies
├── package-lock.json # Dependency lock file
├── README.md         # This file
├── CHANGES.md        # Change documentation
└── node_modules/     # Installed dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Troubleshooting

### Common Issues

**Bot doesn't respond to commands:**
- Check if the bot has proper permissions in your Discord server
- Verify the bot token is correct
- Ensure the bot is online (check Discord server member list)

**Wrong timezone display:**
- Discord timestamps automatically use the user's local timezone
- Verify your Discord client timezone settings
- The bot's base timezone is America/New_York for calculations

**Events not showing:**
- The bot only shows upcoming events for the current day
- Check if there are events scheduled for today in the code
- Past events won't be displayed

### Logs and Debugging

The bot runs in console mode. Check the terminal/command prompt for any error messages when running `node index.js`.

## License

This project is licensed under the ISC License.

## Support

For issues and feature requests, please create an issue in the project repository.

---

**Note**: This bot is designed for game event scheduling and includes PvP/gaming terminology. Modify the event names and schedule as needed for your specific use case.
