const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section");
const allbtn = document.querySelector(".allbtn");
const breakfastbtn = document.querySelector(".breakfastbtn");
const lunchbtn = document.querySelector(".lunchbtn");
const shakesbtn = document.querySelector(".shakesbtn");

window.onload = () => {
  displayMenuItems(menu);
  allbtn.style.backgroundColor = "gold";
};

let displayMenuItems = (menuItems) => {
  allbtn.style.backgroundColor = "gold";
  breakfastbtn.style.backgroundColor = "transparent";
  lunchbtn.style.backgroundColor = "transparent";
  shakesbtn.style.backgroundColor = "transparent";
  let displayMenu = menuItems.map((item) => {
    return `<div class="item" key=${item.id}>
        <div class="img"><img src=${item.img}></div>
        <div class="content">
            <div class="title">${item.title}<span class="price">$${item.price}</span></div>
            <div class="underline"></div>
            <div class="detail">${item.desc}</div>
        </div>
    </div>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};

let displayButton = (category) => {
    allbtn.style.backgroundColor = "transparent";
  let displayCategory = menu.map((item) => {
    if (item.category === category) {
      return `<div class="item" key=${item.id}>
        <div class="img"><img src=${item.img}></div>
        <div class="content">
            <div class="title">${item.title}<span class="price">$${item.price}</span></div>
            <div class="underline"></div>
            <div class="detail">${item.desc}</div>
        </div>
    </div>`;
    }
  });
  displayCategory = displayCategory.join("");
  sectionCenter.innerHTML = displayCategory;
};

breakfastbtn.onclick = () => {
  displayButton("breakfast");
  breakfastbtn.style.backgroundColor = "gold";
  lunchbtn.style.backgroundColor = "transparent";
  shakesbtn.style.backgroundColor = "transparent";
};

allbtn.onclick = () => {
  displayMenuItems(menu);
};

lunchbtn.onclick = () => {
  displayButton("lunch");
  lunchbtn.style.backgroundColor = "gold";
  shakesbtn.style.backgroundColor = "transparent";
  breakfastbtn.style.backgroundColor = "transparent";
};

shakesbtn.onclick = () => {
  displayButton("shakes");
  shakesbtn.style.backgroundColor = "gold";
  lunchbtn.style.backgroundColor = "transparent";
  breakfastbtn.style.backgroundColor = "transparent";
};
