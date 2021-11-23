import { TConfig } from "@core/config";
import { createContext, useContext } from "react";

type TAppContext = {
  config: TConfig;
};

export const defaultContextValue: TAppContext = {
  config: {
    theme: "one-monokai", // TODO: add theme detection and chhose light/dark based on browser settings
    editorFontFace: "Segoe UI",
    editorFontSize: 13,
    articleFontFace: "Segoe UI",
    articleFontSize: 13,
  },
};

export const AppContext = createContext<TAppContext>({} as TAppContext);
export const useAppContext = () => useContext(AppContext);
