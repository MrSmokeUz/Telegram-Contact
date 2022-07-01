addAnother = function() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var div = document.createElement("div");
    var children = ul.children.length + 1;
    var la=document.getElementById("in").value;
    var ka=document.getElementById("im").value;
    var ctr=document.getElementById("container");
    var box=document.getElementById("box");
    li.setAttribute("id", "element"+children);
    li.setAttribute("class","userInfo");
    div.setAttribute("class","img");
    li.appendChild(div);
    li.appendChild(document.createTextNode(la+" "+ka));
    ul.appendChild(li)
    let data = document.getElementById("i6")
    let date = document.getElementById("i7")
    if(document.getElementById("i6").checked){
        div.setAttribute("class","img-m");
    } else {
        div.setAttribute("class","img-f");
    }
    if(document.getElementById("i7").checked){
        div.setAttribute("class","img-f");
    } else {
        div.setAttribute("class","img-m");
    }
    if(ctr.style.display="none"){
        box.style.display="none";
        ctr.style.display="inline-block";
    } else {
        box.style.display="inline-block";
        ctr.style.display="none";
    }
}
function myfunction(){
    var btn=document.getElementById("chto");
    var box=document.getElementById("box");
    var ctr=document.getElementById("container");
    var kpn=document.getElementById("kpn");
    if(box.style.display === "inline-block"){
        btn.innerHTML="Add Contact";
        box.style.display="none";
        ctr.style.display="inline-block";
        kpn.innerHTML="Add Contact";
    } else{
        btn.innerHTML="Add Contact";
        box.style.display="inline-block"
        ctr.style.display="none";
        kpn.innerHTML="Cancel";
    }
}
function search_bar() {
    let input = document.getElementById("searchbar").value
    input = input.toLowerCase()
    let x = document.getElementsByClassName("userInfo")
    let userInfo = document.getElementsByClassName("userInfo")

    for (i = 0; i < x.length; i++) {
        if (x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "block"
            userInfo[i].style.display = "flex"
        } else {
            x[i].style.display = "none"
            userInfo[i].style.display = "none"
        }
    }
}