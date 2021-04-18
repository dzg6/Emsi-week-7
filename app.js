import { Donuts } from './js/donuts.js'
import { API } from './js/api.js'
// import Shop from shop
// import Orders from orders


let k = Donuts();
console.log(k)
// Shop()
// Orders()


// document.getElementById("discountRegTitle").innerHTML =
//             "<em>&nbsp;&nbsp;Dozen Discount</em>";

// document.querySelector('login').addEventListener('click', (e) => {
//     // const formData = new FormData(e.target);
//     e.preventDefault()
//   console.log(e.target)
//     // Now you can use formData.get('foo'), for example.
//     // Don't forget e.preventDefault() if you want to stop normal form .submission
//   });

document.getElementById("login").addEventListener("submit", login);
function login(e) {

    e.preventDefault();
    const formData = new FormData(e.target);
    let storeId = formData.get('storeId');
    document.getElementById("store").classList.remove("hide")
    document.getElementById("store").classList.add("logged")
    document.getElementById("login").classList.add("hide")
    console.log(storeId)
    let storeAPI = new API(storeId);
    // storeAPI.createDonut('Jelly', .99, 12)
    // storeAPI.addDonuts('Creme', 12);
    // storeAPI.placeOrder('Creme', 6)

    let data = storeAPI.getInventory();
    console.log(data)
    // storeAPI.createDonut()

}

document.getElementById("logout").addEventListener("submit", logout);
function logout(e) {

    e.preventDefault();
    document.getElementById("store").classList.add("hide")
    document.getElementById("store").classList.remove("logged")
    document.getElementById("login").classList.remove("hide")

}