header{
  display: flex;
}

#logo{
  height: 200px;
  width: 290px;
  background-image: url(assets/img/logo.png);
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 124px;
  margin-bottom: 30px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.cabecalho{
  width: 100%;
}

.barra{
  display: flex;
  justify-content: start;
  border-bottom-width: 1px;
  border-top-width: 0px;
  border-right-width: 0px;
  border-left-width: 0px;
  border-style: solid;
  border-color: grey;
}

.barra, a{
  margin: 10px;
  margin-right: 50px;
  font-size: 20px;
}

.barra, input{
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  font-size: 15px;
  padding-left: 10px;
}

.servicos{
  display: flex;
  justify-content: left;
  font-weight: bold;
}

.servicos, button{
  background-color: white;
  border-color: lightgreen;
  border-width: 2px;
  border-radius: 4px;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  left: -125px;
  top: 22px;
  background-color: rgb(0, 103, 56);
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  min-width: 120px;
  z-index: 1;
  padding-top: 2px;
}

.mulvi-theme .dropdown-content{
  background-color: rgb(225, 230, 99);
}

.dropdown-content a {
  color: white;
  padding: 10px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: rgb(0, 51, 0);
  border-radius: 10px;
}

.mulvi-theme .dropdown-content a:hover {
  background-color: rgb(51, 51, 0);
}

.dropdown:hover .dropdown-content {
  display: block;
}
#navbar {
  border: 1px solid;
  border-radius: 40px;
  padding: 5px;
  padding-left: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 18px;
  background-color:green;
  transition: 0.3s;
  color: white;
  margin-right: 15.5vw;
}

#navbar:hover{
  background-color: #00360f;
  cursor: pointer;
}

.nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
}

.nav-links li a {
  color:white;
  text-decoration: none;
  margin-right: 20px;
}

.nav-links li a:hover{
  cursor: pointer;
  text-decoration: none;
}

.menu-toggle {
  display: none;
  cursor: pointer;
}

.carrossel{
  margin-left: 124px;
  overflow: hidden;
}

.carrossel, img{
  border-radius: 20px;
}

#imagem1{
  background-image: url(assets/img/carrossel.jpg);
  width: 1280px;
  height: 475px;
  background-size: cover;
}

#imagem2{
  background-image: url(assets/img/carrossel2_banese.jpg);
  width: 1280px;
  height: 475px;
  background-size: cover;
}

.container{
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(0);
  width: 2560px;
  height: 475px;
}

.opcoes{
  margin-left: 58px;
}

#chatbot{
  position: fixed;
  bottom: 10px;
  right: 110px;
  z-index: 1000;
  height: 100px;
  width: 100px;
  background-image: url(assets/img/chatbot.png);
  background-repeat: no-repeat;
  border-radius: 50%;
  background-size: cover;
  transition: 0.2s;
}

#chatbot:hover{
  cursor: pointer;
}

/* Estilos gerais do chat */
#chat {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 110px;
  z-index: 1000;
  width: 320px;
  height: 600px;
  border-radius: 5px;
  background-image: none !important;
  box-shadow: 0px 4px 16px rgba(165, 163, 174, 0.45);
}

/* Estilo para Mulvi */
.mulvi-theme .chatbot-wrapper{
  background-color: white;
}

.mulvi-theme .chatbot-title {
  background-color: rgb(15, 24, 32);

}

.mulvi-theme .profile {
  background-image: url('assets/img/chatbot_mulvi.png');
}

.mulvi-theme .messagebar button{
  color:rgb(225, 230, 99) !important;
}

.mulvi-theme .chat-bubble{
  background-color: rgb(225, 230, 99);
}

.mulvi-theme .chat-bubble::after{
  border-right-color: rgb(225, 230, 99);

}

.mulvi-theme .chat-bubble-user{
  background-color: rgb(225, 230, 99);
}

.mulvi-theme .chat-bubble-user::after{
  border-left-color: rgb(225, 230, 99);

}
 
*{
  padding: 0;
  margin: 0;
  font-family: Poppins;
  box-sizing: border-box;
}

.chatbot-title{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #256136;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

#return{
  cursor: pointer;
}

.chatbot-title p{
  color: white;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

.profile{
  width: 35px;
  height: 35px;
  background-image: url(assets/img/chatbot.png);
  background-size: cover;
}

.chatbot-wrapper{
  width: 100%;
  height: 100vh;
  max-height: 90%;
  background-color: #eaffeb;
  overflow: scroll;
  z-index: 1000;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

 
/* Handle */
::-webkit-scrollbar-thumb {
  background: lightgreen; 
  border-radius: 10px;
}

.mulvi-theme ::-webkit-scrollbar-thumb{
  background: rgb(178, 178, 178);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: green; 
}

.mulvi-theme ::-webkit-scrollbar-thumb:hover{
  background: rgb(130, 130, 130);
}

.chat{
  display: flex;
  gap: 20px;
  padding: 25px;
  font-size: 15px;
  font-weight: 300;
}

.chat img{
  width: 35px;
  height: 35px;
}

.chat.message{
  justify-content: right;
}


.chat-bubble{
  position: relative;
  background-color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 10px;
  max-width: 190px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}

.chat-bubble, span{
  font-size: 14px;
}

.chat-bubble-user, span{
  font-size: 14px;
}

.chat-bubble-user{
  position: relative;
  background-color: white;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 10px;
  max-width: 190px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}

/* Ponta do balao de fala*/
.chat-bubble::after{
  content: '';
  position: absolute;
  left: 30px;
	top: 21.5px;
	width: 0;
	height: 0;
	border: 15px solid transparent;
	border-right-color: #ffffff;
	border-left: 0;
	border-top: 0;
	margin-top: -21.5px;
	margin-left: -43px;
}

.chat-bubble-user::after{
  content: '';
  position: absolute;
  right: 30px;
  top: 21.5px;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-left-color: #ffffff;
  border-right: 0;
  border-top: 0;
  margin-top: -21.5px;
  margin-right: -43px;
}

.messagebar{
  position: absolute;
  bottom: 0;
  height: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: first baseline;
  border-top: 1px solid black;
  background-color: white;
}

.messagebar .bar-wrapper{
  background-color: #f8f8f8;
  border-radius: 5px;
  width: 60vw;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px -1px 4px rgba(165, 163, 174, 0.3);
}

.bar-wrapper input{
  width: 100%;
  padding: 5px;
  border: none;
  outline: none;
  font-size: 14px;
  background: none;
  color: #504141;
}

.bar-wrapper input::placeholder{
  color: #d9d9d9;
}

.messagebar button, #return{
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: green;
  cursor: pointer;
}
