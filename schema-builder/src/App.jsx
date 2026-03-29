import { useState, useMemo } from 'react'
import Sidebar from './components/Sidebar'
import PresetToolbar from './components/PresetToolbar'
import DynamicForm from './components/DynamicForm'
import OutputPanel from './components/OutputPanel'
import ValidationPanel from './components/ValidationPanel'
import { buildSchema, formatOutput } from './utils/graphHelpers'
import { validate } from './utils/validators'
import { EXAMPLES } from './utils/exampleData'

export default function App() {
  const [activePreset, setActivePreset] = useState('homepage')
  const [formData, setFormData] = useState({})
  const [outputMode, setOutputMode] = useState('graph')
  const [mobilePanel, setMobilePanel] = useState('form') // 'form' | 'output' for mobile

  // Validation
  const { errors, warnings } = useMemo(
    () => validate(activePreset, formData),
    [activePreset, formData]
  )

  // Schema generation
  const schema = useMemo(
    () => buildSchema(activePreset, formData, outputMode),
    [activePreset, formData, outputMode]
  )

  const output = useMemo(
    () => formatOutput(schema, outputMode),
    [schema, outputMode]
  )

  function handlePresetChange(key) {
    setActivePreset(key)
    setFormData({})
  }

  function handleLoadExample() {
    const example = EXAMPLES[activePreset]
    if (example) setFormData({ ...example })
  }

  function handleClear() {
    setFormData({})
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activePreset={activePreset} onSelect={handlePresetChange} />

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row min-w-0">
        {/* Mobile tab switcher */}
        <div className="lg:hidden flex border-b border-gray-200 bg-white">
          <button
            onClick={() => setMobilePanel('form')}
            className={`flex-1 py-2.5 text-xs font-semibold text-center ${mobilePanel === 'form' ? 'text-orange-600 border-b-2 border-orange-500' : 'text-gray-500'}`}
          >
            Form
          </button>
          <button
            onClick={() => setMobilePanel('output')}
            className={`flex-1 py-2.5 text-xs font-semibold text-center ${mobilePanel === 'output' ? 'text-orange-600 border-b-2 border-orange-500' : 'text-gray-500'}`}
          >
            Output {output ? `(${errors.length === 0 ? '✓' : errors.length + ' errors'})` : ''}
          </button>
        </div>

        {/* Form Panel */}
        <div className={`flex-1 overflow-y-auto p-6 ${mobilePanel === 'output' ? 'hidden lg:block' : ''}`}>
          <PresetToolbar
            onLoadExample={handleLoadExample}
            onClear={handleClear}
            outputMode={outputMode}
            onOutputModeChange={setOutputMode}
          />
          <ValidationPanel errors={errors} warnings={warnings} />
          <div className="mt-4">
            <DynamicForm
              presetKey={activePreset}
              formData={formData}
              onChange={setFormData}
            />
          </div>
        </div>

        {/* Output Panel */}
        <div className={`lg:w-[480px] xl:w-[540px] flex-shrink-0 bg-white border-l border-gray-200 lg:h-screen lg:sticky lg:top-0 p-5 overflow-y-auto ${mobilePanel === 'form' ? 'hidden lg:block' : ''}`}>
          <OutputPanel output={output} hasErrors={errors.length > 0} />
        </div>
      </div>
    </div>
  )
}
