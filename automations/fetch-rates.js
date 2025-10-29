import { getJSON, saveJSON, todayStr } from './utils.js';
const URL = 'https://api.exchangerate.host/latest?base=BRL&symbols=USD,EUR';

async function run() {
  const data = await getJSON(URL);
  await saveJSON(`data/rates-${todayStr()}.json`, {
    date: data.date, base: data.base, rates: data.rates,
    fetchedAt: new Date().toISOString()
  });
}
run();
