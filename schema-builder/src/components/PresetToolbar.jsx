export default function PresetToolbar({ onLoadExample, onClear, outputMode, onOutputModeChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-6 pb-4 border-b border-gray-200">
      <button
        onClick={onLoadExample}
        className="px-3 py-1.5 bg-orange-500 text-white text-xs font-semibold rounded-full hover:bg-orange-600 transition-colors"
      >
        Load Example
      </button>
      <button
        onClick={onClear}
        className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full hover:bg-gray-200 transition-colors"
      >
        Clear
      </button>

      <div className="ml-auto flex items-center gap-1 bg-gray-100 rounded-full p-0.5">
        {[
          { key: 'graph', label: '@graph' },
          { key: 'single', label: 'Single' },
          { key: 'separate', label: 'Separate' }
        ].map(mode => (
          <button
            key={mode.key}
            onClick={() => onOutputModeChange(mode.key)}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
              outputMode === mode.key
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {mode.label}
          </button>
        ))}
      </div>
    </div>
  )
}
