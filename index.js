const setA = new Set([{a:1}, {a:2}, {a:3}, {a:4}, {a:128}, {a:129}, {b:65}, {b:66}, {c:1}, {c:10}, {c:42}])
const setB = new Set([{a:1}, {a:2}, {a:3}, {a:4}, {a:5}, {a:126}, {a:127}, {b:100}, {c:2}, {c:3}, {d:1}])
// I was thinking that converting the input sets into arrays is a good idea because
// I would had access to the arrays built in methods, especially the sort
const arrayA = Array.from(setA)
const arrayB = Array.from(setB)
//I merged the two arrays using the ES6 spread operator
const mergedArray = [...arrayA, ...arrayB]
console.log("mergedArray", mergedArray);

//first I was trying to sort elements by the keys...
const mySort = (val1, val2) => {
  const key1 = Object.keys(val1)[0];
  const key2 = Object.keys(val2)[0];
  const value1 = val1[key1];
  const value2 = val2[key2];
  let result = 0
  if(key1 > key2){
    result = 1
  } else if (key1 < key2) { 
    result = -1
    //then by the objects values
  } else if (key1 === key2){
    if(value1> value2){
      result = 1
    } else if(value1 < value2){
      result = -1
    }
  }
  return result
}

// then I changed the classical built in callback function of the sort built in method (array.sort((a,b)=>a-b)), for example
// with mySort function
const mergedSortedArray = mergedArray.sort(mySort)
//once I have the sorted array I converted back to set to autoeliminate the duplicates
const mergedSet = new Set(mergedSortedArray)

console.log("mergedSet", mergedSet);

//the algorithm is working only if the input sets will have the same structure of one property key-value.
