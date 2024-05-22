const baneseimg = ['assets/img/carrossel.jpg', 'assets/img/carrossel2_banese.jpg'];
const mulviimg = ['assets/img/carrossel1_mulvi.jpg', 'assets/img/carrossel.jpg'];

const imgs = document.querySelector(".container");
let img = document.querySelectorAll(".imagem");
var bot = document.getElementById('chatbot');
const chat = document.getElementById('chat');

let idx = 0;

function carrossel(){
  idx++;

  if(idx > img.length - 1){
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 1280}px)`;
}

setInterval(carrossel, 6000);


function closechat(){
  bot.style.display = 'block';
  chat.style.display = 'none';
};

//Resetar a conversa quando o usuario trocar de layout.
function removeChatMessages(){
  const messages = document.querySelectorAll('.chat.message, .chat.response');
  messages.forEach(message => message.remove());

  const greetings =
    `<div class="chat response">
      <img src="assets/img/chatbot.png">
      <div class="chat-bubble">
        <span>Olá usuário. <br>
          Como posso te ajudar?
        </span>
      </div>
      </div>`;
      
      messageBox.insertAdjacentHTML("beforeend", greetings);
      closechat();
};
    
    
mulvi.addEventListener('click', ()=>{
  if (document.getElementById('imagem1').style.backgroundImage != "url('assets/img/carrossel1_mulvi.jpg')") { 
    document.getElementById('imagem1').style.backgroundImage = "url('assets/img/carrossel1_mulvi.jpg')";
    document.getElementById('imagem2').style.backgroundImage = "url('assets/img/banner-home.png')";
    document.getElementById('logo').style.backgroundImage = "url('assets/img/logo_mulvi.png')";  
    document.getElementById('chatbot').style.backgroundImage = "url('assets/img/chatbot_mulvi.png')"
    removeChatMessages();
  }
})

banese.addEventListener('click', ()=>{
  if (document.getElementById('imagem1').style.backgroundImage != "url('assets/img/carrossel.jpg')") { 
    document.getElementById('imagem1').style.backgroundImage = "url('assets/img/carrossel.jpg')";
    document.getElementById('imagem2').style.backgroundImage = "url('assets/img/carrossel2_banese.jpg')";
    document.getElementById('logo').style.backgroundImage = "url('assets/img/logo.png')";  
    document.getElementById('chatbot').style.backgroundImage = "url('assets/img/chatbot.png')"
    removeChatMessages();
  }
})

bot.addEventListener('click', ()=>{
  bot.style.display = 'none';
  chat.style.display = 'block';
})

const returnbtn = document.getElementById('return');

returnbtn.addEventListener('click', ()=>{
  closechat();
})

const scrollToBottom = () => {
  const chatscroll = document.querySelector(".chatbot-wrapper");
  chatscroll.scrollTop = messageBox.scrollHeight;
};

const messageBar = document.querySelector(".bar-wrapper input");
const sendBtn = document.querySelector(".bar-wrapper button");
const messageBox = document.querySelector(".message-box");
const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': '8sR5m6wmUh5lwaQuxiMbOQ==twZWMjZqzgje4Yja'
  }
};

sendBtn.onclick = async function() {
  if(messageBar.value.length > 0){
    let message = 
    `<div class="chat message">
      <img style="border-radius: 50%;" src="assets/img/usuario.avif"> 
      <div class="chat-bubble">
      <span>
        ${messageBar.value}
      </span>
      </div>
    </div>`;
    
    messageBox.insertAdjacentHTML("beforeend", message);
    scrollToBottom(); // Adiciona rolagem após adicionar a mensagem do usuário

    const max_length = messageBar.value.length;
    console.log(max_length);
    const url = `https://api.api-ninjas.com/v1/loremipsum?max_length=${max_length}&start_with_lorem_ipsum=false`;
    messageBar.value = "";

    const loremipsum = await fetch(url, options);
    const data = await loremipsum.json();
    
    let response =
    `<div class="chat response">
      <img src="assets/img/chatbot.png">
      <div class="chat-bubble">
        <span>
          ${data.text}
        </span>
      </div>
    </div>`;

    setTimeout(() => {
      messageBox.insertAdjacentHTML("beforeend", response);
      scrollToBottom(); // Adiciona rolagem após adicionar a resposta do bot
    }, 100);
  }
};
