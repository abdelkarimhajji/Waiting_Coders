var Finished = document.getElementsByClassName("Finished").length
var finished = document.getElementById("finished");
var valid = 1;

for(var i = 0; i < Finished; i++)
    {
        document.getElementsByClassName("Finished")[i].onclick = function()
        {
            
            if(this.style.backgroundColor == "rgb(220, 53, 69)")
            {
                // this.setAttribute('style', 'backgroundColor : blue');
                this.style.backgroundColor = "rgb(40, 167, 69)";
            }
            else
            {
                this.style.backgroundColor = "rgb(220, 53, 69)";
            }
            
        }
    }