import requests
import urllib.request
from lxml import html
import json
import time
import os

#729 moves
#https://www.pokeonecommunity.com/index.php?mod=pokemon&action=moves&id=729

page = requests.get("https://www.pokeonecommunity.com/index.php?mod=pokemon&action=moves&id=729")
print(page.text)