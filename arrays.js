var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (arr, element) => {
  return [element, ...arr]
}

var destructivelyAddElementToBeginningOfArray = (arr, element) => {
  arr.unshift(element)
  return arr
}

var addElementToEndOfArray = (arr, element) => {
  return [...arr, element]
}

var destructivelyAddElementToEndOfArray = (arr, element) => {
  arr.push(element)
  return arr
}

var accessElementInArray = (arr, index) => { return arr[index] }

var destructivelyRemoveElementFromBeginningOfArray = (arr, element) => {
  arr.shift(element)
  return arr
}

var destructivelyRemoveElementFromEndOfArray = (arr, element) => {
  arr.pop(element)
  return arr
}

var removeElementFromBeginningOfArray = (arr, element) => {
  return arr.slice(1)
}

var removeElementFromEndOfArray = (arr, element) => {
  return arr.slice(0, arr.length -1)
}
