#!/bin/bash
gem install bundler -N
bundle install

./node_modules/bower/bin/bower install
