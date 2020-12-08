class CompanyDetail {
    constructor(id,symbol,assertType,name,description,exchange,country,sector,address,industry,imageUrl) {
        this.id = id;
        this.symbol = symbol;
        this.assertType = assertType;
        this.name = name;
        this.description = description;
        this.exchange = exchange;
        this.country = country;
        this.sector = sector;
        this.address = address;
        this.industry = industry;
        this.imageUrl = imageUrl;
    }
}

export default CompanyDetail;