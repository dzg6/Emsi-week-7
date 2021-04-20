import { pos } from './js/store.js'
import { API } from './js/api.js'
import { hooks } from './js/site-hooks.js'
document.getElementById("login").addEventListener("submit", login);

document.getElementById("createStore").addEventListener("submit", createStore);

function createStore(e){
    e.preventDefault();
    let newStore = new API(null);
    const formData = new FormData(e.target);
    let name = formData.get('storeName');
    newStore.createStore(name, (data) => {
        console.log(data)
    })
}

function login(e) {

    e.preventDefault();
    const formData = new FormData(e.target);
    let storeId = formData.get('storeId');
    
    document.getElementById("store").classList.remove("hide")
    document.getElementById("store").classList.add("logged")
    document.getElementById("login").classList.add("hide")
    
    let shop = new hooks(storeId);
    shop.updateStore();

    document.getElementById("createDonut").addEventListener("submit", (e) => {shop.createDonut(e)});
    document.getElementById("inventory").addEventListener("submit", (e) => {shop.addInventory(e)});
    document.getElementById("pos").addEventListener("submit", (e) => {shop.placeOrder(e)});
    document.getElementById("edit").addEventListener("submit", (e) => {shop.editDonut(e)});
    document.getElementById("refund").addEventListener("submit", (e) => {shop.refund(e)});

}


document.getElementById("logout").addEventListener("submit", logout);

function logout(e) {

    e.preventDefault();

    

    document.getElementById("store").classList.add("hide")
    document.getElementById("store").classList.remove("logged")
    document.getElementById("login").classList.remove("hide")

}