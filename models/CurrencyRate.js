class CurrencyRate {
    constructor(id,from,fromCode,to,toCode,rate,date) {
        this.id = id;
        this.from = from;
        this.fromCode = fromCode;
        this.to = to;
        this.toCode = toCode;
        this.rate = rate;
        this.date = date;
    }
}

export default CurrencyRate;