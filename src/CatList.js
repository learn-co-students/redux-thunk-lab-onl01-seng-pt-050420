// write your CatList component here

import React from 'react'

const CatList = props => {
    const catPics = props.catPics.map(pic => <img src={pic.url}/>)

    return(
        <div>
            {catPics}
        </div>
    )
}

export default CatList