import { createContext, useContext } from "react";

type TThemes = "light-plus" | "dark-plus" | "one-monokai" | "high-contrast";
type TFontFaces = "Segoe UI";

type TAppContext = {
  theme: TThemes;
  editorFontFace: TFontFaces;
  editorFontSize: number;
  articleFontFace: TFontFaces;
  articleFontSize: number;
};

export const defaultContextValue: TAppContext = {
  theme: "one-monokai", // TODO: add theme detection and chhose light/dark based on browser settings
  editorFontFace: "Segoe UI",
  editorFontSize: 13,
  articleFontFace: "Segoe UI",
  articleFontSize: 13,
};

export const AppContext = createContext<TAppContext>({} as TAppContext);
export const useAppContext = () => useContext(AppContext);
