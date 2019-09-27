let p = 0;
function add() {
  p++;
  document.getElementById("main").innerHTML = p;
}
function remove() {
  if (p > 0) {
    p--;
    document.getElementById("main").innerHTML = p;
  }
}
let k = 0;
function buy() {
  k = k + 1;
  let cartValue = document.getElementById("cart-value");
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
