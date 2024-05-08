const baneseimg = ['assets/img/carrossel.jpg', 'assets/img/carrossel2_banese.jpg'];
const mulviimg = ['assets/img/carrossel1_mulvi.jpg', 'assets/img/carrossel.jpg']

const imgs = document.querySelector(".container");
let img = document.querySelectorAll(".imagem");

let idx = 0;

function carrossel(){
  idx++;

  if(idx > img.length - 1){
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 1280}px)`;
}

setInterval(carrossel, 6000);




mulvi.addEventListener('click', ()=>{
  if (document.getElementById('imagem1').style.backgroundImage != "url('assets/img/carrossel1_mulvi.jpg')") { 
    document.getElementById('imagem1').style.backgroundImage = "url('assets/img/carrossel1_mulvi.jpg')";
    document.getElementById('imagem2').style.backgroundImage = "url('assets/img/banner-home.png')";
    document.getElementById('logo').style.backgroundImage = "url('assets/img/logo_mulvi.png')";  
    document.getElementById('chatbot').style.backgroundImage = "url('assets/img/chatbot_mulvi.png')"
  }
})

banese.addEventListener('click', ()=>{
  if (document.getElementById('imagem1').style.backgroundImage != "url('assets/img/carrossel.jpg')") { 
    document.getElementById('imagem1').style.backgroundImage = "url('assets/img/carrossel.jpg')";
    document.getElementById('imagem2').style.backgroundImage = "url('assets/img/carrossel2_banese.jpg')";
    document.getElementById('logo').style.backgroundImage = "url('assets/img/logo.png')";  
    document.getElementById('chatbot').style.backgroundImage = "url('assets/img/chatbot.png')"
  }
})

