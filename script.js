var artistSpace = function() {
    var inputShown = 2;
    function initInput(){
        if(document.getElementById("descripInput").style.display=="block") {
            document.getElementById("descripInput").style.display="none";
            document.getElementById("profiles").style.display="block";
            inputShown = 2;
        }
        else
            document.getElementById("profiles").style.display="none";
            document.getElementById("descripInput").style.display="block";
            inputShown = 1;
            
    }    
    
}();
var inputShown = false;
function initInput(){
    if(inputShown == true) {
        document.getElementById("descripInput").style.display="none";
        document.getElementById("profiles").style.display="block";
        inputShown = false;
    }
    else {
        document.getElementById("profiles").style.display="none";
        document.getElementById("descripInput").style.display="block";
        inputShown = true;
    }
        
} 

function submitInput() {
    let name =  document.getElementById("nameInput").value;
    let desc =  document.getElementById("artistInput").value;
    let img = document.getElementById("imageUrl").value;
    let profiles = document.getElementById("profiles");
    let newli = document.createElement("ul");
    
    let newprofile = document.createElement("div");
    newprofile.setAttribute('class', "profile border");
    
    let thumb = document.createElement("div");
    thumb.setAttribute('class', "thumb");
    
    let content = document.createElement("div");
    
    content.setAttribute('class', "content");
    let pic = document.createElement("img");
    pic.setAttribute('class', "profilepic");
    pic.setAttribute('src', img);
    let title = document.createElement("h3");
    title.setAttribute('class', "name");
    title.appendChild(document.createTextNode(name));
    let descrip = document.createElement("p");
    descrip.setAttribute('class', "descrip");
    descrip.appendChild(document.createTextNode(desc));
    profiles.appendChild(newli);
    newli.appendChild(newprofile);
    newprofile.appendChild(thumb);
    newprofile.appendChild(content);
    newprofile.appendChild(createDeleteButton());
    thumb.appendChild(pic);
    content.appendChild(title);
    content.appendChild(descrip);
    document.getElementById("descripInput").style.display="none";
    document.getElementById("profiles").style.display="block";
    inputShown = false;
}


function createDeleteButton() {
    let deldiv = document.createElement("div");
    deldiv.setAttribute('class', 'deletion');
    let del = document.createElement("button");
    del.setAttribute('class', "deleteButton");
    del.appendChild(document.createTextNode("Delete"))
    
    del.setAttribute('onclick', 'document.getElementById("profiles").removeChild(this.parentNode.parentNode.parentNode)');
    deldiv.appendChild(del);
    return deldiv;
}

function deleteProfile(){

}