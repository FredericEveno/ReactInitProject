const counterMiddlewareTwo = store => next => async (action) => {
  await setTimeout( () => {
    console.warn('Salutations du middleware 2 !')
    console.log('Salutations du middleware 2 !')
  }, 3000 )
  return next(action)
}
export default counterMiddlewareTwo
