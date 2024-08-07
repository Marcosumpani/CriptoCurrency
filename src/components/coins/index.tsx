import './coins.css'

function Coins({price, image, name}: any) {
    return (
        <>
            <div className="coins">
                <div><img src={image} alt="" width="120px" /></div>          
                <div className="text-coin">
                    <h2>{name}</h2>
                    <a href={`info/${name}`}><button>INFO</button></a>
                    <h4 className="price">R$ {price}</h4>
                </div>
            </div>
        </>
    )
}
export default Coins