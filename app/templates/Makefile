.PHONY: ext all publish

# Put local npm installed scripts to path
export PATH := node_modules/.bin:$(PATH)

ext:    ## use jquery as external reference
	browserify -x jQuery ./app/main.js > static/bundle.js

all:
	browserify ./app/main.js > static/bundle.js

publish:
	browserify ./app/main.js | uglifyjs > build/bundle.js
