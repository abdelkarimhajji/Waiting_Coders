var valid = 1;
var navbar = document.getElementById("navbar");
var navbar_2 = document.getElementById("navbar_2");
var your_div      = document.getElementsByClassName("level")[0]; 
var container     = document.getElementsByClassName("container_level")[0];
var icon_item = document.getElementById("icon_item");
var css = '.icon_item:hover{ background-image: linear-gradient(350deg,rgb(0, 0, 0,0.1),rgb(0, 186, 188)); }';
var css_2 = '.icon_item:hover{ background-image: linear-gradient(#202026,#202026);}';
var style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);
// Begin script of profile
function burger()
{
            if(valid == 1)
            {
                navbar.style.left = "0px";
                navbar.style.transition =   "0.8s";
                if (style.styleSheet) {
                    style.styleSheet.cssText = css_2;
                } else {
                    style.appendChild(document.createTextNode(css_2));
                }
                
                document.getElementsByTagName('head')[0].appendChild(style);
                valid = 0;
            }
            else
            {
                navbar.style.left = "-240px";
                navbar.style.transition =   "0.8s";
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                } else {
                    style.appendChild(document.createTextNode(css));
                }
                
                document.getElementsByTagName('head')[0].appendChild(style);
                valid = 1;
            }
}
function burger_2()
{
            if(valid == 1)
            {
                navbar_2.style.left = "0px";
                navbar_2.style.transition =   "0.8s";
                navbar_2.style.position = "fixed";
                valid = 0;
            }
            else
            {
                navbar_2.style.left = "-100%";
                navbar_2.style.transition =   "0.8s";
                valid = 1;
            }
}
// finish

// Begin resize container level


var result_width  = (container.clientWidth - your_div.clientWidth) / 2;
var result_height = (container.scrollHeight - your_div.scrollHeight) /2;

your_div.style.left = result_width + "px";
your_div.style.top  = result_height + "px";


function Myfunction()
{
    var result_width = (container.clientWidth - your_div.clientWidth) / 2;
    var result_height = (container.scrollHeight - your_div.scrollHeight) /2;
    your_div.style.left = result_width + "px";
    your_div.style.top  = result_height + "px";
}

window.addEventListener('resize', Myfunction);


// finsh
// create hover icone_items

