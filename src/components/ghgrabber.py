import json
import requests
from datetime import datetime
import time
import re
import sys

MAXTIMEDIFF = 28
f = "%Y-%m-%dT%H:%M:%SZ"

def parsedate(inp, frmt="%Y-%m-%dT%H:%M:%SZ", rms=True):
    dt = datetime.strptime(inp, frmt)
    if rms:
        return dt.timestamp() * 1000
    else:
        return dt

now = re.sub(" ","T",str(datetime.now()))
now = re.sub("\\..*","",now) + "Z"

def validDateDiff(date1,date2,mxdiff=[MAXTIMEDIFF]):
    date1ms = parsedate(date1)
    date2ms = parsedate(date2)
    y1,mo1,d1 = str(datetime.fromtimestamp(date1ms/1000.0)).split(" ")[0].split("-")
    h1,mi1,s1 = str(datetime.fromtimestamp(date1ms/1000.0)).split(" ")[1].split(":")
    y2,mo2,d2 = str(datetime.fromtimestamp(date2ms/1000.0)).split(" ")[0].split("-")
    h2,mi2,s2 = str(datetime.fromtimestamp(date2ms/1000.0)).split(" ")[1].split(":")
    zipped = list(zip([y1,mo1,d1,h1,mi1,s1],[y2,mo2,d2,h2,mi2,s2]))
    lstdiffs=[]
    for date1val, date2val in zipped:
        lstdiffs.append(abs(int(date2val)-int(date1val)))
    lstmap = [31557600,2629800,86400,3600,60,1]
    diff = round(sum([a*b for a,b in zip(lstdiffs,lstmap)]) / 86400)
    return any([bool(diff < x) for x in mxdiff])


repos = json.loads((requests.get(f"https://api.github.com/users/{sys.argv[1]}/repos").content).decode("utf-8"))

lstout = {}
for itm in repos:
    if validDateDiff(itm["updated_at"],now,mxdiff=[48,MAXTIMEDIFF]):
        lstout[itm["name"]] = itm["svn_url"]

print(json.dumps(lstout,indent=4))
