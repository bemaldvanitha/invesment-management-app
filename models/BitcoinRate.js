class BitcoinRate {
    constructor(id,from,fromCode,to,toCode,exchangeRate,bidPrice,askPrice) {
        this.id = id;
        this.from = from;
        this.fromCode = fromCode;
        this.to = to;
        this.toCode = toCode;
        this.exchangeRate = exchangeRate;
        this.bidPrice = bidPrice;
        this.askPrice = askPrice;
    }
}

export default BitcoinRate;