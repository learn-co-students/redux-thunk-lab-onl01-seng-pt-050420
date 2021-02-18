import React from 'react';

class CatList extends React.Component {
  catLister = () => {
    return this.props.catPics.map(cat => <img key={cat.id} src={cat.url}  />)
  }

  render() {
    return (
      <div>
        {this.catLister()}
      </div>
    )
  }
}


export default CatList;