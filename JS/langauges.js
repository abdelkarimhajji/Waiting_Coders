var Finished = document.getElementById("Finished");
var valid = 1;
function changeColor()
{
    if (valid == 1)
    {
        Finished.setAttribute("class", "color_2");
        valid = 0;
    }
    else
    {
        Finished.setAttribute("class", "color_1");
        valid = 1;
    }
    
}