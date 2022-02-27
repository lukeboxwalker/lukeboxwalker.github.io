#!/bin/bash

git checkout --orphan main

echo "Building started..."
npm run build

git --work-tree "dist" add --all
git --work-tree "dist" commit -m "gh-pages deploy"

echo "Pushing to gh-pages..."
git push origin main --force

rm -r "dist"

git checkout -f vue
git branch -D main

echo "Successfully deployed, check your settings"