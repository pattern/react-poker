
all: build

build:
	npm install
	npm install webpack
	./node_modules/.bin/webpack
	mkdir build
	cp index.html bundle.js style.css ./node_modules/normalize.css/normalize.css build/

clean:
	rm -rf build/
