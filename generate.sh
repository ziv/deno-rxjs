rm -rf rxjs
git clone -b 7.5.2 --single-branch git@github.com:ReactiveX/rxjs.git
./update-package.mjs
cd rxjs
npm install
npm run build:package
npx denoify
