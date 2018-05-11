var max = document.getElementById('num').value

function begRand(max){
  while(true){
    if(endRand()){
      break;
    }
    else{
      var random1 = Math.floor(Math.random() * max);
      var random2 = Math.floor(Math.random() * max);

      document.getElementById("num1").innerHTML = random1;
      document.getElementById("num2").innerHTML = random2;

      if(random1 == random2){
        document.getElementById("equalSign").innerHTML = "=";
        break;
      }
    }
  }
}

function endRand(){
  return true;
}
