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

export const defaultConfig: TConfig = {
  theme: "one-monokai", // TODO: add theme detection and chhose light/dark based on browser settings
  editorFontFace: "segoe-ui",
  editorFontSize: 13,
  articleFontFace: "consolas",
  articleFontSize: 16,
};

type TKeyValuePair<K extends string> = { [key in K]: string };

export const themes: TKeyValuePair<TThemes> = {
  "light-plus": "Light+",
  "dark-plus": "Dark+",
  "one-monokai": "One Monokai",
  "high-contrast": "High Contrast",
};

export const fonts: TKeyValuePair<TFontFaces> = {
  "segoe-ui": "Segoe UI",
  consolas: "consolas",
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
