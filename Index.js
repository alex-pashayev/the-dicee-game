
function TowRandNums ()
{
    var random_num1 = Math.floor(Math.random()*6)+1;
    var random_num2 = Math.floor(Math.random()*6)+1;
    var arr =[random_num1,random_num2];
    return arr ;
}
var arr = TowRandNums ();

function changeNumbers(Arr)
{   
    for(var i =1 ;i<7;i++)
    {
        
        if(Arr[0]==i){
            document.querySelector("#Img1").setAttribute("src","./images/dice"+i+".png");
            break;
        }
    }

    for(var i =1 ;i<7;i++)
        {
            if(Arr[1]==i){
                document.querySelector("#Img2").setAttribute("src","./images/dice"+i+".png");
                break;
            }
        } 
}


function StartDiceeGame()
{
    var randNumber = TowRandNums ();
    changeNumbers(randNumber);
}


StartDiceeGame();





