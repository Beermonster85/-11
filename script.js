const data = JSON.parse(cards);
console.log (data);
const goods_cards = document.querySelector('.goods_cards');
console.log (goods_cards);

data.forEach((cards) => {
   goods_cards.insertAdjacentHTML (
    'beforeend', 
    `
    <div class="card">
            <img src="${cards.img}">
            <div class="text">
                <h1 class="title">${cards.title} </h1>
                <p class="sub_text">
                 ${cards.text}
                </p>
                <p class="sub_text2">
                    $${cards.price}
                </p>
            </div>
        </div>    
    `
   )
});