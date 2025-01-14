import { Immutable } from 'jimu-core'
import type { UseDataSource, ImmutableObject } from 'jimu-core'

interface BaseConfig {
  buttonLabel?: string
  messageUseDataSource: UseDataSource
  actionUseDataSource: UseDataSource
  sqlExprObj?: any
  enabledDataRelationShip?: boolean
  connectionType?: any
  enableQueryWithCurrentExtent?: boolean
}

export type Config = ImmutableObject<BaseConfig>

export const defaultConfig: Config = Immutable({
  buttonLabel: 'Select File',
  messageUseDataSource: {
    dataSourceId: '',
    mainDataSourceId: '',
    rootDataSourceId: ''
  },
  actionUseDataSource: {
    dataSourceId: '',
    mainDataSourceId: '',
    rootDataSourceId: ''
  }
}) as Config
