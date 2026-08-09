# Space Shooter

A side-scrolling asteroid shooter built on the HTML5 Canvas API in plain
JavaScript — no framework, no build step.

**▶ [Play it](https://mjsauro.github.io/SpaceShooter/)**

## Controls

| Action     | Keys                    |
| ---------- | ----------------------- |
| Move       | Arrow keys or `W A S D` |
| Fire       | `Space`                 |
| Restart    | Reset button on the game-over dialog |

Asteroids drift in from the right on a scrolling starfield. Shoot them for
kills; survive for score. Touch one and the run ends.

## Running locally

No toolchain and no dependencies to install — the two libraries load from a CDN.
Open `index.html` directly, or serve the folder if you'd rather avoid `file://`:

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## How it works

`startGame()` builds an 800×400 canvas and starts a 20 ms `setInterval` loop.
Each tick clears the frame, advances the background and every active entity,
runs collision checks, and redraws.

| File                     | Role                                                    |
| ------------------------ | ------------------------------------------------------- |
| `js/game.js`             | Canvas setup, the update loop, score/kill HUD, game over |
| `js/componentConstructor.js` | The `component` type — one constructor covering the ship, asteroids, bullets, background, and text |
| `js/components.js`       | Entity declarations and initial spawn                   |
| `js/movement.js`         | Keyboard state and per-frame player movement             |
| `js/weapon.js`           | Bullet spawning and travel                              |
| `js/asteroid.js`         | Asteroid spawn cadence and drift                         |
| `js/collisiondetector.js`| Ship-versus-asteroid hits                               |
| `js/weapondetector.js`   | Bullet-versus-asteroid hits                             |
| `js/obstacle.js`         | Obstacle helper                                          |

Everything on screen is the same `component` constructor, switched by a type
argument (`"image"`, `"text"`, `"background"`, `"weapons"`) — bullets, rocks, and
the HUD all share one update-and-draw path.

Built with jQuery 3.3.1 and Bootstrap 3.3.7 (CDN) for the game-over modal.

## About

A 2018 project from when I was learning the Canvas API, kept as-is rather than
modernized. It's linked from the
[archived version of my original portfolio](https://mjsauro.github.io/archive/);
my current portfolio is [here](https://d12uot6ivwmo30.cloudfront.net/).
