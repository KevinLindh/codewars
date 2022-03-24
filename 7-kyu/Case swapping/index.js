/*
Given a string, swap the case for each of the letters.

e.g. CodEwArs --> cODeWaRS
Examples

""           ->   ""
"CodeWars"   ->   "cODEwARS"
"abc"        ->   "ABC"
"ABC"        ->   "abc"
"123235"     ->   "123235"

https://www.codewars.com/kata/5590961e6620c0825000008f
*/

//My solution
function swap(str){
  let newArr = str.split("");
  let caseReversed = newArr.map((val, index) => {
    if(str.charCodeAt(index) >= 65 && str.charCodeAt(index) <= 90){
      return val.toLowerCase();
    } else {
      return val.toUpperCase();
    }});
  return caseReversed.join("");
}
