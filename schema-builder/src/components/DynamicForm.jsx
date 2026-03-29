import { PRESETS } from '../data/presets'

export default function DynamicForm({ presetKey, formData, onChange }) {
  const preset = PRESETS.find(p => p.key === presetKey)
  if (!preset) return null

  function handleChange(key, value) {
    onChange({ ...formData, [key]: value })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span>{preset.icon}</span>
          {preset.label}
        </h2>
        <p className="text-xs text-gray-500 mt-1">{preset.desc}</p>
      </div>

      {preset.sections.map((section, si) => (
        <fieldset key={si} className="space-y-3">
          <legend className="text-xs font-semibold text-gray-400 uppercase tracking-wider pb-1 border-b border-gray-100">
            {section.title}
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {section.fields.map(field => (
              <div key={field.key} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  {field.label}
                  {field.required && <span className="text-red-400 ml-0.5">*</span>}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    value={formData[field.key] || ''}
                    onChange={e => handleChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    rows={3}
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-400 outline-none transition-all resize-y"
                  />
                ) : field.options ? (
                  <select
                    value={formData[field.key] || field.options[0]}
                    onChange={e => handleChange(field.key, e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-400 outline-none transition-all"
                  >
                    {field.options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type || 'text'}
                    value={formData[field.key] || ''}
                    onChange={e => handleChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-400 outline-none transition-all"
                  />
                )}
              </div>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  )
}
