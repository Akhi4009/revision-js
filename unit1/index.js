function calcAge(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge(1999);
console.log(age1);

 const age = function calcAgge1(birthYear){
    return 2037 - birthYear;
}

console.log(age(1999));

const calcAge2 = birthYear => 2037 - birthYear;
console.log(calcAge2(1999));