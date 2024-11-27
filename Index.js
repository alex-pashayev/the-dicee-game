
function TowRandNums ()
{
    var random_num1 = Math.floor(Math.random()*6)+1;
    var random_num2 = Math.floor(Math.random()*6)+1;
    var arr =[random_num1,random_num2];
    return arr ;
}
var arr = TowRandNums ();
alert("firs num is "+arr[0]+" and the econe one is "+arr[1]);


