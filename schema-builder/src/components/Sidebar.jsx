import { PRESETS } from '../data/presets'

export default function Sidebar({ activePreset, onSelect }) {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0 bg-white border-r border-gray-200 lg:h-screen lg:sticky lg:top-0 overflow-y-auto">
      <div className="p-5 border-b border-gray-200">
        <h1 className="text-lg font-bold text-gray-900 leading-tight">
          <span className="text-orange-500">Rehab</span> Schema Engine
        </h1>
        <p className="text-xs text-gray-500 mt-1">JSON-LD Generator for Treatment SEO</p>
      </div>

      <nav className="p-3">
        <p className="px-3 py-2 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Page Presets</p>
        {PRESETS.map(preset => (
          <button
            key={preset.key}
            onClick={() => onSelect(preset.key)}
            className={`schema-type-btn ${activePreset === preset.key ? 'active' : 'text-gray-700'}`}
          >
            <span className="flex items-center gap-2.5">
              <span className="text-base">{preset.icon}</span>
              <span>
                <span className="block text-sm font-medium">{preset.label}</span>
                <span className={`block text-[10px] leading-tight mt-0.5 ${activePreset === preset.key ? 'text-orange-100' : 'text-gray-400'}`}>
                  {preset.desc}
                </span>
              </span>
            </span>
          </button>
        ))}
      </nav>
    </aside>
  )
}
