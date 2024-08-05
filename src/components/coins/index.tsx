import './coins.css'

function Coins({svgText}: any) {
    return (
        <>
            <div className="coins">
                 <svg className='cripto' width="120px">{svgText}</svg>
                <div className="text-coin">
                    <h4 className="info">INFO.</h4>
                    <h4 className="price">PREÇO</h4>
                </div>
            </div>
        </>
    )
}
export default Coins