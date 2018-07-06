function criteriaFn(num) {
  if (num === 531) {
    return true
  } else {
    return false
  }
}

function find(array, criteriaFn) {
  let current = array
  let next = []
  while (current) {
    if (criteriaFn(current)) {
      console.log(`Current: ${current}`)
      return current
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        console.log(next.push(current[i]))
        
      }
    }
    current = next.shift()
    console.log(`Current: ${current}`)
  }
  return null
}

var a = [1,[2,4,5,7],[32,43,531],[23,2]]

console.log(find(a, criteriaFn))  // 531






