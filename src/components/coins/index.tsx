import './coins.css'

function Coins({children}: any) {
    return (
        <>
            <div className="coins">
                <div>{children}</div>          
                <div className="text-coin">
                    <h4 className="info">INFO</h4>
                    <h4 className="price">PREÇO</h4>
                </div>
            </div>
        </>
    )
}
export default Coins