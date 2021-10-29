const counterMiddlewareOne = store => next => (action) => {
  console.log('Salutations du middleware 1 !')
  //le return permet de passer à la suite de la chaine
  return next(action)
}

export default counterMiddlewareOne
