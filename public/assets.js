// const translateButton = document.querySelector('#translate-button');
function googleTranslateApi(text, { to: targetLang }) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${text}`;
  
  return fetch(url, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => data[0][0][0])
  .catch(error => {
    console.error('Error while calling Google Translate API:', error);
    throw error;
  });
}




const apiKey = 'AIzaSyASOO4K-xPtQLyy2YyrfrwFZHT5kKtbtvI';
const url = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyASOO4K-xPtQLyy2YyrfrwFZHT5kKtbtvI'; 




const translateButton = document.querySelector('#translate-button');
translateButton.addEventListener('click', function() {
  const contentElement = document.querySelector('.main-content');
  const content = contentElement.textContent;
  
  const lang = document.documentElement.lang;
  const targetLang = lang === 'en' ? 'ro' : 'en';
  
  googleTranslateApi(content, { to: targetLang })
    .then(function(translatedText) {
      // Actualizează limba site-ului
      document.documentElement.lang = targetLang;

      // Tradu textul în limba țintă
      contentElement.textContent = translatedText;
    })
    .catch(function(err) {
      console.error(err);
    });
});


