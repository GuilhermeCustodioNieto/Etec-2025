const button = document.querySelector(".button-submit");
button.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("https://viacep.com.br/ws/08470-410/json/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        alert("Erro interno, tente novamente mais tarde.");
      }

      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.complemento == "");

      document.getElementById("rua").innerHTML +=
        " " + (data.logradouro == "" ? "Sem dados" : data.logradouro);
      document.getElementById("bairro").innerHTML +=
        " " + (data.bairro == "" ? "Sem dados" : data.bairro);
      document.getElementById("cidade").innerHTML +=
        " " + (data.localidade == "" ? "Sem dados" : data.localidade);
      document.getElementById("numero").innerHTML +=
        " " + (data.complemento == "" ? "Sem dados" : data.complemento);
    })
    .catch((error) => {
      alert("Erro interno, tente novamente mais tarde.");
      console.log(error);
    });
});
