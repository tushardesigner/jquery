let version = Date.now();
let link = document.createElement("link")
link.rel = "stylesheet"
link.href = `./style.css?ver=${version}`
document.head.appendChild(link)
console.log(link)



jQuery(document).ready(function($){
    $("button").click(function(){
    alert("Hello")
    })
})

