let $ = document;

let hotels = [
  {
    id: 1,
    Img: "../images/image1.jpg",
    classLists: "defultHeart",
    isLike: false,
    nightPrice: 36,
    title: "The Stuga",
    caption: "Book Unique Camping Experiences on Over 300,000 Campsites",
  },
  {
    id: 2,
    Img: "../images/image2.jpg",
    classLists: "defultHeart fullHeart",
    isLike: true,
    nightPrice: 36,
    title: "Tiny Cabin in the mountains",
    caption: "book unique camping Experiences on Over 300,000 Campsites",
  },
  {
    id: 3,
    Img: "../images/image3.jpg",
    classLists: "defultHeart",
    isLike: false,
    nightPrice: 36,
    title: "Dragonfly Tiny Cabin",
    caption: "Book Unique Camping Experiences on Over 300,000 Campsites",
  },
  {
    id: 4,
    Img: "../images/image4.jpg",
    classLists: "defultHeart",
    isLike: false,
    nightPrice: 36,
    title: "Trickle Creek Ranch",
    caption: "Book Unique Camping Experiences on Over 300,000 Campsites",
  },
  {
    id: 5,
    Img: "../images/image5.jpg",
    classLists: "defultHeart",
    isLike: false,
    nightPrice: 36,
    title: "The Hermitage Cabin",
    caption: "Book Unique Camping Experiences on Over 300,000 Campsites",
  },
  {
    id: 6,
    Img: "../images/image6.jpg",
    classLists: "defultHeart",
    isLike: false,
    nightPrice: 36,
    title: "Kindred Spirits Cabin",
    caption: "Book Unique Camping Experiences on Over 300,000 Campsites",
  },
  {
    id: 7,
    Img: "../images/image7.jpg",
    classLists: "defultHeart fullHeart",
    isLike: true,
    nightPrice: 36,
    title: "The Summit Cabin",
    caption: "Book Unique Camping Experiences on Over 300,000 Campsites",
  },
  {
    id: 8,
    Img: "../images/image8.jpg",
    classLists: "defultHeart",
    isLike: false,
    nightPrice: 36,
    title: "Luxury Tiny Beach Cabin",
    caption: "Book Unique Camping Experiences on Over 300,000 Campsites",
  },
  {
    id: 9,
    Img: "../images/image9.jpg",
    classLists: "defultHeart",
    isLike: false,
    nightPrice: 36,
    title: "Ninovan on the Shore",
    caption: "Book Unique Camping Experiences on Over 300,000 Campsites",
  },
  {
    id: 10,
    Img: "../images/image10.jpg",
    classLists: "defultHeart",
    isLike: false,
    nightPrice: 36,
    title: "Barrier island elevated tent",
    caption: "Book Unique Camping Experiences on Over 300,000 Campsites",
  },
  {
    id: 11,
    Img: "../images/image11.jpg",
    classLists: "defultHeart",
    isLike: false,
    nightPrice: 36,
    title: "The Tree House",
    caption: "Book Unique Camping Experiences on Over 300,000 Campsites",
  },
  {
    id: 12,
    Img: "../images/image12.jpg",
    classLists: "defultHeart",
    isLike: false,
    nightPrice: 36,
    title: "Red Lifeguard Stand",
    caption: "Book Unique Camping Experiences on Over 300,000 Campsites",
  },
];

const body = $.body;
const navBtn = $.querySelector(".nav__btn");
const navMenu = $.querySelector(".nav-menu");
const placeContiner = $.querySelector(".destinations__places");
const emailIcon = $.querySelector(".newsLetter__email_icon");
const formEmailIpt = $.querySelector(".newsLetter__ipt");
const btnScroll = $.querySelector(".footer___left__btn_scroll");
const placelike = $.querySelectorAll(".place__like_icon");
const menuLink = $.querySelectorAll(".menu__link ");

let isLike = false;
// placelike.forEach(like => {
//   like.addEventListener("click", () => {
//     if (!isLike) {
//       like.setAttribute("fill", "transparent");
//       like.setAttribute("stroke", "#e76f51");
//       isLike = true;
//     } else {
//       like.setAttribute("fill", "#e76f51");
//       like.setAttribute("stroke", "transparent");
//       isLike = false;
//     }
//   });
// });
let navOpen = false;
// .insertAdjacentHTML

hotels.forEach((hotel) => {
  placeContiner.insertAdjacentHTML(
    "beforeend",
    `<div class="place">
        <div class="place__banner">
           <img src="${hotel.Img}" alt="${hotel.title}" class="place__img" loading="lazy">
        <div class="place__like ${hotel.classLists}" onclick="likeFill(event , ${hotel.id})">
        <svg xmlns="http://www.w3.org/2000/svg" width="24.037" height="24.037" viewBox="0 0 24.037 24.037" fill="transparent" stroke="#e76f51" stroke-width="1.5">
            <path id="Path_955" data-name="Path 955" d="M15.822,8.979v.029H4V-2.1A5.915,5.915,0,0,1,9.912-7.841a5.913,5.913,0,0,1,5.849,5.049,5.912,5.912,0,0,1,.061,11.772Z" transform="translate(2.716 20.496) rotate(-45)" />
        </svg>
        </div>
        <div class="place__price">
           <p class="place__price-text">$${hotel.nightPrice} / night</p>
        </div>
        </div>
           <h3 class="place__title" onclick="removeWrap(event)">${hotel.title}</h3>
           <p class="place__caption">${hotel.caption}</p>
           <a href="#" class="btn place__link">Read More</a>
      </div>`
  );
});

function likeFill(event, id) {
  hotels.forEach((hotel) => {
    if (hotel.id === id) {
      if (event.target.tagName === "path") {
        event.target.parentElement.parentElement.classList.toggle("fullHeart");
        hotel.isLike = !hotel.isLike;
      } else if (event.target.tagName === "svg") {
        event.target.parentElement.classList.toggle("fullHeart");
        hotel.isLike = !hotel.isLike;
      }
    }
  });
}

navBtn.addEventListener("click", function () {
  if (navOpen) {
    navBtn.classList.remove("nav__btn--open");
    navBtn.classList.remove("nav-menu--open");
    navOpen = false;
  } else {
    navBtn.classList.add("nav__btn--open");
    navBtn.classList.add("nav-menu--open");
    navOpen = true;
  }
});

emailIcon.addEventListener("click", () => {
  (formEmailIpt.value = "") 
  formEmailIpt.focus();
});

btnScroll.addEventListener("click", () => {
  for (let i = 2900; i > 1; i--) {
    setTimeout(() => {
      window.scrollTo(0, i);
    }, 85);
  }
});
menuLink.forEach((menuItem) =>
  menuItem.addEventListener("click", () => {
    removeActives()
    menuItem.classList.add("menu__link-active");
  })
);

function removeActives() {
  menuLink.forEach((menuItem) => {
    menuItem.classList.remove("menu__link-active");
  });
}

const mobileMenuItem = $.querySelectorAll(".mobile-menu__link");

mobileMenuItem.forEach((mobileItem) => {
  mobileItem.addEventListener("click", () => {
    removeActiveMobileMenu();
    mobileItem.classList.add("mobile-menu__link-active");
  });
});

function removeActiveMobileMenu() {
  mobileMenuItem.forEach((mobileItem) => {
    mobileItem.classList.remove("mobile-menu__link-active");
  });
}