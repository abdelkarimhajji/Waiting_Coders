var valid = 1;
var navbar = document.getElementById("navbar");
var navbar_2 = document.getElementById("navbar_2");
var your_div      = document.getElementsByClassName("level")[0]; 
var container     = document.getElementsByClassName("container_level")[0];
// Begin script of profile
function burger()
{
            if(valid == 1)
            {
                navbar.style.left = "0px";
                navbar.style.transition =   "0.8s";
                valid = 0;
            }
            else
            {
                navbar.style.left = "-200px";
                navbar.style.transition =   "0.8s";
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
;