export currency = async (base = "eur", desired, amount = 1) => {
  let { rates } = await @stevekrouse.fetchJSON(
    "https://open.er-api.com/v6/latest/eur"
  );
  if (rates && rates[desired.toUpperCase()])
    return amount * rates[desired.toUpperCase()];
  else {
    let { rates } = await @stevekrouse.fetchJSON(
      "https://api.coingecko.com/api/v3/exchange_rates"
    );
    return (
      (amount * rates[desired.toLowerCase()]?.value) /
      rates[base.toLowerCase()]?.value
    );
  }
};
