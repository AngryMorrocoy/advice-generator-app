const adviceSlipAPIUrl = 'https://api.adviceslip.com/advice';

const adviceIdSpan = document.querySelector('#adviceIdSpan');
const adviceTextParagraph = document.querySelector('#adviceTextParagraph');

const adviceDiceButton = document.querySelector('#rolAdviceDice');

function updateAdvice() {
  let req = new XMLHttpRequest();

  req.open('GET', adviceSlipAPIUrl + '?_=' + new Date().getTime());

  req.onreadystatechange = () => {
    if (req.readyState !== 4 || req.status !== 200) return;

    const responseBody = JSON.parse(req.responseText).slip;

    adviceIdSpan.textContent = responseBody.id;
    adviceTextParagraph.textContent = `"${responseBody.advice}"`;

    adviceDiceButton.classList.toggle('fetching');
    adviceDiceButton.disabled = false;
  };

  req.send();

  adviceDiceButton.classList.toggle('fetching');
  adviceDiceButton.disabled = true;
}

adviceDiceButton.addEventListener('click', updateAdvice);

updateAdvice();
