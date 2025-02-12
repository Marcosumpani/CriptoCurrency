import './home.css'
import TopBar from "../../components/topBar"

function Home() {
    return (<>
        <TopBar />
        <div className='backImage'>
            <img  src="/images/background.png" alt="Background" />
        </div>
        <div className="home_container">
            <div className='center_text'>
                <h1>Bem-vindo ao CryptoCurrency!</h1>
                <p>Acompanhe as cotações e as últimas notícias do mercado de criptomoedas em tempo real. Seja você um investidor experiente ou iniciante, estamos aqui para fornecer informações precisas e análises detalhadas para ajudá-lo a tomar decisões informadas.
                    Explore nosso site e aproveite ao máximo sua experiência no mundo das criptomoedas!</p>
                <a href="/list"><button>Conferir algumas cotações</button></a>
            </div>
        </div>
    </>
    )
}

export default Home