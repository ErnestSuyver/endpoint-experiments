import fetch from 'node-fetch'
// show the time that the price of Bitcoin was last updated
import moment from 'moment'

const bitcoinPrice = async () => {
  const res = await fetch("https://blockchain.info/ticker")
  const json = await res.json()
  const lastPrice = json.USD.last+""

  const [ints, decimals] = lastPrice.split(".")

  return ints.slice(0, -3) + "," + ints.slice(-3) + "." + decimals
}

export default async (req, res) => {
  const btc = await bitcoinPrice()
  res.json({
    icon: 'bitcoin',
    subject: `Bitcoin Price USD (${moment().format('h:mma')})`,
    // subject: "Bitcoin Price USD",
    color: 'blue',
    status: `\$${btc}`
  })
}
