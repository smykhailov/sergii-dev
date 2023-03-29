export type TThemes =
  | "light-plus"
  | "dark-plus"
  | "one-monokai"
  | "high-contrast";
export type TFontFaces = "segoe-ui" | "consolas";

export type TConfig = {
  theme: TThemes;
  editorFontFace: TFontFaces;
  editorFontSize: number;
  articleFontFace: TFontFaces;
  articleFontSize: number;
};

const getBrowserColorScheme = () => {
  if (typeof window === `undefined`) {
    return "light-plus";
  }

  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark-plus";
    } else {
      return "light-plus";
    }
  }

  return "light-plus";
};

export const defaultConfig: TConfig = {
  theme: getBrowserColorScheme(),
  editorFontFace: "segoe-ui",
  editorFontSize: 14,
  articleFontFace: "segoe-ui",
  articleFontSize: 16,
};

type TKeyValuePair<K extends string> = { [key in K]: string };

export const themes: TKeyValuePair<TThemes> = {
  "light-plus": "Default Light+",
  "dark-plus": "Default Dark+",
  "one-monokai": "One Monokai",
  "high-contrast": "High Contrast",
};

export const fonts: TKeyValuePair<TFontFaces> = {
  "segoe-ui":
    "Segoe UI, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  consolas:
    "Consolas, Andale Mono WT, Andale Mono, Lucida Console, Lucida Sans Typewriter, DejaVu Sans Mono, Bitstream Vera Sans Mono, Liberation Mono, Nimbus Mono L, Monaco, Courier New, Courier, monospace",
};

export const getConfig = (): TConfig => {
  return JSON.parse(
    typeof window !== `undefined`
      ? localStorage.getItem("config") || JSON.stringify(defaultConfig)
      : JSON.stringify(defaultConfig)
  );
};

export const saveConfig = (config: TConfig): void => {
  if (typeof window !== `undefined`) {
    localStorage.setItem("config", JSON.stringify(config));
  }
};
