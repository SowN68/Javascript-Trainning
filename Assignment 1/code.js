const list = document.querySelector('.card-list');
const card = document.querySelectorAll('.card');

function showCard(event) {
            var cardClicked = event.target;
            removeActive();
            cardClicked.parentElement.classList.add('active');
            
}
function removeActive() {
           card.forEach((card) => {
                       card.classList.remove('active');
           });
}
list.addEventListener('click', showCard)



