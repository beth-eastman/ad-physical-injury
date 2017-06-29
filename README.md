# React Boilerplate: The Quickening

1. `git clone`
2. `npm install`
3. `npm start`

Open: http://localhost:3000

## Building Cordova apps

1. Create a "your-cordova-project" per Cordova docs: https://cordova.apache.org/#getstarted
2. Compile a production build to /cordova-build with the required js hook and correct paths: `npm run build:cordova`
3. Synchronize cordova-build with the www in "your-cordova-project": `rsync -av --delete cordova-build/ /destination/path/to/your-cordova-project/www`

## Detailed docs

This template is based on React Boilerplate. See what's included: https://github.com/react-boilerplate/react-boilerplate/#documentation

## Additions

1. Material UI
2. Hash routing
3. Cordova builds
4. Persistant state
