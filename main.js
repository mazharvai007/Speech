let msg = document.querySelector("#message");
let btn = document.querySelector("#interact");
let result = document.querySelector("#answer");

btn.addEventListener("click", function() {
    let command = msg.value;
    let reply = "";
    if (command.match("Hello")) {
        reply = "hello, there!";
    } else if (command.match("Sing for me")) {
        reply = "I'm singing a song.";
    } else if (command.match("What is your name?")) {
        reply = "My name is Mazhar";
    } else {
        reply = "I did not understand!";
    }

    result.innerHTML = reply;

    let speech = new SpeechSynthesisUtterance(reply);
    window.speechSynthesis.speak(speech);
});
