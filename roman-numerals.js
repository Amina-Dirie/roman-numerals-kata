function RomanNumerals(num) {
    switch (true) {
        case typeof num === "string":
          return "number is required";
        case num === 0:
          return 0;
        case num > 3999:
          return "number is too large";
       
      }
  
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
  
    let result = "";
    for (let key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        result += key;
        num -= romanNumerals[key];
      }
    }
  
    return result;
  }
  
module.exports= RomanNumerals;