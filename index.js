//sapmle objects
let sample1 = {
  name: "Sample 1",
  price: 300,
  core: 0,
  access: document.querySelector("#sample1").onclick = () =>{
    tempo(0);
    }
};

let sample2 = {
  name: "Sample 2",
  price: 400,
  core: 0,
  access: document.querySelector("#sample2").onclick = () =>{
    tempo(1);
    }
};

let sample3 = {
  name: "Sample 3",
  price: 500,
  core: 0,
  access: document.querySelector("#sample3").onclick = () =>{ 
    tempo(2);  
  }
};

//conditional function calls
const tempo = (k) => {
  if(bigData[k].core != 0){alert(`already added bitch`);}
  if(bigData[k].core === 0){buy(k);}
}

let countIndex = 0;
let finalAmount = 0;
//filling out the props 
let bigData = [sample1, sample2, sample3];


//appending the cart
const buy = i => {
  countIndex++;
  finalAmount = finalAmount + bigData[i].price; 
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
  itemNo.innerHTML = `Quantity : ${bigData[i].core}`;
  pal.appendChild(itemNo);
  let itemPrice = document.createElement("div");
  itemPrice.innerHTML = `Amount : ${bigData[i].price}`;
  pal.appendChild(itemPrice);
  document.querySelector(".item-section").appendChild(pal);
  document.querySelector(".amount-int").innerHTML = finalAmount;
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
