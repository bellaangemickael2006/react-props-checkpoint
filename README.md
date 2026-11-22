# React Props Checkpoint

Projet React (Vite) affichant des cartes de joueurs FIFA avec Bootstrap.

## Lancer le projet

```bash
npm install
npm run dev
```

## Structure

- `src/players.js` : tableau d'objets joueurs (name, team, nationality, jerseyNumber, age, image)
- `src/Player.jsx` : composant carte, props déstructurées, `defaultProps` et style en ligne
- `src/PlayersList.jsx` : parcourt le tableau et transmet les props à `Player`
- `src/App.jsx` : composant racine qui affiche `PlayersList`
