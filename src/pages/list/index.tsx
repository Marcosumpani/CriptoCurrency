import TopBar from "../../components/topBar";
import Coins from "../../components/coins";
import './list.css';
import Api from "../../api/api.json"; // Certifique-se de que o caminho está correto

function List() {
    // Converta o objeto JSON para um array de valores
    const items = Object.values(Api);

    return (
        <>
            <TopBar />
            <div className="list">  
                {items.map((item: any) => (
                    <Coins
                        key={item.code}
                        image={item.img}
                        price={item.high}
                    />
                ))}     
            </div>
        </>
    );
}

export default List;
