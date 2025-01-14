/** @jsx jsx */
import { React, jsx, DataSourceTypes } from 'jimu-core'
import type { AllWidgetProps, UseDataSource, ImmutableArray } from 'jimu-core'
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'
import type { DataSourceSelectorProps } from 'jimu-ui/advanced/data-source-selector'
import type { Config } from '../config'

export interface Props extends AllWidgetProps<Config> {
  useDataSources?: ImmutableArray<UseDataSource>
  onSettingChange?: (setting: any) => void
}

interface State {
  useDataSources?: ImmutableArray<UseDataSource>
}

class Widget extends React.PureComponent<Props, State> {
  private readonly supportedTypes = [DataSourceTypes.CSV]
  state: State

  constructor(props: Props) {
    super(props)
    this.state = {
      useDataSources: props.useDataSources
    }
  }

  componentDidUpdate(prevProps: Props): void {
    if (this.props.useDataSources !== prevProps.useDataSources) {
      this.setState({ useDataSources: this.props.useDataSources })
    }
  }

  handleDataSourceChange = (useDataSources: UseDataSource[]): void => {
    if (this.props.onSettingChange) {
      this.props.onSettingChange({
        id: this.props.id,
        useDataSources: useDataSources
      })
    }
  }

  render(): jsx.JSX.Element {
    const { config, useDataSources } = this.props
    const { buttonLabel = 'Select CSV File' } = config || {}

    const selectorProps: DataSourceSelectorProps = {
      className: 'data-source-selector',
      buttonLabel,
      useDataSourcesEnabled: true,
      isMultiple: false,
      types: this.supportedTypes as any,
      onChange: this.handleDataSourceChange,
      disableDataSourceList: true,
      disableDataView: true,
      hideAddDataButton: true,
      hideTabs: ['ADDED', 'OUTPUT'] as any,
      mustUseDataSource: true,
      useDataSources: useDataSources || this.state.useDataSources,
      widgetId: this.props.id
    }

    return (
      <div className="widget-demo jimu-widget m-2">
        <DataSourceSelector {...selectorProps} />
      </div>
    )
  }
}
