// Begin script of sign_in 
var your_div      = document.getElementById("your-div"); 
var container     = document.getElementById("container");

var result_width = (container.scrollWidth - your_div.scrollWidth) / 2;
var result_height = (container.scrollHeight - your_div.scrollHeight) /2;

your_div.style.left = result_width + "px";
your_div.style.top  = result_height + "px";


function Myfunction()
{
  var result_width = (container.scrollWidth - your_div.scrollWidth) / 2;
  var result_height = (container.scrollHeight - your_div.scrollHeight) /2;
  your_div.style.left = result_width + "px";
  your_div.style.top  = result_height + "px";
  // alert("this width :"+ container.clientWidth +"this width :"+ your_div.clientWidth )
  // alert("left :"+ result_width)
}
window.addEventListener('resize', Myfunction);
// finish script of sgin_in