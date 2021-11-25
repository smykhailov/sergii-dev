export type TThemes =
  | "light-plus"
  | "dark-plus"
  | "one-monokai"
  | "high-contrast";
export type TFontFaces = "Segoe UI";

export type TConfig = {
  theme: TThemes;
  editorFontFace: TFontFaces;
  editorFontSize: number;
  articleFontFace: TFontFaces;
  articleFontSize: number;
};

export const defaultConfig: TConfig = {
  theme: "one-monokai", // TODO: add theme detection and chhose light/dark based on browser settings
  editorFontFace: "Segoe UI",
  editorFontSize: 13,
  articleFontFace: "Segoe UI",
  articleFontSize: 13,
};

export const getConfig = (): TConfig => {
  return JSON.parse(
    localStorage.getItem("config") || JSON.stringify(defaultConfig)
  );
};

export const saveConfig = (config: TConfig): void => {
  return localStorage.setItem("config", JSON.stringify(config));
};
