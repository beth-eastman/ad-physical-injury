## Building Cordova Apps

1. Create a "your-cordova-project" per Cordova docs.
2. Compile a production build to /cordova-build with the required js hook and correct paths: `npm run build:cordova`
3. Synchronize cordova-build with the www in "your-cordova-project": `rsync -av --delete cordova-build/ /destination/path/to/your-cordova-project`

## react.js template
this template serves to standardize the dha apps that will be build with react.js. with a few configuration changes you will
have the foundation for creating your app.

## creating a new project
for new t2 pwa apps:

1. create a new project in gitlab under the t2-pwa namespace and make note of the git `ssh` url of the repository
1. clone this repo using `git clone --depth=1 ssh://git@gitlab.t2.local:10022/t2-pwa/pwa-react-template.git`
1. change directory to template `cd pwa-react-template`
1. run `npm install prompt; node t2-setup.js` to setup your package.json configuration. during the setup be sure to set the repository url to your **new** project. this can be found on the project details when you first create your project in gitlab
1. run `npm run setup` to install dependencies and clean the git repo.<br />
   - *you may need to connect to a network outside of the enclave in order to download all dependencies that are not served via npm*
1. to make your project's name consistent, you might want to rename the directory from 'pwa-react-template' to something more meaningful
1. lastly, set the git remote url for your new project
    - `git remote add origin <git-repo-url>`

*at this point you can run `npm start` to see the app at `http://localhost:3000`.*
> this template was shamelessly taken from [react boilerplate](https://github.com/react-boilerplate/react-boilerplate) and repurposed for T2

## Continuous Integration
This repository comes already equipped with continuous integration. Not sure what that means? [Here's](https://www.thoughtworks.com/continuous-integration) a good description.
When you follow the steps above to create a new project from the template, you're almost finished setting up 
your automated builds already! You just need to get an admin to add your project to the list.

## Updates
Please feel free to make updates to this README or any outdated configuration changes. This is a 'living document'
