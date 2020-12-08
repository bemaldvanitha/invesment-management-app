class StockPriceByTime{
    constructor(id,comId,open,high,low,close,volume,date) {
        this.id = id;
        this.comId = comId;
        this.open = open;
        this.high = high;
        this.low = low;
        this.close = close;
        this.volume = volume;
        this.date = date;
    }
}

export default StockPriceByTime;