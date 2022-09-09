import { InjectionToken} from "@angular/core";

export interface API {
  url: string;
}

export const APIConfig: API = {
  url: 'https://api.miapirest.com/'
}

export const CONFIG = new InjectionToken<API>('APIConfig');
