"use strict";

var data = JSON.parse(cards);
console.log(data);
var goods_cards = document.querySelector('.goods_cards');
console.log(goods_cards);
data.forEach(function (cards) {
  goods_cards.insertAdjacentHTML('beforeend', "\n    <div class=\"card\">\n            <img src=\"".concat(cards.img, "\">\n            <div class=\"text\">\n                <h1 class=\"title\">").concat(cards.title, " </h1>\n                <p class=\"sub_text\">\n                 ").concat(cards.text, "\n                </p>\n                <p class=\"sub_text2\">\n                    $").concat(cards.price, "\n                </p>\n            </div>\n        </div>    \n    "));
});