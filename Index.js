
function TowRandNums ()
{
    var random_num1 = Math.floor(Math.random()*6)+1;
    var random_num2 = Math.floor(Math.random()*6)+1;
    var arr =[random_num1,random_num2];
    document.querySelector("#Img1").setAttribute("src","./images/dice"+arr[0]+".png");
    document.querySelector("#Img2").setAttribute("src","./images/dice"+arr[1]+".png");
    return arr ;
}

function StartDiceeGame()
{
    var randNumber = TowRandNums ();
    if(randNumber[0]>randNumber[1])
    {
        var a =document.querySelector("h1").innerText="the winner is player one";
    }
    else if(randNumber[0]<randNumber[1]){
        var a =document.querySelector("h1").innerText="the winner is player tow";
    }
    else{
        var a =document.querySelector("h1").innerText="its a draw!";
    }
}


StartDiceeGame();





