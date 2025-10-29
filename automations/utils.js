import { writeFile } from 'fs/promises';

export const todayStr = () => new Date().toISOString().slice(0,10);

export async function saveJSON(path, obj) {
  await writeFile(path, JSON.stringify(obj, null, 2), 'utf-8');
}

export async function getJSON(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'data-automations-hub' }});
  if (!res.ok) throw new Error(`HTTP ${res.status} - ${url}`);
  return await res.json();
}
