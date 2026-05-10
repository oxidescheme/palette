# @oxidescheme/palette

The canonical programmatic source of truth for the [Oxide](https://github.com/oxidescheme) color palette.

## Installation

```bash
bun add @oxidescheme/palette
```

## Usage

```ts
import { colors, flavor, hex, rgb, byGroup, colorEntries } from "@oxidescheme/palette";

// Access a specific color
colors.teal.hex;        // "#00baaa"
colors.teal.oklch;      // { l: 0.70, c: 15, h: 185 }
colors.teal.group;      // "accent"

// Quick accessors
hex("teal");             // "#00baaa"
rgb("teal");            // { r: 0, g: 186, b: 170 }

// Group colors
byGroup("accent");      // [[ "red", {...} ], [ "orange", {...} ], ...]

// Full flavor object
flavor.name;            // "Oxide"
flavor.dark;            // true
flavor.colorEntries;    // [...all color entries]
flavor.ansiColorEntries;// [...all ANSI color entries]

// Iterate
colorEntries.map(([name, { hex }]) => `${name}: ${hex}`);
```

## Color Groups

| Group | Colors |
|-------|--------|
| `surface` | mantle, base, surface0, surface1 |
| `text` | bright_text, text, subtext0, subtext1, subtext2 |
| `accent` | red, orange, yellow, green, teal, sky, blue, purple, pink |
| `bright_accent` | bright_red, bright_orange, bright_yellow, bright_green, bright_teal, bright_sky, bright_blue, bright_purple, bright_pink |
| `diff` | amber, jade, ice |

## License

MIT