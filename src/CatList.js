// write your CatList component here
const CatList = (props) => {
    
   const pics = props.catPics.map(cat => <img src={cat.url}/>)
    return(
   
        <div>
          {pics}
          
        </div>
    )
}
export default CatList