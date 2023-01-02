import requests

from datetime import datetime

import os

slackbot_token = os.getenv("SLACKBOT_TOKEN")

now = datetime.now().strftime("%d/%m/%Y %H:%M:%S")

url = 'https://slack.com/api/chat.postMessage'

message = "It's " + now + ". Remember to eat more 🥜🥜🥜 peanut butter 🥜🥜🥜 in 2023"

requests.post(
    url,
    headers={
        "Content-Type":"application/json",
        "Authorization": "Bearer " + slackbot_token
    },
    json={
        "channel": "general",
        "text": message
    }
)
