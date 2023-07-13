const chatInput = document.querySelector(".chat-input textarea");
const senChatbtn = document.querySelector(".chat-input span");
const showToggler = document.querySelector(".ch-toggler");
const chatbox = document.querySelector(".chatbox");


const crateDialog = (message, className) =>{
    const dialog =  document.createElement("li");
    dialog.classList.add("msg", className);
    let chatContent = className === "out" ? `<p>${message}</p>` : `<span><img src="img/xx.png" alt=""></span><p>${message}</p>`
    dialog.innerHTML = chatContent;
    return dialog;
}
let userMessage;
const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage)return;
    chatbox.appendChild(crateDialog(userMessage, "out"));
}
senChatbtn.addEventListener("click", handleChat);

showToggler.addEventListener("click", () => document.body.classList.toggle("show-toggler"));