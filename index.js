let k = 0;
let item1 = { name: "SAMPLE 1", price: 300 };
let item2 = { name: "SAMPLE 2", price: 400 };
//returning values
document.querySelector("#item1").innerHTML = item1.name;
document.querySelector("#item1-price").innerHTML = item1.price;
let itemName = document.querySelector("#item-p");
function buy() {
  k = k + 1;
  let cartValue = document.querySelector("#cart-value");
  cartValue.style.cssText =
    " display:flex; animation: jump 0.3s 1; background:#b30000; transition:0.3s; ";
  cartValue.innerHTML = k;
}
function windowOpen() {
  if (k > 0) {
    document.getElementById("window").style.cssText =
      "display:flex; transition:0.3s;";
  }
}
function windowClose() {
  document.getElementById("window").style.cssText =
    "display:none; transition:0.3s;";
}
