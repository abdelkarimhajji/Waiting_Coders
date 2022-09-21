var Finished = document.getElementsByClassName("Finished").length
var finished = document.getElementById("finished");
var model_confirm = document.getElementById("model_confirm");
var yes = document.getElementById("yes");
var body = document.getElementsByTagName("body")[0];
var test;
var valid = 1;
// update color of input finished
for(var i = 0; i < Finished; i++)
    {
        document.getElementsByClassName("Finished")[i].onclick = function()
        {
            model_confirm.style.display = "flex";
            body.style.overflow = "hidden";
            test = this;
        }
    }
    // finish input finished

// begin function close and cofirm
function closeModel() {
    model_confirm.style.display = "none";
    body.style.overflow = "scroll"
}

function changeColor() {
    closeModel();
    body.style.overflow = "scroll"
        if(test.style.backgroundColor == "rgb(220, 53, 69)")
        {
            test.style.backgroundColor = "rgb(40, 167, 69)";
        }
}

function notChange(){
    closeModel();
    body.style.overflow = "scroll"
    if(test.style.backgroundColor == "rgb(40, 167, 69)")
        {
            test.style.backgroundColor = "rgb(220, 53, 69)";
        }
}
if(document.getElementById('button').clicked == true)
{
    alert("button was clicked");
}
// finish function close and confirm