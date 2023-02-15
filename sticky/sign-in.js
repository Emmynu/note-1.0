    function user(){
        let mydate = document.getElementById("text").value
        document.getElementById("text").value = ""
        let regex = /[a-zA-Z0-99]{7}/
        
        regexPro = regex.test(mydate)
        if(regexPro){
            document.getElementById("isValid").style.display = "block"
            document.getElementById("isInvalid").style.display = "none"
            localStorage.setItem("username", JSON.stringify(mydate))
        }

        else{
            document.getElementById("isInvalid").style.display = "block"
            document.getElementById("isValid").style.display = "none"
        }

        myPassword = document.querySelector("#password").value
        document.querySelector("#password").value = ""
        password = /^[[^\<|\>|\?|\''|\]a-zA-Z0-99\*|\+|\&|\@|\$|\%|\_]{5}/

        userPassword = password.test(myPassword)

        if(userPassword){
            document.getElementById("isValid1").style.display = "block"
            document.getElementById("isInvalid1").style.display = "none"
            localStorage.setItem("password", JSON.stringify(myPassword))
        }

        else{
            document.getElementById("isInvalid1").style.display = "block"
            document.getElementById("isValid1").style.display = "none"
        }   

        if(regexPro && userPassword){
           window.location.href = "popup.html"
        }
    }
  

    
  //localStorage.clear()

