/** @jsx jsx */
import { React, jsx, DataSourceTypes } from 'jimu-core'
import type { AllWidgetProps, UseDataSource } from 'jimu-core'
import _Widget from '../src/runtime/widget'
import { widgetRender, wrapWidget } from 'jimu-for-test'
import type { Config } from '../src/config'

// Mock DataSourceSelector component
jest.mock('jimu-ui/advanced/data-source-selector', () => ({
  DataSourceSelector: jest.fn(props => (
    <div data-testid="mock-data-source-selector">
      <span>Mocked DataSourceSelector</span>
      <span>Button Label: {props.buttonLabel}</span>
      <span>Types: {props.types.join(',')}</span>
      <span>UseDataSources: {JSON.stringify(props.useDataSources)}</span>
    </div>
  ))
}))

const render = widgetRender()

describe('test data-source-selector widget', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders with correct button label and CSV type', () => {
    const mockUseDataSources = [{
      dataSourceId: 'test-ds',
      mainDataSourceId: 'test-ds',
      rootDataSourceId: 'test-ds'
    }]

    const Widget = wrapWidget(_Widget, {
      config: { buttonLabel: 'Test CSV Selector' },
      useDataSources: mockUseDataSources
    })

    const { getByTestId } = render(<Widget widgetId="Widget_1" />)
    const selector = getByTestId('mock-data-source-selector')
    expect(selector).toBeTruthy()
    expect(selector.textContent).toContain('Test CSV Selector')
    expect(selector.textContent).toContain(DataSourceTypes.CSV)
  })

  it('handles data source changes correctly', () => {
    const mockOnSettingChange = jest.fn()
    const mockUseDataSources = [{
      dataSourceId: 'test-ds',
      mainDataSourceId: 'test-ds',
      rootDataSourceId: 'test-ds'
    }]

    const props: AllWidgetProps<Config> = {
      config: { buttonLabel: 'Test CSV Selector' },
      useDataSources: mockUseDataSources,
      widgetId: 'Widget_2',
      onSettingChange: mockOnSettingChange
    } as AllWidgetProps<Config>

    const widget = new _Widget(props)
    widget.handleDataSourceChange([...mockUseDataSources, {
      dataSourceId: 'new-ds',
      mainDataSourceId: 'new-ds',
      rootDataSourceId: 'new-ds'
    }])

    expect(mockOnSettingChange).toHaveBeenCalledWith(expect.objectContaining({
      useDataSources: expect.arrayContaining([...mockUseDataSources, expect.any(Object)])
    }))
  })

  it('verifies settings panel integration', () => {
    const mockUseDataSources = [{
      dataSourceId: 'test-ds',
      mainDataSourceId: 'test-ds',
      rootDataSourceId: 'test-ds'
    }]

    const Widget = wrapWidget(_Widget, {
      config: { buttonLabel: 'Test CSV Selector' },
      useDataSources: mockUseDataSources
    })

    const { getByTestId } = render(<Widget widgetId="Widget_3" />)
    const selector = getByTestId('mock-data-source-selector')
    
    // Verify settings from config are applied
    expect(selector.textContent).toContain('Test CSV Selector')
    expect(selector.textContent).toContain(JSON.stringify(mockUseDataSources))
  })
})
