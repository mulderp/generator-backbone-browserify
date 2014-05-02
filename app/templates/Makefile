# Put local npm installed scripts to path
export PATH := node_modules/.bin:$(PATH)

all:
	browserify -g hbsfy  ./app/main.js > static/bundle.js
