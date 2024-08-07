import TopBar from '../../components/topBar/index.tsx'
import './information.css'
import { useParams } from 'react-router-dom'
import Api from '../../api/api.json'


function Information() {
    let { nome } = useParams()
    const api = Object.values(Api);

    const coin = api.find((coin: any) => coin.name === nome)


    return (
        <>
            <TopBar />
            <div className='all'>
                <div className='container'>
                    <img src={coin?.img} alt="" width={120} height={120} className='imageCoin' />
                    <div className='info'>
                        <h1>{nome}</h1>
                        <h2>{coin?.info}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Information
