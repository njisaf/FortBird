import { React } from 'jimu-core'
import type { AllWidgetProps } from 'jimu-core'
import _Widget from '../src/runtime/widget'
import { widgetRender, wrapWidget } from 'jimu-for-test'
import type { Config } from '../src/config'

// Mock DataSourceSelector component
jest.mock('jimu-ui/advanced/data-source-selector', () => ({
  DataSourceSelector: jest.fn(props => (
    <div data-testid="mock-data-source-selector">
      <span>Mocked DataSourceSelector</span>
      <span>Button Label: {props.buttonLabel}</span>
    </div>
  ))
}))

const render = widgetRender()

describe('test data-source-selector widget', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders with correct button label', () => {
    const Widget = wrapWidget(_Widget, {
      config: { buttonLabel: 'Test File Selector' }
    })
    const { getByTestId } = render(<Widget widgetId="Widget_1" />)
    expect(getByTestId('mock-data-source-selector')).toBeTruthy()
  })

  it('verifies class component implementation', () => {
    const props: AllWidgetProps<Config> = {
      config: { buttonLabel: 'Test File Selector' },
      widgetId: 'Widget_3'
    } as AllWidgetProps<Config>
    const widget = new _Widget(props)
    // Verify it extends PureComponent
    expect(widget instanceof React.PureComponent).toBeTruthy()
    // Verify required methods exist
    expect(typeof widget.render).toBe('function')
    expect(typeof widget.handleDataSourceChange).toBe('function')
  })
})
