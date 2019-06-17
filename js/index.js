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
    "address" : "123 Way 456 Street<br>Somewhere, USA",
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

let nav = document.getElementsByTagName('nav').item(0);
let count = 1;
for (let i = 0; i < nav.children.length; i++) {
  nav.children[i].className = 'nav-item-' + count.toString();
  nav.children[i].textContent = siteContent.nav['nav-item-' + count.toString()];
  count++;
}

let headerContent = document.getElementsByClassName('cta').item(0);

for (let i = 0; i < headerContent.children.length; i++) {
  if (headerContent.children[i].className === 'cta-text') {
    headerContent.children[i].children[0].textContent = siteContent.cta.h1;
    headerContent.children[i].children[1].textContent = siteContent.cta.button;
  } else if (headerContent.children[i].id === 'cta-img') {
    headerContent.children[i].src = "img/header-img.png"
  }
}

let mainContent = document.getElementsByClassName('main-content').item(0);

for (let i = 0; i < mainContent.children.length; i++) {
  if (mainContent.children[i].className === 'top-content') {
      mainContent.children[i].children[0].children[0].textContent = siteContent["main-content"]["features-h4"]
      mainContent.children[i].children[0].children[1].textContent = siteContent["main-content"]["features-content"]

      mainContent.children[i].children[1].children[0].textContent = siteContent["main-content"]["about-h4"]
      mainContent.children[i].children[1].children[1].textContent = siteContent["main-content"]["about-content"]
   } 
   if (mainContent.children[i].className === 'middle-img') {
     mainContent.children[i].src = siteContent["main-content"]["middle-img-src"];
   }
   if (mainContent.children[i].className === 'bottom-content') {
     mainContent.children[i].children[0].children[0].textContent = siteContent["main-content"]["services-h4"];
     mainContent.children[i].children[0].children[1].textContent = siteContent["main-content"]["services-content"];

     mainContent.children[i].children[1].children[0].textContent = siteContent["main-content"]["product-h4"];
     mainContent.children[i].children[1].children[1].textContent = siteContent["main-content"]["product-content"];

     mainContent.children[i].children[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
     mainContent.children[i].children[2].children[1].textContent = siteContent["main-content"]["vision-content"];
   }
}

let contact = document.getElementsByClassName('contact').item(0);
let arr = [];
for (let key in siteContent.contact) {
  arr.push(siteContent.contact[key])
}
for (let i = 0; i < contact.children.length; i++) {
  contact.children[i].innerHTML = arr[i];
}

let copyright = document.getElementsByTagName('footer').item(0);
copyright.children[0].textContent = siteContent.footer.copyright