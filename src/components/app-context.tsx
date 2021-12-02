import { getConfig, TConfig } from "@core/config";
import { createContext, useContext } from "react";

type TAppContext = {
  config: TConfig;
};

export const defaultContextValue: TAppContext = {
  config: getConfig(),
};

export const AppContext = createContext<TAppContext>({} as TAppContext);
export const useAppContext = () => useContext(AppContext);
