function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("img");

  let data = new Date();
  let hora = data.getHours();
  //let hora = 20;
  let min = data.getMinutes();

  msg.innerHTML = `Agora são ${hora}:${min} horas.`;

  if (hora >= 0 && hora < 12) {
    img.src = "manha.png";
    document.body.style.backgroundColor = "#C3A257";
    } else if (hora >= 12 && hora <= 18) {
      img.src = "tarde.png";
      document.body.style.backgroundColor = "#7BB3E2";
      } else {
        img.src = "noite.png";
        document.body.style.backgroundColor = "#086670";
  }
}
