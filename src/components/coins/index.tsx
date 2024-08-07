import './coins.css'

function Coins({price, image}: any) {
    return (
        <>
            <div className="coins">
                <div><img src={image} alt="" width="120px" /></div>          
                <div className="text-coin">
                    <a href="/btc"><button>Info</button></a>
                    <h4 className="price">R$ {price}</h4>
                </div>
            </div>
        </>
    )
}
export default Coins