// let reverse =(str)=>{
//   let splitestring =str.split("");
//   let reversestring = splitestring.reverse();
//   let joinstring = reversestring.join("");
//   console.log(joinstring)
// }
// reverse('hello')
// reverse("Felison")
// reverse("383293")

function reverse(end){
  return end.split("").reverse().join("");
}
let reversestr = console.log(reverse("abcd"));

const reversedigit = (str)=>{
  return str.toString().split("").reverse().join();
}
let revrese_num = reversedigit(54321);
console.log(revrese_num);