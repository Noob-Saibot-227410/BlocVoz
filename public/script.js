const btnSalvar = document.getElementById("btnSalvar");
const texto = document.getElementById("texto");

btnSalvar.addEventListener("click", () => {
  fetch("/salvar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ texto: texto.innerHTML })
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
    })
    .catch(err => console.error(err));
});
