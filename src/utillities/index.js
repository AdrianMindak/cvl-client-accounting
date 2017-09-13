// delete a single value from an array
const deleteFromArray = (array, value) => {
  if (array && value) {
    var index = array.indexOf(value)
    var firstPartOfTheArray = array.slice(0,index)
    var secondPartOfTheArray = array.slice(index+1, array.length+1)
    var newArray = firstPartOfTheArray.concat(secondPartOfTheArray)
    return newArray
  } else {
    const error = new Error('To remove an value from an array, you need to provide an array and a value as arguments.')
    console.error(error.message)
    return error
  }
}

export default deleteFromArray
