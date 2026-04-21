from google.oauth2 import service_account
import google.auth.transport.requests
import urllib.request, json, sys

creds = service_account.Credentials.from_service_account_file(
    r'C:\dev\tools\seo-aeo-agent\seo-agent-key.json',
    scopes=['https://www.googleapis.com/auth/indexing']
)
creds.refresh(google.auth.transport.requests.Request())
token = creds.token

urls = [
    "https://danielhadobas.com/",
    "https://danielhadobas.com/about",
    "https://danielhadobas.com/blog",
    "https://danielhadobas.com/solar-las-vegas",
    "https://danielhadobas.com/solar-henderson-nv",
    "https://danielhadobas.com/solar-north-las-vegas",
    "https://danielhadobas.com/solar-california",
    "https://danielhadobas.com/solar-los-angeles",
    "https://danielhadobas.com/solar-san-diego",
    "https://danielhadobas.com/solar-riverside",
    "https://danielhadobas.com/blog/solar-cost-las-vegas-2025",
    "https://danielhadobas.com/blog/nv-energy-net-metering-explained",
    "https://danielhadobas.com/blog/nevada-solar-tax-credit-2025",
    "https://danielhadobas.com/blog/best-solar-companies-las-vegas",
    "https://danielhadobas.com/blog/california-solar-incentives-2025",
    "https://danielhadobas.com/solar-summerlin",
    "https://danielhadobas.com/solar-henderson-green-valley",
]

ok = 0
fail = 0
for url in urls:
    payload = json.dumps({"url": url, "type": "URL_UPDATED"}).encode()
    req = urllib.request.Request(
        "https://indexing.googleapis.com/v3/urlNotifications:publish",
        data=payload,
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
        method="POST"
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            ok += 1
            print(f"OK  {url}")
    except Exception as e:
        fail += 1
        print(f"ERR {url}: {e}")

print(f"\nSubmitted: {ok} OK, {fail} failed")
