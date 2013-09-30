function add_three(x)
{
  return x + 3;
}

function square(s)
{
  return s * s;
}

function area(l,w)
{
  return l * w;
}

function volume(l, w, h)
{
  return area(l, w) * h;
}

function power(b,e)
{
  var product = 1;
  for(var i = 0; i < e ; i++)
    product *= b;
  return product;
}

function greeting(salutation, name)
{
  return salutation + ", " +name + "!";
}