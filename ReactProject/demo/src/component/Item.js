import './Item.css'


function Item(props) {
    const ItemName = props.name
    return (
        <>
        <p className="Nirma">{ItemName}</p>
        {props.children}
        

        </>

    )

}
export default Item