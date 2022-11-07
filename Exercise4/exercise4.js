function colorChange()
{
  var redBorder=document.getElementById("redBorder").value;
  var blueBorder=document.getElementById("blueBorder").value;
  var greenBorder=document.getElementById("greenBorder").value;
  var redBack=document.getElementById("redBack").value;
  var blueBack=document.getElementById("blueBack").value;
  var greenBack=document.getElementById("greenBack").value;
  var widBorder=document.getElementById("widBorder").value;

      if(redBorder<0||greenBorder<0||blueBorder<0||redBorder>255||greenBorder>255||blueBorder>255){
        alert("Please input a valid color value!");
      }
      else if(widBorder<0){
        alert("Please input a valid Border width!");
      }
      else if(redBack<0||greenBack<0||blueBack<0||redBack>255||greenBack>255||blueBack>255){
        alert("Please input a valid color value!");
      }

        text.style.borderColor='rgb('+greenBorder+','+blueBorder+','+redBorder+')';
        text.style.backgroundColor='rgb('+redBack+','+greenBack+','+blueBack+')';
        text.style.borderWidth=widBorder;

}
