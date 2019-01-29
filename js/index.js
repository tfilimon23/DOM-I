const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM \n Is \n Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street\n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let circlepic = document.getElementById("cta-img");
circlepic.setAttribute('src', siteContent["cta"]["img-src"])

let middlepic = document.getElementById("middle-img");
middlepic.setAttribute('src', siteContent["main-content"]["middle-img-src"])



const aTag = document.querySelectorAll('a');

aTag[0].textContent = siteContent["nav"]["nav-item-1"];
aTag[1].textContent = siteContent["nav"]["nav-item-2"];
aTag[2].textContent = siteContent["nav"]["nav-item-3"];
aTag[3].textContent = siteContent["nav"]["nav-item-4"];
aTag[4].textContent = siteContent["nav"]["nav-item-5"];
aTag[5].textContent = siteContent["nav"]["nav-item-6"];


const navBar = document.querySelector("nav");

const newA1 = document.createElement("a");
newA1.textContent = "Welcome";
navBar.prepend(newA1);

const newA2 = document.createElement("a");
newA2.textContent = "Give";
navBar.appendChild(newA2);

aTag.forEach (element => {
  element.style.color = "green"; 
});


const firstHeader = document.querySelector("h1");
firstHeader.textContent = siteContent["cta"]["h1"];

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];



const h4Tag = document.getElementsByTagName('h4');

h4Tag[0].textContent = siteContent["main-content"]["features-h4"];
h4Tag[1].textContent = siteContent["main-content"]["about-h4"];
h4Tag[2].textContent = siteContent["main-content"]["services-h4"];
h4Tag[3].textContent = siteContent["main-content"]["product-h4"];
h4Tag[4].textContent = siteContent["main-content"]["vision-h4"];
h4Tag[5].textContent = siteContent["contact"]["contact-h4"];


const pTag = document.getElementsByTagName('p');

pTag[0].textContent = siteContent["main-content"]["features-content"];
pTag[1].textContent = siteContent["main-content"]["about-content"];
pTag[2].textContent = siteContent["main-content"]["services-content"];
pTag[3].textContent = siteContent["main-content"]["product-content"];
pTag[4].textContent = siteContent["main-content"]["vision-content"];
pTag[5].textContent = siteContent["contact"]["address"];
pTag[6].textContent = siteContent["contact"]["phone"];
pTag[7].textContent = siteContent["contact"]["email"];
pTag[8].textContent = siteContent["footer"]["copyright"];













