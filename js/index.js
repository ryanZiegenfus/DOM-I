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
    "h1": "DOM Is Awesome",
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
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navButtons = document.querySelectorAll("a");
  navButtons.forEach((currentValue, index) => currentValue.textContent = siteContent.nav[`nav-item-${index + 1}`]);



let DOMbr = siteContent.cta.h1.split(" ").map(element => {
  let spanElement = document.createElement('span');
  spanElement.textContent = element;
  return spanElement;
})

let introH1 = document.querySelector(".cta-text h1");

console.log(DOMbr)
DOMbr.forEach((element) => introH1.append(element));

document.querySelectorAll('span').forEach(element => element.style.display = 'block');

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;

let mainArray = ['features', 'about', 'services', 'product', 'vision'];

let mainH4 = document.querySelectorAll('.text-content h4');
mainH4.forEach((currentValue, index) => currentValue.textContent = siteContent["main-content"][`${mainArray[index]}-h4`]);

let mainp = document.querySelectorAll('.text-content p');
mainp.forEach((currentValue, index) => currentValue.textContent = siteContent["main-content"][`${mainArray[index]}-content`]);

let midImg = document.querySelector('#middle-img');
midImg.src = siteContent["main-content"]["middle-img-src"];

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact["contact-h4"];

let contactArray = ['address', 'phone', 'email'];

let contactp = document.querySelectorAll('.contact p');
contactp.forEach((currentValue, index) => currentValue.textContent = siteContent.contact[`${contactArray[index]}`]);
contactp[0].style.width = '20%';

let footerp = document.querySelector('footer p');
footerp.textContent = siteContent.footer.copyright;

navButtons.forEach((element) => element.style.color = "green");

let firsta = document.createElement('a');
firsta.textContent = 'Home';
firsta.style.color = 'green';

let lasta = document.createElement('a');
lasta.textContent = 'Subscribe';
lasta.style.color = 'green';

let navBar = document.querySelector('nav');
navBar.prepend(firsta);
navBar.appendChild(lasta);

