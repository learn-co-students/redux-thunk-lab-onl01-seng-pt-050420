// write your CatList component here
import React from 'react';

const CatList = (props) => {
    const catPics = props.catPics.map((catPic, index) => <img key={index} src={catPic.url}/> )

    return(
        <div>
            {catPics}
        </div>
    )
}

export default CatList