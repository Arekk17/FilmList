import { Film } from "./film";

export type RootStackParamList = {
    Home: undefined;
    Details: { film: Film };
  };
  