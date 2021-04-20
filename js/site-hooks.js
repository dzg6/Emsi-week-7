import { pos } from './store.js'

export class hooks extends pos {
    constructor(id) {
        super(id);
    }

    placeOrder(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        let type = formData.get('donut');
        let count = formData.get('inventory');
        super.placeOrder(type, count, (data) => {
            if(data.success){
                this.updateStore()
            }else{
                console.error(data.error)
            }
        });
    }
    refund(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        let type = formData.get('donut');
        let count = formData.get('inventory');
        super.refund(type, count, (data) => {
            if(data.success){
                this.updateStore()
            }else{
                console.error(data.error)
            }
        });
    }

    addInventory(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        let type = formData.get('donut');
        let count = formData.get('inventory');
        super.addInventory(type, count, (data) => {
            if(data.success){
                this.updateStore()
            }else{
                console.error(data.error)
            }
        });
    }
    createDonut(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        let type = formData.get('donut');
        let price = formData.get('price');
        let count = formData.get('inventory');
        super.createDonut(type, price, count, (data) => {
            if(data.success){
                this.updateStore()
            }else{
                console.error(data.error)
            }
        });
    }

    editDonut(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        let type = formData.get('donut');
        let price = formData.get('price');
        let count = formData.get('inventory');
        super.editDonut(type, price, count, (data) => {
            if(data.success){
                this.updateStore()
            }else{
                console.error(data.error)
            }
        });
    }



    updateStore(){
        this.getDonuts(this.printDonuts);
        this.getRevenue(this.printRevenue);
    }

    // printServerMessage(donuts){

    // }
    
    printRevenue(revenue, tax, total){
        document.getElementById("revenue").innerHTML = revenue;
        document.getElementById("salesTax").innerHTML = tax;
        document.getElementById("total").innerHTML = total;
    }

    printDonuts(name, donuts){
        let select = "";
        let table = ""

        donuts.forEach(donut => {
            select += "<option value=\'" + donut.type + "\' > " + donut.type + "</option>";
            table += "<tr><td> " + donut.type + " </td><td> " + donut.count 
                    + " </td><td> " + donut.price + " </td></tr>";
        });

        document.getElementById("shopName").innerHTML = name;
        document.getElementById("inventoryDonut").innerHTML = select;
        document.getElementById("editDonut").innerHTML = select;
        document.getElementById("posDonut").innerHTML = select;
        document.getElementById("refundDonut").innerHTML = select;
        document.getElementById("donutList").innerHTML = table;
    }

}