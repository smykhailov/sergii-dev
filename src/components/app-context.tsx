import { getConfig, TConfig } from "@core/config";
import { createContext, useContext } from "react";

type TAppContext = {
  config: TConfig;
};

export const defaultContextValue: TAppContext = {
  config: getConfig() || {
    theme: "one-monokai", // TODO: add theme detection and chhose light/dark based on browser settings
    editorFontFace: "segoe-ui",
    editorFontSize: 13,
    articleFontFace: "segoe-ui",
    articleFontSize: 16,
  },
};

export const AppContext = createContext<TAppContext>({} as TAppContext);
export const useAppContext = () => useContext(AppContext);
