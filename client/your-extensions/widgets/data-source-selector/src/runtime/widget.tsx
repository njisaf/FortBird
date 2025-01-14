/** @jsx jsx */
import { React, jsx } from 'jimu-core'
import type { AllWidgetProps, UseDataSource, ImmutableArray } from 'jimu-core'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import type { DataSourceSelectorProps } from 'jimu-ui/advanced/data-source-selector'
import type { Config } from '../config'

export interface Props extends AllWidgetProps<Config> {
  useDataSources?: ImmutableArray<UseDataSource>
  onSettingChange?: (setting: any) => void
}

export interface State {
  useDataSources?: ImmutableArray<UseDataSource>
}

class Widget extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      useDataSources: props.useDataSources
    }
  }

  handleDataSourceChange = (useDataSources: UseDataSource[]): void => {
    console.log('Selected Data Source:', useDataSources)
    // Handle the selected data source
    if (this.props.onSettingChange) {
      this.props.onSettingChange({
        id: this.props.id,
        useDataSources: useDataSources
      })
    }
  }

  render (): jsx.JSX.Element {
    const { config } = this.props
    const { buttonLabel = 'Select File' } = config

    const selectorProps: DataSourceSelectorProps = {
      className: 'data-source-selector',
      buttonLabel,
      useDataSourcesEnabled: true,
      isMultiple: false, // Enforce single selection
      types: ['FILE'] as any, // Only allow file data sources
      onChange: this.handleDataSourceChange,
      // Disable non-file upload options
      disableDataSourceList: true, // Disable existing data source list
      disableDataView: true, // Disable data view options
      hideAddDataButton: true, // Hide add data button
      hideTabs: ['ADDED', 'OUTPUT'] as any, // Hide unnecessary tabs
      mustUseDataSource: true, // Force data source selection
      useDataSources: this.state.useDataSources,
      widgetId: this.props.id
    }

    return (
      <div className="widget-demo jimu-widget m-2">
        <p>buttonLabel: {buttonLabel}</p>
        <DataSourceSelector {...selectorProps} />
      </div>
    )
  }
}

export default Widget
