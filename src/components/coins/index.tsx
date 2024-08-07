import './coins.css'

function Coins({image}: any) {
    return (
        <>
            <div className="coins">
                <div><img src={image} alt="" /></div>          
                <div className="text-coin">
                    <h4 className="info">INFO</h4>
                    <h4 className="price">PREÇO</h4>
                </div>
            </div>
        </>
    )
}
export default Coins