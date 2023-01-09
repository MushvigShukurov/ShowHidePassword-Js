var btn = document.getElementById("showPass")

btn.addEventListener("click",function(e){
    e.preventDefault()
    var input = btn.previousElementSibling
    if(input.getAttribute("type")=="password"){
        input.setAttribute("type","text")
        btn.innerText = "Parolu gizlə"
    } else {
        input.setAttribute("type","password")
        btn.innerText = "Parolu göstər"
    }

})