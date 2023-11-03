function buttonclick(val)
{
    //the + for adding a new value on the diplay without losing the previous
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function clearDisplay()
{
    //value="" its represents its null
    document.getElementById("screen").value="";
}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result 
}