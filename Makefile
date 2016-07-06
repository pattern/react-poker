
all: build

build:
	npm install
	npm build

clean:
	rm -rf build/
