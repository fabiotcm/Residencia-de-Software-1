//Tipo = Ficar trocando entre banese e mulvi pra mudar a imagem de quem está falando no chat.
const baneseimg = "assets/img/chatbot.png";
const mulviimg = "assets/img/chatbot_mulvi.png";
var tipo = baneseimg;

const imgs = document.querySelector(".container");
let img = document.querySelectorAll(".imagem");
var bot = document.getElementById('chatbot');
const chat = document.getElementById('chat');


//Container que fica mudando de imagem sozinho
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
      <img src=${tipo}>
      <div class="chat-bubble">
        <span>Olá usuário. <br>
          Como posso te ajudar?
        </span>
      </div>
      </div>`;
      
      messageBox.insertAdjacentHTML("beforeend", greetings);
      closechat();
};
    
const navbar = document.getElementById('navbar');
 
//Mudar o layout da pagina para o estilo mulvi
mulvi.addEventListener('click', ()=>{
  if (document.getElementById('imagem1').style.backgroundImage != "url('assets/img/carrossel1_mulvi.jpg')") { 
    document.getElementById('imagem1').style.backgroundImage = "url('assets/img/carrossel1_mulvi.jpg')";
    document.getElementById('imagem2').style.backgroundImage = "url('assets/img/banner-home.png')";
    document.getElementById('logo').style.backgroundImage = "url('assets/img/logo_mulvi.png')";  
    document.getElementById('chatbot').style.backgroundImage = "url('assets/img/chatbot_mulvi.png')"
    navbar.style.backgroundColor = '#e1e663';
    
    // Alterar classes
    navbar.classList.add('mulvi-theme');
    chat.classList.add('mulvi-theme');
    tipo = mulviimg;
    removeChatMessages();
  }
})

//Mudar o layout da pagina para o estilo banese
banese.addEventListener('click', ()=>{
  if (document.getElementById('imagem1').style.backgroundImage != "url('assets/img/carrossel.jpg')") { 
    document.getElementById('imagem1').style.backgroundImage = "url('assets/img/carrossel.jpg')";
    document.getElementById('imagem2').style.backgroundImage = "url('assets/img/carrossel2_banese.jpg')";
    document.getElementById('logo').style.backgroundImage = "url('assets/img/logo.png')";  
    document.getElementById('chatbot').style.backgroundImage = "url('assets/img/chatbot.png')"
    navbar.style.backgroundColor = '#006738';

    // Alterar classes
    navbar.classList.remove('mulvi-theme');
    chat.classList.remove('mulvi-theme');
    tipo = baneseimg;
    
    removeChatMessages();
  }
})

//Transformar o ícone do bot no chat
bot.addEventListener('click', ()=>{
  bot.style.display = 'none';
  chat.style.display = 'block';
})


//Botao para minimizar o chat e transformar de volta no icone
const returnbtn = document.getElementById('return');
returnbtn.addEventListener('click', ()=>{
  closechat();
})

//Autoscroll do chat toda vez que uma mensagem é enviada
const scrollToBottom = () => {
  const chatscroll = document.querySelector(".chatbot-wrapper");
  chatscroll.scrollTop = messageBox.scrollHeight;
};


const messageBar = document.querySelector(".bar-wrapper input");
const sendBtn = document.querySelector(".bar-wrapper button");
const messageBox = document.querySelector(".message-box");
//Parametros da API
const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': '8sR5m6wmUh5lwaQuxiMbOQ==twZWMjZqzgje4Yja'
  }
};

//Botao para enviar a mensagem.
sendBtn.onclick = async function() {
  if(messageBar.value.length > 0){
    let message = 
    `<div class="chat message">
    <div class="chat-bubble-user">
      <span>
        ${messageBar.value}
      </span>
    </div>
    <img style="border-radius: 50%;" src="assets/img/usuario.avif"> 
    </div>`;
    
    messageBox.insertAdjacentHTML("beforeend", message);
    scrollToBottom(); // Adiciona rolagem após adicionar a mensagem do usuário

    //Deixar a mensagem Lorem Ipsum com a quantidade de caracteres igual ao tamanho da mensagem enviada pelo usuário
    const max_length = messageBar.value.length;
    const url = `https://api.api-ninjas.com/v1/loremipsum?max_length=${max_length}&start_with_lorem_ipsum=false`;
    
    messageBar.value = ""; //Apagar a barra de mensagem após o envio

    //Capturando a resposta da API e adicionando-a na mensagem
    const loremipsum = await fetch(url, options);
    const data = await loremipsum.json();
    
    let response =
    `<div class="chat response">
      <img src=${tipo}>
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
