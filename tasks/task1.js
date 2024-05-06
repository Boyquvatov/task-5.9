function handleChange(e) {
    e.preventDefault();
    let password = document.getElementById("password").value;
    let passwordStrengthMsg = document.getElementById("result");
  
    if (password.length <= 4) {
        passwordStrengthMsg.innerText = "Ishonchsiz";
        passwordStrengthMsg.style.color = "red"; 
    } else if (password.length < 8 && 4 < password.length)  {
        passwordStrengthMsg.innerText = "Ishonchli";
        passwordStrengthMsg.style.color = "yellow";
    } else {
        passwordStrengthMsg.innerText = "Murakkab";
        passwordStrengthMsg.style.color = "green"; 
    }
}


