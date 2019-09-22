var params = {},
    watson = 'Watson',
    context;

function userMessage(message) {

    params.text = message;
    if (context) {
        params.context = context;
    }
    var xhr = new XMLHttpRequest();
    var uri = '/api/watson';
    xhr.open('POST', uri, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        // Verify if there is a success code response and some text was sent
        if (xhr.status === 200 && xhr.responseText) {
            var response = JSON.parse(xhr.responseText);
            text = response.output.text; // Only display the first response
            context = response.context; // Store the context for next round of questions

            console.log("Resposta do Watson:", JSON.stringify(response));
                var intencao = "teste";
            // Verifica se há alguma intenção na resposta do watson
            if (Object.keys(response.intents).length) {
                console.log(Object.keys(response.intents).length);
                intencao = response.intents[0].intent;
                console.log(intencao + " 01");
            }

            for (var txt in text) {
                displayMessage(text[txt], watson, intencao);
            }
        }
        else {
            console.error('Server error for Conversation. Return status of: ', xhr.statusText);
            displayMessage("Putz, deu um tilt aqui. Você pode tentar novamente.", watson);
        }
    };
    xhr.onerror = function () {
        console.error('Network error trying to send message!');
        displayMessage("Ops, acho que meu cérebro está offline. Espera um minutinho para continuarmos por favor.", watson);
    };
    console.log(JSON.stringify(params));
    xhr.send(JSON.stringify(params));
}

function newEvent(event) {
    // Only check for a return/enter press - Event 13
    if (event.which === 13 || event.keyCode === 13) {
        sendMessage();
    }
}

function sendMessage(){
	event.preventDefault();
	var userInput = document.getElementById('chatInput');
        text = userInput.value; // Using text as a recurring variable through functions
        text = text.replace(/(\r\n|\n|\r)/gm, ""); // Remove erroneous characters
        // If there is any input then check if this is a claim step
        // Some claim steps are handled in newEvent and others are handled in userMessage
        if (text) {
            // Display the user's text in the chat box and null out input box
            // userMessage(text);
            displayMessage(text, 'user');
            userInput.value = '';
            userMessage(text);
        }
        else {
            // Blank user message. Do nothing.
            console.error("No message.");
            userInput.value = '';
        }
}

function displayMessage(text, user, intencao) {
    var chat_body = document.getElementById('chat-body');
    var chat_input = document.getElementById('chatInput')
    var msg = document.createElement('div');
    var msgSpan = document.createElement('span');
    var msgP = document.createElement('p');
    msg.setAttribute("class", "msg");

    if (user == "user") {
        msg.className += " user";
        msgSpan.innerHTML = "Você";
    }
    else {
        msg.className += " bot";
        msgSpan.innerHTML = "Invest.AI";
    }
    msgP.innerHTML = text;
    chat_body.appendChild(msg);
    msg.appendChild(msgSpan);
    msg.appendChild(msgP);
    chat_body.scrollTop = chat_body.scrollHeight;
}


userMessage('');