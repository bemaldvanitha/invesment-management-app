class StockPriceByDate {
    constructor(id,comId,open,high,low,close,volume,adjClose,date) {
        this.id = id;
        this.comId = comId;
        this.open = open;
        this.high = high;
        this.low = low;
        this.close = close;
        this.volume = volume;
        this.adjClose = adjClose;
        this.date = date;
    }
}

export default StockPriceByDate;