#!/bin/bash

export NODE_PATH=/usr/local/lib/node_modules/

rollup -c --bundleConfigAsCjs
