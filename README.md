# README

## Title:

Welcome to the Fubar app README. If you haven’t figured it out yet the name for this app is Fubar.

## Overview:

Social media has proven to be both a positive and an ill for society at large, often time magnifying our differences when it should be something that brings people together. No community suffers from the loss of human connection like the military and veterans. As a whole the people in this community are often asked to form close bonds which can be end up being resolved on a moments notice (such as due to deployments, moves, or changes in service status). We created Fubar for the military and veteran community with a particular slant towards the ascetics of that community while removing the parts of social media (politics) that get in the way and act to prevent the deepening of connections. Our app is proudly by Vets and for Vets. Because friendships don’t need to end just because service does.

## Features:

We created over 20 user stories while developing this app. I will spare you that amount of text as our app’s functionality can be broken into four primary points of performance:

    1. Users can create a profile that is unique to them, they can edit or delete this profile.

    2. Users can leave a status update on their profile which allows other users to see the information they've chosen to share

    3. Users can see a list of the other profiles in the website and navigate to a particular profile by clicking on it.

    4. Users can navigate to a marketplace that caters to military hardware and services

## Running the project:

Looking to get the Fubar code to work for you? Local hosting is always a possible way of tackling this challenge assuming that your system is setup to run a React in Rails app. We’d recommend Heroku as an external hosting solution should you wish to host this app externally. Deployment to Heroku is the preferred external hosting solution but requires some light command line work to ensure a smooth deployment. Every system has the possibility of presenting unique challenges. Please note that Fubar was build primarily on 2020 MacBook Air laptops running macOS 12.2. Below are a list of commands that the development team found to be essential for deployment to Heroku.

    To fix a compatibility issue between the macOS and Heroku:
    $ bundle lock --add-platform x86_64-linux

    To fix a compiling issue related to our use of JS and Ruby on which the app is built please run:
    $ heroku buildpacks:add --index 1 heroku/nodejs	$heroku buildpacks:add --index 2 heroku/ruby

    After the deployment has been completed run the following commands to get the App’s database to run:
    $ heroku run rake db:seed
    $ heroku run bin/rails db:migrate

## Dependencies:

The main outside resources Fubar needs to run are external media sources. Fubar is currently setup to use primarily external media in the form of pictures that are being linked to from other websites. Should these pictures become unavailable to their current addresses the app will not be able to render said pictures. This could be alleviated with a more robust DB where all of the user’s photos could be stored.
