# esnext-dev
[![Build Status](https://travis-ci.org/vinsonchuong/esnext-dev.svg?branch=master)](https://travis-ci.org/vinsonchuong/esnext-dev)

A seamless development workflow for ES.next

Starting a new ES.next project is difficult. One must design the required
compilation infrastructure by manually coordinating multiple libraries. While a
team need not maintain that infrastructure day-to-day because it is outside of
the application domain, breaking updates to any component of that infrastructure
requires refamiliarization with the entire system.

I believe that ES.next compilation infrastructure should be standardized, made
as seamless as possible, and excluded from an application code base.
`esnext-dev` is an attempt to make that happen.

## Installing
`esnext-dev` is available as an
[npm package](https://www.npmjs.com/package/esnext-dev).

## Usage
In your `package.json`, run the `esnext-dev` command from the `start` script as
follows:

```json
{
  "name": "project",
  "scripts": {
    "start": "esnext-dev"
  }
}
```

## Development
### Getting Started
The application requires the following external dependencies:
* Node.js

The rest of the dependencies are handled through:
```bash
npm install
```

Run tests with:
```bash
npm test
```
