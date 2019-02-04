# websocketTest

This project is to answwer the question why inited and working websocket may close itself.

Download the repo, open index.html and console

index.js creates 6 sockets (x6 more propability that one will fail) and subscribes to this api https://api.hitbtc.com/#socket-api-reference

After some time (1 - 5 min for me) one or more sockets closes with status code 1006

Thanks for any help if you can answer why?
