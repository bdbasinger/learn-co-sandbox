// Base Function
function doTo5(anything) {
  // Passes 5 to divide10ByN
  return anything(5)
}

function divide10ByN(n) {
  return 10 / n 
}

console.log(doTo5(divide10ByN)) // 2