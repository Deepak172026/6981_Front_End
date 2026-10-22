const ProductCards = (props) =>{
    return(
        <>
        <h2>Product Card</h2>
        <p> {props.name}</p>
        <p> {props.price}</p>
        <p> {props.category}</p>
        <p> {props.availability}</p>
        </>
    )
}
export default ProductCards