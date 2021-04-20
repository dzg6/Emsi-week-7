import { API } from './api.js'

export class pos extends API {
    constructor(id) {
        super(id);
    }


    async createDonut(type, price, count, updateStore) {
        let data = await super.createDonut(type, price);
        if(data.success){
            data = await super.addInventory(type, count);
            updateStore(data);
        }else{
            updateStore(data)
        }
    }

    async editDonut(type, price, updateStore) {
        const data = await super.editDonut(type, price);
        updateStore(data);
    }
    async addInventory(type, count, updateStore) {
        const data = await super.addInventory(type,count);
        updateStore(data);
    
    }

    async placeOrder(type, count, updateStore) {
        const data = await super.placeOrder(type,count);
        updateStore(data);
    
    }
    async refund(type, count, updateStore) {
        const data = await super.refund(type,count);
        updateStore(data);
    
    }


    async getDonuts(printCallback) {
        const data = await super.getInventory();
        printCallback(data.name, data.donuts);
    }

    async  getRevenue(printCallback) {
        const data = await super.getRevenue();
        const tax = await super.getSalesTax(data.revenue);
        let total = Number(data.revenue) + Number(tax.salesTax);

        printCallback(data.revenue, tax.salesTax, total)
    }
    
}