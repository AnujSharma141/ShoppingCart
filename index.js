//sapmle objects
let sample1 = {
  name: "Sample 1",
  price: 300,
  core: 0,
  pic:'img/1.jpg',
  access: (document.querySelector("#sample1").onclick = () => {
    tempo(0);
  })  
};

let sample2 = {
  name: "Sample 2",
  price: 400,
  core: 0,
  pic:'img/2.jpg',
  access: (document.querySelector("#sample2").onclick = () => {
    tempo(1);
  })
};

let sample3 = {
  name: "Sample 3",
  price: 500,
  core: 0,
  pic:'img/3.jpg',
  access: (document.querySelector("#sample3").onclick = () => {
    tempo(2);
  })
};

//conditional function calls
const tempo = k => {
  if (bigData[k].core != 0) {
    document.querySelector(".warn-back").style.cssText =
      "opacity:1; display:flex; transition: 0.3s ease-out;";
    let warn = document.querySelector(".warn");
    warn.style.cssText = "transition:0.3s; animation:expand 1 0.3s;";
    warn.innerHTML = "Item has already been added to the cart.";
    setTimeout(function() {
      document.querySelector(".warn-back").style.cssText =
        "opacity:0; display:none; transition: 0.3s ease-out;";
    }, 2000);
  }
  if (bigData[k].core === 0) {
    buy(k);
  }
};

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
    " animation: jump 1 0.3s ; background:#b30000; transition:0.3s; ";
  cartValue.innerHTML = countIndex;
  bigData[i].core++;
  //asserted item
  let pal = document.createElement("div");
  pal.className = "asserted-items";
  //data-img
  let itemFace = document.createElement("img");
  itemFace.className = "item-img";
  itemFace.setAttribute("src",`${bigData[i].pic}`);
  pal.appendChild(itemFace);
  //data-name
  let itemName = document.createElement("div");
  itemName.className = "item-name-ap";
  itemName.innerHTML = bigData[i].name;
  pal.appendChild(itemName);  
  //data-price
  let itemPrice = document.createElement("div");
  itemPrice.innerHTML = `Amount : $${bigData[i].price}`;
  pal.appendChild(itemPrice);
  //data-qun
  let itemQun = document.createElement("div");
  itemQun.className = 'qun-main';
  let qunAdd = document.createElement("button");
  let qunNow = document.createElement("div");
  let qunRem = document.createElement("button");
  qunAdd.innerHTML = `<img class="funct-img" src="img/arr.png">`;
  qunAdd.className = 'funct-button';
  qunNow.innerHTML = bigData[i].core;
  qunNow.className = 'funct-button';
  qunRem.innerHTML = '<img class="funct-img" src="img/arr-b.png">';
  qunRem.className = 'funct-button';
  itemQun.appendChild(qunAdd);
  itemQun.appendChild(qunNow);
  itemQun.appendChild(qunRem);
  pal.appendChild(itemQun);
  qunAdd.onclick = function(){
    bigData[i].core++;
    qunNow.innerHTML = bigData[i].core;
    finalAmount = finalAmount + bigData[i].price;
    document.querySelector(".amount-int").innerHTML = finalAmount;
  };
  qunRem.onclick = function(){
    if(bigData[i].core>=1){
    bigData[i].core--;
    qunNow.innerHTML = bigData[i].core;
    finalAmount = finalAmount - bigData[i].price;
    document.querySelector(".amount-int").innerHTML = finalAmount;
  }
  if(bigData[i].core === 0)
  {
    qunRem.parentElement.parentElement.remove();
    countIndex--;
    cartValue.innerHTML = countIndex;
  }
  };
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
