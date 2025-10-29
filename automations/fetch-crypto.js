import { getJSON, saveJSON, todayStr } from './utils.js';
const URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd,brl';

async function run() {
  const data = await getJSON(URL);
  await saveJSON(`data/crypto-${todayStr()}.json`, { data, fetchedAt: new Date().toISOString() });
}
run();
