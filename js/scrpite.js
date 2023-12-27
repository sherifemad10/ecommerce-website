let wome = document.querySelector(".wome");
let womens = document.querySelector(".womens");
wome.onmouseover = function () {
    womens.classList.add("active");
}
womens.onmousemove = function () {
    womens.classList.add("active");
}
womens.onmouseout = function () {
    womens.classList.remove("active");
}
//////////////////////////////////////////

// menu
let menu = document.getElementById("menu");
let close1 = document.getElementById("close1");
let nav1 = document.querySelector(".nav1")

menu.onclick = function () {
    nav1.classList.add("appear");
   menu.style.display="none";
   close1.style.display="flex";
}


close1.onclick = function () {
    nav1.classList.remove("appear");
    close1.style.display="none";
    menu.style.display="flex";

}
///////////////////////////////////////////
let sign2 = document.querySelectorAll(".sign2");
let links = document.getElementById("links");
let user = document.getElementById("user");
let logout = document.getElementById("logout");

let username = localStorage.setItem ("username");
if (username) {
    sign2.remove()
    links.style.display="block";
    user.innerHTML = username;
}

logout.addEventListener("click", function () {
    localStorage.clear();
    setTimeout(() => {
        window.location.href="signup.html";
      } , 1500)
})
//////////////////////////////////////////////

let asus = document.getElementById("asus");

 function asuslabtop0() {
 window.location.href = "../prodect/asus.html"
};

let iphone = document.getElementById("iphone");

 function iphone1() {
    window.location= "../prodect/iphone.html"

 };

 let airpods = document.getElementById("airpods");

 function headphone2() {
    window.location.href= "../prodect/headphone.html"
};

function strike3() {
    window.location.href= "../prodect/strike.html"
};

let sweatshirt = document.getElementById("sweatshirt");
 function sweatshirt4() {
    window.location.href ="../prodect/sweatshirt.html"
};

let oversize = document.getElementById("oversize");
 function oversize5() {
    window.location.href ="../prodect/overside.html"
};

// let polo = document.getElementById("polo");
 function polo6() {
    window.location.href ="../prodect/polo.html"
};

// let woven = document.getElementById("woven");
 function woven7() {
    window.location.href ="../prodect/woven.html"
};

// let longsleeve = document.getElementById("longsleeve");
 function longsleeve8() {
    window.location.href ="../prodect/longsleeve.html"
};

// let sole = document.getElementById("sole");
 function sole9() {
    window.location.href ="../prodect/solesneakers.html"
};

// let lace = document.getElementById("lace");
 function lace10() {
    window.location.href ="../prodect/laceupshoes.html"
};

// let round = document.getElementById("round");
 function round11() {
    window.location.href ="../prodect/roundsneaker.html"
};

// let gloves = document.getElementById("gloves");
 function gloves12() {
    window.location.href ="../prodect/glovesforgym.html"
};

// let suit = document.getElementById("suit");
 function suit13() {
    window.location.href ="../prodect/trainingsuit.html"
};

// let adidas = document.getElementById("adidas");
 function adidas14() {
    window.location.href ="../prodect/ADIDASPRIMEBLUE.html"
};

// let dell = document.getElementById("dell");
function dell15() {
    window.location.href ="../prodect/DELL.html"
};

// let tv = document.getElementById("tv");
function tv16() {
    window.location.href ="../prodect/unionairescreen.html"
};

// let usb = document.getElementById("usb");
function usb17() {
    window.location.href ="../prodect/cable.html"
};

// let sweatshirt2 = document.getElementById("sweatshirt2");
function sweatshirt18() {
    window.location.href ="../prodect/Sweatshirt1.html"
};

// let american = document.getElementById("american");
function american19() {
    window.location.href ="../prodect/sweatamerican.html"
};

// let Oxford = document.getElementById("Oxford");
function Oxford20() {
    window.location.href ="../prodect/oxford.html"
};

// let Hoodie = document.getElementById("Hoodie");
function Hoodie21() {
    window.location.href ="../prodect/Hoodie.html"
};








/////////////////////////////////////////////////////////////
let elect = document.querySelector(".card-big");
let prodectcart = document.getElementById("prodect-cart");


let prodect = [

{
    id: 1,
    tittle: "Asus Labtop",
    description: "Asus ROG strix G513RC-HN007W Laptop, AMD Ryzen R7-6800H, 15...",
    price: 2000,
    Image: "img/products/asus.png"

},
{
    id: 2,
    tittle: "iPhone 13",
    description: "New Apple iPhone 13 with FaceTime (128GB) - Starlight",
    price: 1100,
    Image: "img/products/iphone (1).png"

},
{
    id: 3,
    tittle: "Headphone",
    description: "Apple AirPods Pro (2nd Gen) Wireless Earbuds, Up to 2X More",
    price: 200,
    Image: "img/products/handfree.png"

}
]

function electricprodict() {
    let prodects = prodect.map((items) =>{
        return `
        <div >
  <i class="fa-regular fa-heart" id="love"></i>
  <div class="prodect-img">
 <img src="${items.Image}" alt="electronic1" class="img-fluid">
</div>
<div class="prodect-text">
 <h3>${items.tittle}</h3>
 <p>${items.description}</p>
  <h4 id="price"><span>price : </span>$${items.price}</h4>
  <!-- cart -->
  <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
  <lord-icon id="prodect-cart"
 src="https://cdn.lordicon.com/hyhnpiza.json"
 trigger="hover"
 colors="primary:#121331"
 style="width:40px;height:40px">
 </lord-icon>
<!-- //cart -->
</div>
</div>
        `;
    })
    elect.innerHTML = prodects;
}
electricprodict()


function checkuser() {
    if (localStorage === "email") {
        Window.location.href = "../card.html"
        console.log(("add"))
    }else{
        Window.alert("please login first");
    }
}

function addtocard(id) {
    let chooseitem = prodect.find((items) => items.id === id);
     prodectcart.innerHTML += prodect;
     console.log("sherif")
}

// ///////////////////

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }