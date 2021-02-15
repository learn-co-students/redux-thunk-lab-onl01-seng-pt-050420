// write and export your action creator function here
export const fetchCats = () => {
    const catURL = 'https://learn-co-curriculum.github.io/cat-api/cats.json'
    
    return (dispatch) => {
        dispatch({type: 'LOADING_CATS'})
        fetch(catURL).then(res => {
            return res.json()
        }).then(responseJSON => {
            dispatch({type: 'ADD_CATS', cats: responseJSON.images})
        })
    }
}
