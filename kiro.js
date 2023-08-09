const customFilter= (array, callback) => {
  const filteredArray = [];
  array.forEach(el => {
    if (callback(el)) {
      filteredArray.push(callback(el))
    }
  })

  return filteredArray;
}

const numbers = [1,2,3,4,5,6]

const evenNumbers = (num) => {
 if (num % 2 === 0) {
  return num
 }
}

console.log(customFilter(numbers, evenNumbers))