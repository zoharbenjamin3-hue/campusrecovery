import * as gen from './schemaGenerators'

// Map preset keys to their graph builder functions
const BUILDERS = {
  homepage: gen.buildHomepageGraph,
  location: gen.buildLocationGraph,
  service: gen.buildServiceGraph,
  drugTreatment: gen.buildDrugTreatmentGraph,
  insurance: gen.buildInsuranceGraph,
  contact: gen.buildContactGraph,
  article: gen.buildArticleGraph,
  provider: gen.buildProviderGraph
}

// Build schema output for a given preset and form data
export function buildSchema(presetKey, data, outputMode = 'graph') {
  const builder = BUILDERS[presetKey]
  if (!builder) return null

  const result = builder(data)
  if (!result) return null

  if (outputMode === 'graph') {
    return result
  }

  if (outputMode === 'separate') {
    // Return array of individual schema blocks
    const graph = result['@graph'] || [result]
    return graph.map(item => ({
      '@context': 'https://schema.org',
      ...item
    }))
  }

  // single — return first entity only with context
  if (result['@graph'] && result['@graph'].length > 0) {
    return {
      '@context': 'https://schema.org',
      ...result['@graph'][0]
    }
  }

  return result
}

// Format output as string(s) for display
export function formatOutput(schema, outputMode) {
  if (!schema) return ''

  if (outputMode === 'separate' && Array.isArray(schema)) {
    return schema.map(s => JSON.stringify(s, null, 2)).join('\n\n')
  }

  return JSON.stringify(schema, null, 2)
}

// Generate the HTML script tag wrapper
export function wrapInScript(jsonString) {
  return `<script type="application/ld+json">\n${jsonString}\n</script>`
}
