let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  },
};

let bodys = document.querySelector("body");
const productAction = document.querySelectorAll(".product__hover li");
const productActions = document.querySelectorAll(".product__hover li a");
if (isMobile.any()) {
  bodys.classList.add("touch");
  productActions.forEach((item) => {
    item.style.height = "40px";
    item.style.width = "40px";
    item.style.lineHeight = "40px";
    item.style.fontSize = 14 + "px";
  });
  productAction.forEach((item) => {
    item.classList.add("tel");
  });
} else {
  bodys.classList.add("mouse");
}
