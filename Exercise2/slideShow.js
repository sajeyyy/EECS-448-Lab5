var current=0;
var size=5;

var id=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"]

function previous()
{
  if(current == 0)
  {
    current = size
  }
  else
  {
  current--
  }

let img = document.getElementById('id')
img.src = id[current]

}

function next()
{
  if(current == size - 1)
  {
    current = 0
  }
  else
  {
    current++
  }

  let img = document.getElementById('id')
  img.src = id[current]
}
