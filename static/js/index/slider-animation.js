const wrapper = document.querySelector('.rpsw');
const indicators = [...document.querySelectorAll('.rpsc-in button')];

let currentCard = 0; // Default 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        item.classList.add('active');
        indicators[currentCard].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        currentCard = i;
    })
})

function autoSlide() {
    wrapper.style.marginLeft = `-${100 * currentCard}%`;
    indicators.forEach((item, i) => {
        if (i === currentCard)
            item.classList.add('active');
        else
            item.classList.remove('active')
    })
    if (currentCard === 2)
        currentCard = 0
    else
        currentCard += 1;

}

let slider_val = setInterval(autoSlide, 3500);