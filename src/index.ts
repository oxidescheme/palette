import definitions from "../palette.json" with { type: "json" };

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

const entriesFromObject = <T extends object>(obj: T): Entries<T> =>
  Object.entries(obj) as Entries<T>;

export type ColorGroup =
  | "surface"
  | "text"
  | "accent"
  | "bright_accent"
  | "diff";

export type SurfaceColorName = "mantle" | "base" | "surface0" | "surface1";
export type TextColorName =
  | "bright_text"
  | "text"
  | "subtext0"
  | "subtext1"
  | "subtext2";
export type AccentColorName =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "sky"
  | "blue"
  | "purple"
  | "pink";
export type BrightAccentColorName =
  | "bright_red"
  | "bright_orange"
  | "bright_yellow"
  | "bright_green"
  | "bright_teal"
  | "bright_sky"
  | "bright_blue"
  | "bright_purple"
  | "bright_pink";
export type DiffColorName = "amber" | "jade" | "ice";

export type OxideColorName =
  | SurfaceColorName
  | TextColorName
  | AccentColorName
  | BrightAccentColorName
  | DiffColorName;

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

export type AnsiName =
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white";

export type AnsiColorFormat = Readonly<{
  name: string;
  hex: string;
  rgb: { r: number; g: number; b: number };
  hsl: { h: number; s: number; l: number };
  oklch: { l: number; c: number; h: number };
  code: number;
}>;

export type AnsiColorGroups = Readonly<{
  name: string;
  order: number;
  normal: AnsiColorFormat;
  bright: AnsiColorFormat;
}>;

export type OxideColors = Readonly<Record<OxideColorName, ColorFormat>>;
export type OxideAnsiColors = Readonly<Record<AnsiName, AnsiColorGroups>>;

export type OxideFlavor = Readonly<{
  name: string;
  dark: boolean;
  colors: OxideColors;
  ansiColors: OxideAnsiColors;
  colorEntries: Entries<OxideColors>;
  ansiColorEntries: Entries<OxideAnsiColors>;
}>;

const typedColors = definitions.oxide.colors as Record<OxideColorName, ColorFormat>;
const typedAnsiColors = definitions.oxide.ansiColors as Record<AnsiName, AnsiColorGroups>;

export const version: string = definitions.version;

export const flavor: OxideFlavor = {
  ...definitions.oxide,
  colors: typedColors,
  ansiColors: typedAnsiColors,
  colorEntries: entriesFromObject(typedColors),
  ansiColorEntries: entriesFromObject(typedAnsiColors),
};

export const colors: OxideColors = typedColors;
export const ansiColors: OxideAnsiColors = typedAnsiColors;

export const colorEntries: Entries<OxideColors> = entriesFromObject(typedColors);
export const ansiColorEntries: Entries<OxideAnsiColors> = entriesFromObject(typedAnsiColors);

export function hex(name: OxideColorName): string {
  return typedColors[name].hex;
}

export function rgb(name: OxideColorName): {
  r: number;
  g: number;
  b: number;
} {
  return typedColors[name].rgb;
}

export function oklch(name: OxideColorName): {
  l: number;
  c: number;
  h: number;
} {
  return typedColors[name].oklch;
}

export function hsl(name: OxideColorName): {
  h: number;
  s: number;
  l: number;
} {
  return typedColors[name].hsl;
}

export function group(name: OxideColorName): ColorGroup {
  return typedColors[name].group;
}

export function isAccent(name: OxideColorName): boolean {
  return typedColors[name].accent;
}

export function byGroup(g: ColorGroup): [OxideColorName, ColorFormat][] {
  return (Object.entries(typedColors) as [OxideColorName, ColorFormat][]).filter(
    ([, v]) => v.group === g,
  );
}