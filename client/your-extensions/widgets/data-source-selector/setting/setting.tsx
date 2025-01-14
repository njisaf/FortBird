/** @jsx jsx */
import { React, jsx, Immutable, DataSourceTypes } from 'jimu-core'
import { BaseWidgetSetting, AllWidgetSettingProps } from 'jimu-for-builder'
import { TextInput } from 'jimu-ui'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import { IMConfig } from '../src/config'

export default class Setting extends BaseWidgetSetting<AllWidgetSettingProps<IMConfig>, any> {
  supportedTypes = Immutable([DataSourceTypes.CSV])

  onSettingChange = (key: string, value: any) => {
    const newConfig = this.props.config.set(key, value)
    this.props.onSettingChange({
      id: this.props.id,
      config: newConfig
    })
  }

  onDataSourceChange = (useDataSources: any) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: useDataSources
    })
  }

  render() {
    const { config, useDataSources } = this.props

    return (
      <div className="widget-setting p-3">
        <div className="mb-3">
          <label className="setting-label d-flex">
            Button Label
          </label>
          <TextInput
            className="w-100"
            placeholder="Select CSV File"
            value={config.buttonLabel || ''}
            onChange={evt => 
              this.onSettingChange('buttonLabel', evt.target.value)
            }
          />
        </div>

        <div className="mb-3">
          <label className="setting-label d-flex">
            Data Source
          </label>
          <DataSourceSelector
            types={this.supportedTypes}
            useDataSources={useDataSources}
            onChange={this.onDataSourceChange}
            widgetId={this.props.id}
          />
        </div>
      </div>
    )
  }
}
