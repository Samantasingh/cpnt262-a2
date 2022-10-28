  // TODO: Selecting 'Make a selection' leadiing back to a gray background


  const backgroundImage = document.querySelector ('select')
  document.getElementById("backgroundImage").onchange = function() {

  let getValue = document.getElementById("backgroundImage");
  let value = getValue.value;
  
    if (value == "strawberry") {
      document.body.style.backgroundImage = ("url('/assets/images/strawberries.jpg')");
      document.body.style.backgroundRepeat = ("no-repeat");
      document.body.style.backgroundSize = ("110rem");
      document.body.style.backgroundPosition = ("center");
  } 
    else if(value == "kiwi") {
      document.body.style.backgroundImage = ("url('/assets/images/kiwi.jpg')");
      document.body.style.backgroundRepeat = ("no-repeat");
      document.body.style.backgroundSize = ("110rem");
      document.body.style.backgroundPosition = ("center");
  }
    else if(value == "greenApple") {
      document.body.style.backgroundImage = ("url('/assets/images/green-apples.jpg')");
      document.body.style.backgroundRepeat = ("no-repeat");
      document.body.style.backgroundSize = ("110rem");
      document.body.style.backgroundPosition = ("center");
  }
    else if(value == "blueberry") {
      document.body.style.backgroundImage = ("url('/assets/images/blueberries.jpg')");
      document.body.style.backgroundRepeat = ("no-repeat");
      document.body.style.backgroundSize = ("110rem");
      document.body.style.backgroundPosition = ("center");
  }
}
