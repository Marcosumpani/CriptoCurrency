import TopBar from "../../components/topBar";
import Coins from "../../components/coins";
import './list.css'

function List() {
    return (
        <>
            <TopBar />
            <div className="list">
                <Coins />
            </div>
        </>
    )
}

export default List