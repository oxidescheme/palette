import definitions from "../palette.json" with { type: "json" };

/**
 * The semantic group a color belongs to.
 */
export type ColorGroup =
  | "surface"
  | "text"
  | "accent"
  | "bright_accent"
  | "diff";

/**
 * Surface color names (backgrounds and UI surfaces).
 */
export type SurfaceColorName = "mantle" | "base" | "surface0" | "surface1" | "surface2";

/**
 * Text color names (primary and secondary text).
 */
export type TextColorName =
  | "bright_text"
  | "text"
  | "subtext0"
  | "subtext1"
  | "subtext2";

/**
 * Accent color names (primary palette colors).
 */
export type AccentColorName =
  | "red"
  | "orange"
  | "yellow"
  | "lime"
  | "green"
  | "teal"
  | "sky"
  | "blue"
  | "purple"
  | "pink";

/**
 * Bright accent color names (ANSI bright variants).
 */
export type BrightAccentColorName =
  | "bright_red"
  | "bright_orange"
  | "bright_yellow"
  | "bright_lime"
  | "bright_green"
  | "bright_teal"
  | "bright_sky"
  | "bright_blue"
  | "bright_purple"
  | "bright_pink";

/**
 * Diff color names (used for git diffs and change indicators).
 */
export type DiffColorName = "diff_delete" | "diff_add" | "diff_change";

/**
 * Union of all valid oxide color names.
 */
export type OxideColorName =
  | SurfaceColorName
  | TextColorName
  | AccentColorName
  | BrightAccentColorName
  | DiffColorName;

/**
 * A single color with all format representations.
 */
export type ColorFormat = Readonly<{
  name: string;
  order: number;
  hex: string;
  rgb: { r: number; g: number; b: number };
  hsl: { h: number; s: number; l: number };
  oklch: { l: number; c: number; h: number };
  accent: boolean;
  group: ColorGroup;
}>;

/**
 * ANSI terminal color name.
 */
export type AnsiName =
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white";

/**
 * A single ANSI color entry with format representations.
 */
export type AnsiColorFormat = Readonly<{
  name: string;
  hex: string;
  rgb: { r: number; g: number; b: number };
  hsl: { h: number; s: number; l: number };
  oklch: { l: number; c: number; h: number };
  code: number;
}>;

/**
 * An ANSI color group containing both normal and bright variants.
 */
export type AnsiColorGroups = Readonly<{
  name: string;
  order: number;
  normal: AnsiColorFormat;
  bright: AnsiColorFormat;
}>;

/**
 * Map of all oxide colors keyed by name.
 */
export type OxideColors = Readonly<Record<OxideColorName, ColorFormat>>;

/**
 * Map of all ANSI color groups keyed by name.
 */
export type OxideAnsiColors = Readonly<Record<AnsiName, AnsiColorGroups>>;

const typedColors = definitions.oxide.colors as Record<OxideColorName, ColorFormat>;
const typedAnsiColors = definitions.oxide.ansiColors as Record<AnsiName, AnsiColorGroups>;

/**
 * The current version of the oxide palette.
 */
export const version: string = definitions.version;

/**
 * All oxide colors keyed by their semantic name.
 */
export const colors: OxideColors = typedColors;

/**
 * ANSI terminal color mappings.
 */
export const ansiColors: OxideAnsiColors = typedAnsiColors;

/**
 * Get the hex code for a color.
 */
export function hex(name: OxideColorName): string {
  return typedColors[name].hex;
}

/**
 * Get the RGB values for a color.
 */
export function rgb(name: OxideColorName): { r: number; g: number; b: number } {
  return typedColors[name].rgb;
}

/**
 * Get the OKLCH values for a color.
 */
export function oklch(name: OxideColorName): { l: number; c: number; h: number } {
  return typedColors[name].oklch;
}

/**
 * Get the HSL values for a color.
 */
export function hsl(name: OxideColorName): { h: number; s: number; l: number } {
  return typedColors[name].hsl;
}

/**
 * Get the semantic group a color belongs to.
 */
export function group(name: OxideColorName): ColorGroup {
  return typedColors[name].group;
}

/**
 * Check if a color is an accent color.
 */
export function isAccent(name: OxideColorName): boolean {
  return typedColors[name].accent;
}

/**
 * Get all colors belonging to a specific semantic group.
 */
export function byGroup(g: ColorGroup): [OxideColorName, ColorFormat][] {
  return (Object.entries(typedColors) as [OxideColorName, ColorFormat][]).filter(
    ([, v]) => v.group === g,
  );
}
