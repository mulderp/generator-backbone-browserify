# Put local npm installed scripts to path
export PATH := node_modules/.bin:$(PATH)

all:
	browserify ./app/main.js > static/bundle.js

publish:
	browserify ./app/main.js | uglifyjs > build/bundle.js
