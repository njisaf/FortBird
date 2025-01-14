import { type UseDataSource, type ImmutableObject } from 'jimu-core'

export interface Config {
  buttonLabel?: string
  useDataSources?: UseDataSource[]
}

export type IMConfig = ImmutableObject<Config>

export const defaultConfig: IMConfig = {
  buttonLabel: 'Select CSV File'
} as IMConfig
