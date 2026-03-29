import { useState } from 'react'
import { wrapInScript } from '../utils/graphHelpers'

export default function OutputPanel({ output, hasErrors }) {
  const [copied, setCopied] = useState(false)
  const [copiedHtml, setCopiedHtml] = useState(false)

  if (!output) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-400 text-sm">
        Select a preset and fill in fields to generate schema
      </div>
    )
  }

  async function copyJson() {
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  async function copyHtml() {
    await navigator.clipboard.writeText(wrapInScript(output))
    setCopiedHtml(true)
    setTimeout(() => setCopiedHtml(false), 2000)
  }

  function downloadJson() {
    const blob = new Blob([output], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'schema.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  // Count entities in graph
  let entityCount = 0
  try {
    const parsed = JSON.parse(output)
    if (parsed['@graph']) entityCount = parsed['@graph'].length
    else entityCount = 1
  } catch {}

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200">
        <div>
          <h3 className="text-sm font-bold text-gray-900">JSON-LD Output</h3>
          <p className="text-[10px] text-gray-400">
            {entityCount} entit{entityCount === 1 ? 'y' : 'ies'} &middot; {output.length.toLocaleString()} chars
          </p>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={copyJson}
            className="px-2.5 py-1 text-[11px] font-medium bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            {copied ? '✓ Copied' : 'Copy JSON'}
          </button>
          <button
            onClick={copyHtml}
            className="px-2.5 py-1 text-[11px] font-medium bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            {copiedHtml ? '✓ Copied' : 'Copy HTML'}
          </button>
          <button
            onClick={downloadJson}
            className="px-2.5 py-1 text-[11px] font-medium bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
          >
            ↓ Download
          </button>
        </div>
      </div>

      {/* Warning */}
      {hasErrors && (
        <div className="mb-3 px-3 py-2 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600">
          Schema has validation errors — output may not pass Rich Results Test
        </div>
      )}

      {/* Code */}
      <div className="flex-1 overflow-auto">
        <pre className="text-[11px] leading-relaxed text-gray-800 font-mono whitespace-pre bg-gray-50 border border-gray-200 rounded-lg p-4 min-h-[200px]">
          {output}
        </pre>
      </div>
    </div>
  )
}
