import { mkdir, writeFile } from 'fs/promises';
import { dirname } from 'path';

export const todayStr = () => new Date().toISOString().slice(0, 10);

export async function saveJSON(path, obj) {
  // Garante que a pasta existe antes de salvar
  const dir = dirname(path);
  await mkdir(dir, { recursive: true });

  await writeFile(path, JSON.stringify(obj, null, 2), 'utf-8');
}

export async function getJSON(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'data-automations-hub' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} - ${url}`);
  return await res.json();
}
