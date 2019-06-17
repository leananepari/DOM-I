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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.getElementsByTagName('nav').item(0);
let count = 1;
for (let i = 0; i < nav.children.length; i++) {
  nav.children[i].className = 'nav-item-' + count.toString();
  nav.children[i].textContent = siteContent.nav['nav-item-' + count.toString()];
  count++;
}
// nav.children[0].textContent = "hello"
// console.log(nav)

let headerContent = document.getElementsByClassName('cta').item(0);
// console.log(headerContent.children[0]);
// let h1 = headerContent.children[0];
// let tag = h1.getElementsByTagName('h1');
console.log(headerContent, ' HI')
for (let i = 0; i < headerContent.children.length; i++) {
  // console.log('Child', headerContent.children[i]);
  if (headerContent.children[i].className === 'cta-text') {
    headerContent.children[i].children[0].textContent = siteContent.cta.h1;
    headerContent.children[i].children[1].textContent = siteContent.cta.button;
  } else if (headerContent.children[i].id === 'cta-img') {
    headerContent.children[i].src = "img/header-img.png"
  }
}
// tag.textContent = 'hallo'
// h1.textContent = siteContent.cta.h1;
// console.log(headerContent.getElementsByTagName('h1').textContent = siteContent.cta.h1)
// .textContent = siteContent.cta.h1;