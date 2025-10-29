# data-automations-hub

Automação diária de dados (**câmbio**, **cripto** e **clima**) com GitHub Actions, salvando snapshots versionados em `/data`.  
Um app **React Native (Expo)** consome os JSONs direto do GitHub (raw).

## Scripts
- `npm run fetch:all` — roda todas as coletas localmente
- `npm run fetch:rates` / `fetch:crypto` / `fetch:weather`

## GitHub Actions
Workflow diário em `.github/workflows/scheduler.yml` que comita novos snapshots em `/data`.

## App (Expo)
Código em `app/`. Rodar com:
```bash
cd app
npx create-expo-app@latest .
npm i @react-native-async-storage/async-storage
npx expo start
