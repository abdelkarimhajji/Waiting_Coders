var my_projects = document.getElementsByClassName("my_projects")[0];
var containe_i = document.getElementsByClassName("containe_i").length;
var i_event = document.getElementsByClassName("i_event").length;
// function bigImg(e) {
    
// }
// function normalImg(e) {
//     e.style.backgroundColor= ""
// }
for (let i = 0; i < containe_i; i++) {
    document.getElementsByClassName("containe_i")[i].onmouseenter = function()
    {
        this.style.backgroundColor= "rgb(0, 186, 188)"
        var child = document.getElementsByClassName("containe_i")[i].children;
        child[0].style.color = "#ffffff";
    }
}
for (let i = 0; i < containe_i; i++) {
    document.getElementsByClassName("containe_i")[i].onmouseleave = function()
    {
        this.style.backgroundColor= "#ffffff"
        var child = document.getElementsByClassName("containe_i")[i].children;
        child[0].style.color = "#292d39 "
    }
}
// onclick containe_i event
for (let i = 0; i < containe_i; i++) {
    document.getElementsByClassName("option")[i].style.display = "none";
    document.getElementsByClassName("containe_i")[i].onclick = function()
    {

        var next = this.nextElementSibling;
        window.onclick = function()
        {
            
            for (let j = 0; j < containe_i; j++) {
                if(!(next))
                {
                    alert(1)
                    document.getElementsByClassName("option")[j].style.display = "none";
                }
            }
        }
        if(next.style.display == "none")
        {
            next.style.display = "block";
            
        }
        else if(next.style.display == "block")
        {
            next.style.display = "none"
        }
    }
}


