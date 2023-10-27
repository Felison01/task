//using spread operator , set operator as set does not have duplicates
let arr = [1,1,2,2,3,34,4,6,5,6,5,5,5,]
let newarr = [...new Set(arr)]
console.log(newarr);

//using filter
function removeduplicate(array){
  return array.filter((item,index)=>
  {
    array.indexOf(item)===index
  });
}
console.log(removeduplicate(arr))