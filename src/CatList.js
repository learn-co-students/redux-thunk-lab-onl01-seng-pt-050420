import { render } from 'enzyme'
import React, { Component } from 'react'

export default class CatList extends Component {
    render() {
        console.log(this.props.catPics[0])
        return(
            <div>{this.props.catPics.map(pic => <img src={pic.url} />)}</div>
        )
    }
    
}