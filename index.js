//sapmle objects
let sample1 = {
  name: "Sample 1",
  price: 300,
  access: document.querySelector("#sample1"),
  core: 0
};
let sample2 = {
  name: "Sample 2",
  price: 400,
  access: document.querySelector("#sample2"),
  core: 0
};
let sample3 = {
  name: "Sample 3",
  price: 500,
  access: document.querySelector("#sample3"),
  core: 0
};

let countIndex = 0;
let finalAmount = 0;
//filling out the props
let bigData = [sample1, sample2, sample3];

//appending the cart
const buy = i => {
  countIndex++;
  let cartValue = document.getElementById("cart-value");
  cartValue.style.cssText =
    " display:flex; animation: jump 0.3s 1; background:#b30000; transition:0.3s; ";
  cartValue.innerHTML = countIndex;
  bigData[i].core++;
  let pal = document.createElement("div");
  pal.className = "asserted-items";
  let itemName = document.createElement("div");
  itemName.innerHTML = bigData[i].name;
  pal.appendChild(itemName);
  let itemNo = document.createElement("div");
  itemNo.innerHTML = bigData[i].core;
  pal.appendChild(itemNo);
  let itemPrice = document.createElement("div");
  itemPrice.innerHTML = bigData[i].price;
  pal.appendChild(itemPrice);
  document.querySelector(".item-section").appendChild(pal);
  document.querySelector(".amount-int").innerHTML = finalAmount;
};

//buy function call
bigData[0].access.onclick = function() {
  finalAmount = finalAmount + bigData[0].price;
  if (bigData[0].core == 0) {
    buy(0);
  } else {
    bigData[0].core++;
  }
};
bigData[1].access.onclick = function() {
  finalAmount = finalAmount + bigData[1].price;
  if (bigData[1].core == 0) {
    buy(1);
  } else {
    bigData[1].core++;
  }
};
bigData[2].access.onclick = function() {
  finalAmount = finalAmount + bigData[2].price;
  if (bigData[2].core == 0) {
    buy(2);
  } else {
    bigData[2].core++;
  }
};

//cart window
const shell = document.getElementById("window");
const windowOpen = () => {
  if (countIndex > 0) {
    shell.style.cssText = "z-index:2; opacity:1; transition:0.6s;";
  }
};
const windowClose = () => {
  shell.style.cssText = "opacity:0; z-index:-2;  transition:0.6s;";
};

function generateOTP() {
  var digits = "0123456789";
  var otpLength = 6;
  var otp = "";
  for (let i = 1; i <= otpLength; i++) {
    var index = Math.floor(Math.random() * digits.length);
    otp = otp + digits[index];
  }
  console.log(otp);
}
