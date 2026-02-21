import requests

BOT_TOKEN = "8372151646:AAHAY-Imetnzf3XimVnFKs2eifYTODR-UC8"
CHAT_ID = "7103455845"

def send_telegram_alert(message):
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"

    payload = {
        "chat_id": CHAT_ID,
        "text": message,
        "parse_mode": "Markdown"
    }

    response = requests.post(url, json=payload)

    if response.status_code == 200:
        print("✅ Telegram alert sent")
    else:
        print("❌ Failed:", response.text)


    #8372151646:AAHAY-Imetnzf3XimVnFKs2eifYTODR-UC8 