let uname=document.getElementById("uname");
let pwd=document.getElementById("pass");

function validate(){
   
        setTimeout(function() {
            if(uname.value == 'admin' && pwd.value == '12345' ){
                alert("Login Successful");
            document.location.href = "main.html" 
            return true;
        }
        else{
            alert("Access denied.Invalid username and password.");
            return false;
        }
        });
    
 
}
// validate();