const newcreateCard = document.querySelector('.header-new-btn'),
  delcreateCard = document.querySelector('.header-del-btn'),
  removeCardPopup = document.querySelector('#close_card_box'),
  saveCard = document.querySelector('#save_card'),
  createBox = document.querySelector('.create-box'),
  question = document.querySelector('#question'),
  answer = document.querySelector('#answer'),
  flashcards = document.querySelector('.flashcards');
  let contentArray = localStorage.getItem('items') ?
  JSON.parse(localStorage.getItem('items')) : [];


const divMaker = (text) => {

  const flashcard  = document.createElement('div');
  const h2_question = document.createElement('h2'),
  h2_answer = document.createElement('h2');

  flashcard.className = 'flashcard';

  h2_question.setAttribute('style', 'border-top: 1px solid red; padding: 15px; margin-top: 30px;  ');
  h2_question.innerHTML = text.my_question; // 1 

  h2_answer.setAttribute('style', 'color: green; text-align: center; display: none;');
  h2_answer.innerHTML = text.my_answer; // 2

  flashcard.addEventListener('click', () => {
    if(h2_answer.style.display == 'none'){
      h2_answer.classList.add('animated','fadeIn');
      h2_answer.style.display = 'block';
    } else if (h2_answer.style.display == 'block') {
      h2_answer.style.display = 'none';
    }
  })

  flashcard.appendChild(h2_question);
  flashcard.appendChild(h2_answer);

  flashcards.appendChild(flashcard); // 3
}

contentArray.forEach(divMaker);

const addFlashcard = () => {


    let flashcard_info = {
      'my_question': question.value,
      'my_answer': answer.value
    }

  contentArray.push(flashcard_info);
  localStorage.setItem('items', JSON.stringify(contentArray));
  divMaker(contentArray[contentArray.length - 1]);
  question.textContent = '';
  answer.textContent = '';
}



const delFlashCards = () => {
  localStorage.clear();
  flashcards.innerHTML = '';
  contentArray = [];
}

const showCreateCardBox = () => {
  newcreateCard.addEventListener('click', () => {
    createBox.classList.add('animated', 'fadeIn');
    createBox.style.display = 'block'
  })
}

showCreateCardBox();

const hideCreateBox = () => {
  removeCardPopup.addEventListener('click', () => {
    createBox.style.display = 'none'
  })
}

hideCreateBox();

