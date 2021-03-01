[![Build Status](https://travis-ci.com/Antartical/jaina.svg?branch=master)](https://travis-ci.com/Antartical/jaina)
[![Coverage Status](https://coveralls.io/repos/github/Antartical/jaina/badge.svg)](https://coveralls.io/github/Antartical/jaina)


<p align="center">
  <img width="200" height="250" src="https://i.imgur.com/lbeRTwF.png">
</p>

## Jaina in a nutshell

Jaina, the youngest wizzard as kirin tor, is the one who can request gandalf if the user can pass or not. She also will redirects you to your
own site with the access token.

## Local development

Jaina is easy to develop in a local environment by using docker. just type in your terminal `make`
and everything you need will make up by itselt. Please copy the content of `build/env/.env.sample` to
your own _.env_ in `build/env/.env`. You can do this by executting:

```cmd
cp ./build/env/.env.sample ./build/env/.env
```

Moreover you can perform the following operations:

- **make**: setting up the containers
- **make sh**: attach a console inside jaina.
- **make logs**: show jaina logs
- **make local.build**: recompiles jaina image

## PrimeVue

This project is ready to use [PrimeVue](https://primefaces.org/primevue/showcase/#/setup) components.
