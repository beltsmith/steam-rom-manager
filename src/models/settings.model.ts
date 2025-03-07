import { FuzzyListTimestamps } from "./fuzzy.model";

export interface PreviewSettings {
    retrieveCurrentSteamImages: boolean,
    deleteDisabledShortcuts: boolean,
    imageZoomPercentage: number,
    preload: boolean,
    imageTypes: string[]
}

export interface AppSettings {
  fuzzyMatcher: {
      timestamps: FuzzyListTimestamps,
      verbose: boolean,
      filterProviders: boolean
  },
  environmentVariables: {
    steamDirectory: string,
    romsDirectory: string,
    retroarchPath: string,
    localImagesDirectory: string,
    raCoresDirectory: string
  },
  language: string,
  offlineMode: boolean,
  enabledProviders: string[],
  previewSettings: PreviewSettings,
  navigationWidth: number,
  clearLogOnTest: boolean
}
