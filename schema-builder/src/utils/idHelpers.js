// Consistent @id generator for entity cross-referencing
export function orgId(baseUrl) {
  return `${stripTrailing(baseUrl)}#organization`
}

export function websiteId(baseUrl) {
  return `${stripTrailing(baseUrl)}#website`
}

export function webpageId(pageUrl) {
  return `${stripTrailing(pageUrl)}#webpage`
}

export function articleId(pageUrl) {
  return `${stripTrailing(pageUrl)}#article`
}

export function faqId(pageUrl) {
  return `${stripTrailing(pageUrl)}#faq`
}

export function breadcrumbId(pageUrl) {
  return `${stripTrailing(pageUrl)}#breadcrumb`
}

export function personId(baseUrl, name) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')
  return `${stripTrailing(baseUrl)}#person-${slug}`
}

export function serviceId(baseUrl, name) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')
  return `${stripTrailing(baseUrl)}#service-${slug}`
}

export function reviewId(pageUrl) {
  return `${stripTrailing(pageUrl)}#review`
}

export function contactPointId(baseUrl) {
  return `${stripTrailing(baseUrl)}#contact`
}

function stripTrailing(url) {
  return (url || 'https://example.com').replace(/\/+$/, '')
}

// Remove undefined/null/empty values recursively
export function clean(obj) {
  if (Array.isArray(obj)) {
    const arr = obj.map(clean).filter(v => v !== undefined && v !== null)
    return arr.length > 0 ? arr : undefined
  }
  if (obj && typeof obj === 'object') {
    const result = {}
    for (const [key, value] of Object.entries(obj)) {
      const cleaned = clean(value)
      if (cleaned !== undefined && cleaned !== null && cleaned !== '') {
        result[key] = cleaned
      }
    }
    return Object.keys(result).length > 0 ? result : undefined
  }
  return obj
}

// Split comma-separated string into trimmed array
export function splitList(str) {
  if (!str) return undefined
  const items = str.split(',').map(s => s.trim()).filter(Boolean)
  return items.length > 0 ? items : undefined
}
