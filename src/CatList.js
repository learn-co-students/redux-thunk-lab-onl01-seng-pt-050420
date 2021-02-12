import React, { Component } from 'react'

export default class CatList extends Component {

    renderCatPics = () => this.props.catPics.map(cat => <img src={cat.url}></img>)

    render() {
        return(
            <div>
                {this.renderCatPics()}
            </div>
        )
    }
}