const btn = document.getElementsById("sign_up_button").onclick =function(){
    getAlert();
}

function getAlert(){
    document.getElementById("sign_up_button").innerHTML="Hello World"
}