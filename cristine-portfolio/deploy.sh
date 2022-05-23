#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add .
git commit -m "new Deployment"
git push -f https://github.com/CristineMar/CristineMar.github.io.git main:gh_pages

cd -
