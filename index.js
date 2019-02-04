class WSService {
    constructor(url) {
        console.log('WebSocket is inited');
        this.ws = new WebSocket(url);
        this.ws.onmessage = data => {
            const parsed = JSON.parse(data.data);
            if (parsed.params) {
                console.log(`${parsed.params.symbol} - ${parsed.params.data[0].timestamp}`);
            }
        };
        this.ws.onclose = event => {
            console.log('WebSocket is closed now.');
            console.log(event);
        };
        this.ws.onerror = (event) => {
            console.error('WebSocket error observed:', event);
        };
    }

    subscribeCandles(symbol) {
        this.send({
            method: 'subscribeCandles',
            params: {
                symbol,
                period: 'M1',
            },
            id: 123,
        });
    }

    send(message) {
        this.ws.onopen = () => this.ws.send(JSON.stringify(message));
    }
}

const socketURL = 'wss://api.hitbtc.com/api/2/ws';

class WebsocketUser {

    constructor() {
        this.wsService1 = new WSService(socketURL).subscribeCandles('BTCUSD');
        this.wsService2 = new WSService(socketURL).subscribeCandles('ETHUSD');
        this.wsService3 = new WSService(socketURL).subscribeCandles('LTCUSD');
        this.wsService4 = new WSService(socketURL).subscribeCandles('ZECUSD');
        this.wsService5 = new WSService(socketURL).subscribeCandles('ETHBTC');
        this.wsService6 = new WSService(socketURL).subscribeCandles('XMRUSD');
    }


}

const wsDemo = new WebsocketUser();
