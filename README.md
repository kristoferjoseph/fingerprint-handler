# Fingerprint handler

Packaged handler for getting the fingerprinted file names for static JavaScript files when you have an index route handler in your Architect based project.

## Install
`npm i fingerprint-handler`

## Usage
Add a route for redirecting to fingerprinted JavaScript files to your arc file.
You can use whatever name you want, we will use a catchall handler `/fingerprints/*`.

```
@app
my-app

@http
get /
get /fingerprints/*
```
In your Lambda handler function for `/fingerprints/*`:
```
const arc = require('@architect/functions')
const fingerprints = require('fingerprint-handler')

exports.handler = arc.http.async(fingerprints)
```


