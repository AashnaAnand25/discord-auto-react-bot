import os
import discord
from discord.ext import commands
from dotenv import load_dotenv  # Only used locally

# Load .env file for local testing (Railway will skip this)
load_dotenv()

# Get your token from Railway’s ENV VARS
TOKEN = os.getenv("DISCORD_TOKEN")

# Raise an error if it's not set (helps debug)
if TOKEN is None:
    raise ValueError("DISCORD_TOKEN is not set!")

# Discord bot setup
intents = discord.Intents.default()
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"Logged in as {bot.user}")

bot.run(TOKEN)


