function question() {

    let val = parseInt(prompt("enter a number.", "20"));
    let res = "";
    let temp = "";
  
    for (let a = 0; a <= val; a++) {
      for (let b = 0; b <= a; b++) {
        temp += "" + b;
      }
      res += "" + temp + "<br>"
      temp = "";
    }
  
    res += "<br>"
  
  
    for (let b = val; b >= 0; b--) {
      for (let c = 0; c <= b; c++) {
        temp += c
      }
      res += temp + "<br>"
      temp = "";
  
    }
    document.getElementById("in").innerHTML = res;
  
  }
  