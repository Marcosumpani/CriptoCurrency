import TopBar from "../../components/topBar";
import Coins from "../../components/coins";
import './list.css'

function List() {
    return (
        <>
            <TopBar />
            <div className="list">
                <Coins
                    svgText={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.20798L6.97874 10.1605L12 12.8643L17.0213 10.1605L12 3.20798ZM11.0272 1.13901C11.5062 0.4758 12.4938 0.475796 12.9728 1.13901L19.1771 9.72952C19.6017 10.3175 19.4118 11.1448 18.7732 11.4887L12.5689 14.8294C12.2138 15.0207 11.7863 15.0207 11.4311 14.8294L5.22683 11.4887C4.58826 11.1448 4.3983 10.3175 4.82294 9.72952L11.0272 1.13901Z" fill="#000000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7098 13.5271C18.8691 12.9474 19.9967 14.3627 19.1728 15.3632L12.9263 22.9482C12.4463 23.5311 11.5537 23.5311 11.0737 22.9482L4.82719 15.3632C4.00325 14.3627 5.13091 12.9474 6.29016 13.5271L12 16.382L17.7098 13.5271ZM16 16.5L12.5367 18.3497C12.1988 18.5186 11.8012 18.5186 11.4633 18.3497L8 16.5L12 20.927L16 16.5Z" fill="#000000"></path> </g></svg>}
                />      
            </div>
            <div className="list2">
                <Coins /> 
            </div>
        </>
    )
}

export default List