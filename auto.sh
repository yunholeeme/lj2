#!/bin/bash

cp es6/Chapter4.js public/es6/Chapter4.js
git status
git add -A
git commit -m "modify es6/Chapter4.js public/es6/Chapter4.js"
git status
node es6/page95.js
node public/es6/page95.js
