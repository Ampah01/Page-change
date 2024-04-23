const tabEl = document.querySelector('.taps');
const btnsEl = document.querySelectorAll('.button');
const articlesEl = document.querySelectorAll('.content')


/* Targets where has been clicked */
tabEl.addEventListener('click',(event)=>{
  const buttonId = event.target.dataset.id;

  if (buttonId) {
    btnsEl.forEach((button)=>{
      /* REMOVE ALL BUTTONS WITH THE CLASSLIST OF LIVE */
      button.classList.remove('live')
    });

      /* ADD THE CLASS TO THE ONE THE USER CLICKED */
    event.target.classList.add('live');

    articlesEl.forEach((article)=>{
       /* REMOVE ALL ARTICLES WITH THE CLASSLIST OF LIVE */
      article.classList.remove('live');
      });
      
      const element = document.getElementById(buttonId);

      element.classList.add('live')
  }
});