import { getJSON, saveJSON, todayStr } from './utils.js';

const lat = -23.305;  // Jacareí
const lon = -45.966;

const URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current=temperature_2m`;

async function run() {
  const data = await getJSON(URL);
  await saveJSON(`data/weather-${todayStr()}.json`, { data, fetchedAt: new Date().toISOString() });
}
run();
