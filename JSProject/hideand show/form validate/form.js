const element = document.getElementById("submit-button");
element.addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const checkBox1 = document.getElementById("inlineCheckbox1");
    const checkBox2 = document.getElementById("inlineCheckbox2");
    const checkBox3 = document.getElementById("inlineCheckbox3");
    const radioButton1 = document.getElementById("inlineRadio1");
    const radioButton2 = document.getElementById("inlineRadio2");
    const radioButton3 = document.getElementById("inlineRadio3");
    const password = document.getElementById("inputPassword5").value;
    const terms = document.getElementById("terms");
    const mail = document.getElementById("exampleFormControlInput1").value;



    //   username

    if (name) {
        showUserNameError(false);
    } else {
        showUserNameError(true);
    }

    //age 

    if (age) {
        showAgeError(false, age);
    } else {
        showAgeError(true, age);
    }

    //checkbox

    if (checkBox1.checked || checkBox2.checked || checkBox3.checked) {
        checkBoxError(true);
    } else {
        checkBoxError(false);
    }

    //radiobutton

    if (radioButton1.checked || radioButton2.checked || radioButton3.checked) {
        radioButton(true);
    } else {
        radioButton(false);
    }

    // let reg = new RegExp(
    //   "^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{7,})"
    // );

    //password

    if (password.length >= 8) {
        showPasswordError(true);
    } else {
        showPasswordError(false);
    }

    //terms and condition

    if (terms.checked) {
        termsandcondition(true)
    } else {
        termsandcondition(false)

    }
    if (mail.length > 10) {
        enterValidMail(true)

    } else {
        enterValidMail(false)
    }

});

function visible() {
    var eye = document.getElementById("inputPassword5");
    if (eye.type === "password") {
        eye.type = "text"
    }
    else {
        eye.type = "password"
    }
}

//Name Error
function showUserNameError(isShowError) {
    const ele = document.getElementById("username-error");
    var number_way = /^[A-Za-z]+$/;
    if (isShowError) {
        ele.innerText = "**Username cannot be empty";
        ele.style.display = "block";
        ele.style.color = "red";
    } else {
        ele.innerText = "";
        ele.style.display = "none";
    }
}

function showAgeError(isShowError, val) {
    const ele = document.getElementById("age-error");
    if (isShowError) {
        ele.innerText = "**age cannot be empty";
        ele.style.display = "block";
        ele.style.color = "red";
    } else {
        if (val > 0 && val < 150) {
            ele.innerText = "";
            ele.style.display = "none";
        }
        else {
            ele.innerText = "**age cannot be less then 0 or greater than 150";
            ele.style.display = "block";
            ele.style.color = "red";
        }
    }
}

function checkBoxError(isChecked) {
    const checkBox = document.getElementById("checkBoxError");

    if (isChecked) {
        checkBox.style.display = "none";
    } else {
        checkBox.style.display = "block";
    }
}

function radioButton(radioSelect) {
    const radioButton = document.getElementById("RadioButtonShow");
    if (radioSelect) {
        radioButton.style.display = "none";
    } else {
        radioButton.style.display = "block";
    }
}

function showPasswordError(pError) {
    const password = document.getElementById("passwordError");
    if (pError) {
        password.style.display = "none";
    } else {
        password.style.display = "block";
    }
}

function termsandcondition(condition) {
    const terms = document.getElementById("TandC")
    if (condition) {
        terms.style.display = "none"
    } else {
        terms.style.display = "block";
    }
}

function enterValidMail(mail) {
    const Gmail = document.getElementById("Email")
    if (mail) {
        Gmail.style.display = "none"
    } else {
        Gmail.style.display = "block"

    }
}