const btn = document.getElementById("enviar");

btn.addEventListener("click", handleEnviar);

function handleEnviar(evnt) {
  evnt.preventDefault();
  const input = document.getElementById("nome");
 
  if (input.value.length) handleProfile();
}

function handleProfile() {
  const form = document.forms;
  console.log(form[0][0].value);
  const nome = form[0][0].value;
  const data = fetch(`https://api.github.com/users/${nome}`);

  data
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      console.log(body);
      const resobj = body;
      const root = document.querySelector(".root");
      const img = document.querySelector("img");
      const h2 = document.querySelector("h2");

      img.src = resobj.avatar_url;
      h2.innerText = resobj.login;
      root.appendChild(img);
      root.appendChild(h2);
    });
}
