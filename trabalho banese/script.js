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

var bot = document.getElementById('chatbot');
const chat = document.getElementById('chat');

bot.addEventListener('click', ()=>{
  bot.style.display = 'none';
  chat.style.display = 'block';
})

//chat.addEventListener('click', ()=>{
//  bot.style.display = 'block';
//  chat.style.display = 'none';
//})

const messageBar = document.querySelector(".bar-wrapper input");
const sendBtn = document.querySelector(".bar-wrapper button");
const messageBox = document.querySelector(".message-box");

sendBtn.onclick = function() {
  if(messageBar.value.length > 0){
    let message = 
    `<div class="chat message">
     <img style="border-radius: 50%;" src="assets/img/usuario.avif"> 
     <span>${messageBar.value}
     </span></div>`;

    messageBox.insertAdjacentHTML("beforeend", message);
    messageBar.value = "";

    let response =
    `<div class="chat response">
    <img src="assets/img/chatbot.png">
    <span>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore.
    </span>
    </div>`

    setTimeout(() => {
      messageBox.insertAdjacentHTML("beforeend", response);
    }, 600);
  }
}
