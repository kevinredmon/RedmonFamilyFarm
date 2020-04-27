// START OF IMAGE TOGGLE
var toggle = true;
var imgElement = document.getElementById('toggle');



function toggleFunction()
{
    if(toggle === true)
    {
        imgElement.src = "img/whiteBlackLamb.jpg";
        toggle = false;
    } else
    {
        imgElement.src = "img/whiteLamb.jpg";
        toggle = true;
    }
}
// END OF IMAGE TOGGLE