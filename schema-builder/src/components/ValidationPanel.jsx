export default function ValidationPanel({ errors, warnings }) {
  if (errors.length === 0 && warnings.length === 0) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 bg-green-50 border border-green-200 rounded-lg text-xs text-green-700">
        <span>✓</span> All required fields present
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {errors.length > 0 && (
        <div className="px-3 py-2 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-xs font-semibold text-red-700 mb-1">Required Fields Missing</p>
          <ul className="text-xs text-red-600 space-y-0.5">
            {errors.map((e, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <span className="text-red-400">✕</span> {e}
              </li>
            ))}
          </ul>
        </div>
      )}
      {warnings.length > 0 && (
        <div className="px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-xs font-semibold text-amber-700 mb-1">Recommended for SEO</p>
          <ul className="text-xs text-amber-600 space-y-0.5">
            {warnings.slice(0, 5).map((w, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <span className="text-amber-400">!</span> {w}
              </li>
            ))}
            {warnings.length > 5 && (
              <li className="text-amber-400">+{warnings.length - 5} more</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
