
all: build

build:
	npm install
	npm build.js

clean:
	rm -rf build/
