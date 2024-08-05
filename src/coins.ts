import axios from 'axios'


const apiUrl = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'

async function getCoins(link: string) {
    const response = await axios.get(link)

    return response.data    
}

const coins = await getCoins(apiUrl)

console.log(coins)