(function(){
    "use strict";

    //selectors
    const form = document.getElementById("form");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    //error selectors
    const f_err = document.querySelector(".f_error");
    const l_err = document.querySelector(".l_error");
    const e_err = document.querySelector(".e_error");
    const p_err = document.querySelector(".p_error");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        //firstname validation
        const firstname = () => {
            const frstname = fname.value.trim();
            if(frstname ===""){
                showError(fname, f_err, "First Name cannot be empty")
            }
            else{
                fname.style.backgroundImage = "initial";
                f_err.innerHTML = "";
                fname.style.borderColor = "hsl(0, 0%, 59%)";
            }
        };

        //lastname validation
        const lastname = () => {
            const lstname = lname.value.trim();
            if(lstname ===""){
                showError(lname, l_err, "Last Name cannot be empty")
            }
            else{
                l_err.innerHTML = "";
                lname.style.borderColor = "hsl(0, 0%, 59%)";
                lname.style.backgroundImage = "initial";
            }
        };

        //email validation
        const checkEmail = () => {
            const eml = email.value.trim();
            if (eml ===""){
                showError(email, e_err, "Email cannot be empty");
            }
            else if (!isEmailValid(eml)) {
                showError(email, e_err, "Looks like this is not an email");
            }
            else{
                email.style.backgroundImage = "initial";
                e_err.innerHTML = "";
                email.style.borderColor = "hsl(0, 0%, 59%)";
            }
        };
        
        //password validation
        const checkPassword = () => {
            const pas = pass.value.trim();
            if (pas ===""){
                showError(pass, p_err, "Password cannot be empty");
            }
            else{
                pass.style.backgroundImage = "initial";
                p_err.innerHTML = "";
                pass.style.borderColor = "hsl(0, 0%, 59%)";
            }
        };

        //error
        let showError = (elmnt, errorspan , err) => {
            elmnt.style.backgroundImage = "url('images/icon-error.svg')";
            errorspan.innerHTML ="";
            errorspan.innerHTML += err;
            elmnt.style.borderColor = "hsl(0, 100%, 74%)";
        };

        //check if the email is valid
        const isEmailValid = (eml) => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(eml);
        };

        firstname();
        lastname();
        checkEmail();
        checkPassword();
    })
})();