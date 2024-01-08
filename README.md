# Studentweb Grade Notifier
The Studentweb Grade Notifier is an application that combines a Discord bot with a web scraper, providing a seamless solution for extracting grades and sending notifications.

# Installation
To install and run the Studentweb Grade Notifier locally, follow these steps:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/ivannorderhaug/studentweb-grade-notifier.git
    ```

2. **Navigate to the Project Directory:**
    ```bash
    cd studentweb-grade-notifier
    ```

3. **Install Dependencies:**
    ```bash
    npm install
    ```
   Ensure you have atleast Node.js version 20.10.0 and npm version 10.2.4 installed. If not, you can install them by following the instructions on the [Node.js website](https://nodejs.org/) and using the package manager included with Node.js, npm.

4. **Create a Discord bot**  
   This can be done by following the instructions on [discord.py](https://discordpy.readthedocs.io/en/stable/discord.html). Save the CLIENT ID and TOKEN as it will be used in the next step.

5. **Create a .env file**
   ```bash
   PERSONAL_NUMBER = "XXXXXXXXXXX"
   PIN_CODE = "XXXX"
   DISCORD_TOKEN="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
   DISCORD_ACTIVE_CHANNEL_ID="XXXXXXXXXXXXXXXXXXX"
   DISCORD_GUILD_ID="XXXXXXXXXXXXXXXXXXX"
   DISCORD_CLIENT_ID="XXXXXXXXXXXXXXXXXXX"
   ```
   To get the GUILD ID and ACTIVE_CHANNEL_ID, open Discord, go to Settings > Advanced and enable developer mode. Then, right-click on the channel you want the bot to be active in and select "Copy ID" to get the channel ID. Finally, right-click on the server icon and select "Copy ID" to get the guild ID.

6. **Deploy commands**
   ```bash  
   node deploy_commands.sh
   ```

7. **Run locally**   
    ```bash   
    node .
    ```

8. **Docker (OPTIONAL)**   
    ```bash   
    docker build -t image-name . 
    docker run -d image-name
    ```

## License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


   

