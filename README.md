# @oxidescheme/palette

The canonical programmatic source of truth for the [Oxide](https://github.com/oxidescheme) color palette.

## Installation

```bash
bun add @oxidescheme/palette
```

Or via JSR:

```bash
bunx jsr add @oxidescheme/palette
```

## Usage

```ts
import { colors, ansiColors, hex, rgb, byGroup } from "@oxidescheme/palette";

// Access a specific color
colors.teal.hex;        // "#00baaa"
colors.teal.oklch;      // { l: 0.70, c: 15, h: 185 }
colors.teal.group;      // "accent"

// Quick accessors
hex("teal");             // "#00baaa"
rgb("teal");            // { r: 0, g: 186, b: 170 }

// Group colors
byGroup("accent");      // [[ "red", {...} ], [ "orange", {...} ], ...]

// ANSI colors
ansiColors.red.normal.hex;   // "#ed756e"
ansiColors.red.bright.hex;   // "#ff9890"
```

## Color Groups

| Group | Colors |
|-------|--------|
| `surface` | mantle, base, surface0, surface1 |
| `text` | bright_text, text, subtext0, subtext1, subtext2 |
| `accent` | red, orange, yellow, green, teal, sky, blue, purple, pink |
| `bright_accent` | bright_red, bright_orange, bright_yellow, bright_green, bright_teal, bright_sky, bright_blue, bright_purple, bright_pink |
| `diff` | amber, jade, ice |

## API

### Exports

| Export | Type | Description |
|--------|------|-------------|
| `colors` | `OxideColors` | Map of all oxide colors keyed by semantic name |
| `ansiColors` | `OxideAnsiColors` | Map of ANSI terminal color groups |
| `version` | `string` | Current palette version |

### Helper Functions

| Function | Returns | Description |
|----------|---------|-------------|
| `hex(name)` | `string` | Get hex code |
| `rgb(name)` | `{ r, g, b }` | Get RGB values |
| `hsl(name)` | `{ h, s, l }` | Get HSL values |
| `oklch(name)` | `{ l, c, h }` | Get OKLCH values |
| `group(name)` | `ColorGroup` | Get semantic group |
| `isAccent(name)` | `boolean` | Check if color is an accent |
| `byGroup(group)` | `[name, color][]` | Get all colors in a group |

## License

MIT
