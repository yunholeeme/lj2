#!/bin/bash

cp es6/page95.js public/es6/page95.js
git status
git add -A
git commit -m "modify es6/page95.js public/es6/page95.js"
git status
node es6/page95.js
node public/dist/page95.js
