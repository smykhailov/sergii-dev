import { getConfig, TConfig } from "@core/config";
import { createContext, useContext } from "react";

type TAppContext = {
  config: TConfig;
  setConfig: (config: TConfig) => void;
};

export const defaultContextValue: TAppContext = {
  config: getConfig(),
  setConfig: () => {},
};

export const AppContext = createContext<TAppContext>({} as TAppContext);
export const useAppContext = () => useContext(AppContext);
