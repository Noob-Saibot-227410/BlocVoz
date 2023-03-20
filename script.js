window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const texto = document.querySelector('#texto');
texto.appendChild(p);

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.textContent = transcript;
});

recognition.addEventListener('end', recognition.start);

recognition.start();

const btnSalvar = document.querySelector('#btnSalvar');
btnSalvar.addEventListener('click', () => {
  const text = texto.textContent;
  fetch('/salvar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text })
  })
  .then(response => response.json())
  .then(data => {
    alert('Texto salvo com sucesso!');
  })
  .catch(error => {
    alert('Ocorreu um erro ao salvar o texto: ' + error.message);
  });
});
