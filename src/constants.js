export const isValidObj = (obj) => {
  return ( obj && obj !== null && obj !== 'undefined' )
}

export const returnValidChild = (parentObj,childObj) => {
  let childPropValid
  // if parent object and child object are valid pass them to the code variable
  if (isValidObj(parentObj) && isValidObj(childObj)) {
    childProp = childObj
  } else {
    childProp = ''
  }
  return childProp
}
