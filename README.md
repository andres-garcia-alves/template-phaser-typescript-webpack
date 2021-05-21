# Template Phaser 3 + Typescript 4 + WebPack 5

A project template for Phaser 3.54 + TypeScript 4.2, using WebPack 5.37 as bundler, with hot-reload enabled.  

For loading performance, WebPack is configured to bundle 2 chunks: one for the game itself, and the last one for the Phaser library.

&nbsp;

### Motivation

If you came for the technical part just skip to the next section.  

I recently had my [Battle City](https://github.com/andres-garcia-alves/mini-battle-city) clon project to upgrade its dependencies, originally wroted using Phaser 3.11, TypeScript 2.7 and WebPack 3.11 a few years ago.  

Just doing `npm install <dependency@latest>` didn't work, founding some breaking changes on Phaser 3 source code, and a lot on WebPack, plugins included.  

So I decided to take the oportunity and give a chance to the [phaser3-typescript-project-template](https://github.com/photonstorm/phaser3-typescript-project-template), by Richard Davey AKA 'PhotonStorm', the creator of Phaser library. One thing to consider here: PhotonStorm's template came with Rollup 2.35 as bundler.  

After compiling this new template, I realiced of two things: first its lacks of hot-reloading, by itself a deal-breaking for me (the are some plugins out there like [rollup-plugin-livereload](https://www.npmjs.com/package/rollup-plugin-livereload), so not big deal), but secondly the slow it is to transpile TypeScript -> JavaScript at the current version: Rollup 2.35 + Rollup-Plugin-TypesScript2 0.29, at least on my modest PC.

|                    | RollUp             | WebPack            |
|--------------------|--------------------|--------------------|
| Initial build      | ~60 secs           | ~25 secs           |
| Subsequent builds  | ~16-20 secs        | ~3-4 secs          |

&nbsp;

No way!  

So I returned to the original project, did all the migrations and resolved incompatibilities by hand.  
Learned some in the process, and the most important: realiced that could result in a good template for those who are just starting on Phaser, and want to use it conjunction with TypeScript... and here we are.

&nbsp;

### Requirements

If you want to run this project then you need [Node.js](https://nodejs.org) installed.

| Command          | Description           |
|------------------|-----------------------|
| `npm install`    | Install dependencies. |
| `npm run start`  | Launch browser with the game. <br> Press `Ctrl+C` to kill **http-server** process. |
| `npm run deploy` | To build a minified game version for production. |

&nbsp;

Please send me your feedback about this template: andres.garcia.alves@gmail.com

Enjoy!
