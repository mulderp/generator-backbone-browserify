# Put local npm installed scripts to path
export PATH := node_modules/.bin:$(PATH)

all:
	browserify -t hbsfy  ./app/main.js > static/bundle.js

publish:
	browserify -t hbsfy  ./app/main.js | uglifyjs > build/bundle.js
