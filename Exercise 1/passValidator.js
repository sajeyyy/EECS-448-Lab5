function password()
{
  var firstPass = document.getElementById("firstPass").value;
  var secondPass = document.getElementById("secondPass").value;

  if(firstPass.length >= 8 && secondPass.length >= 8)
  {
      if(firstPass == secondPass)
      {
        alert("Passwords Validated!");
      }
      else
      {
        alert("Passwords do not match.");
      }
  }
  else
  {
    alert("Password needs at least 8 characters!");
  }
}
