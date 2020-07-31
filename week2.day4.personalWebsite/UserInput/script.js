let h1Ref = document.querySelector("h1");
let theForm = document.getElementById("the_form");
let usernameTextbox = document.getElementById("username_textbox");
let passwordTextbox = document.getElementById("password_textbox");
let logInButton = document.querySelector("button");
let contentDiv = document.getElementById("content");
let intruderDiv = document.getElementById("intruder");
let body = document.querySelector("body");

// hide contentDiv and intruderDiv (not shown when you load the page initially)
contentDiv.style.display = "none";
intruderDiv.style.display = "none";

// set up onclick for button
logInButton.onclick = function(event) {
    // prevent the page from reloading
    event.preventDefault();

    // capture user's input
    let username = usernameTextbox.value;
    let password = passwordTextbox.value;
    console.log(username);
    console.log(password);

    // if the username and password are correct
    if (username == "khye" && password == "pokemon") {
        // hide form
        theForm.style.display = "none";

        // change innerHTML of h1
        h1Ref.innerHTML = "Welcome " + username + "!";

        // change backgroundImage of body
        body.style.backgroundImage = 'url("images/confetti.gif")';

        // show contentDiv
        contentDiv.style.display = "block";

        // for safety, hide intruderDiv
        intruderDiv.style.display = "none";
    }

    // if the username or password is wrong
    else {
        // show intruderDiv
        intruderDiv.style.display = "block";

        // clear textboxs
        usernameTextbox.value = "";
        passwordTextbox.value = "";
    }
}