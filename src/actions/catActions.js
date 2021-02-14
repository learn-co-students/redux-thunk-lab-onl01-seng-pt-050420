export const fetchCats = () => {
  return (dispatch) => {
<<<<<<< HEAD
    dispatch({ type: 'LOADING_CATS'})
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
    })
=======
    dispatch({ type: "LOADING_CATS" })
    fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
      .then(response => response.json())
      .then(responseJSON => dispatch({ type: "ADD_CATS", cats: responseJSON.images }))
>>>>>>> 76d9776789db8e5b32f34b536bccaff9d2f7672c
  }
}