import { clean, splitList, orgId, websiteId, webpageId, articleId, faqId, breadcrumbId, personId, serviceId, contactPointId } from './idHelpers'

// ── Address helper ──
function buildAddress(d) {
  if (!d.streetAddress && !d.city) return undefined
  return clean({
    '@type': 'PostalAddress',
    streetAddress: d.streetAddress,
    addressLocality: d.city,
    addressRegion: d.state,
    postalCode: d.zip,
    addressCountry: d.country || 'US'
  })
}

// ── Geo helper ──
function buildGeo(d) {
  if (!d.latitude || !d.longitude) return undefined
  return {
    '@type': 'GeoCoordinates',
    latitude: parseFloat(d.latitude),
    longitude: parseFloat(d.longitude)
  }
}

// ── ContactPoint helper ──
export function generateContactPoint(d) {
  if (!d.telephone && !d.intakePhone) return undefined
  return clean({
    '@type': 'ContactPoint',
    '@id': contactPointId(d.url),
    telephone: d.intakePhone || d.telephone,
    contactType: 'admissions',
    areaServed: d.state ? { '@type': 'AdministrativeArea', name: d.state } : 'US',
    availableLanguage: splitList(d.languages) || ['English'],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59'
    }
  })
}

// ── Organization / MedicalOrganization ──
export function generateOrganization(d) {
  return clean({
    '@type': ['MedicalOrganization', 'LocalBusiness'],
    '@id': orgId(d.url),
    name: d.name,
    legalName: d.legalName || undefined,
    url: d.url,
    telephone: d.telephone,
    email: d.email,
    description: d.description,
    image: d.logo || d.image || undefined,
    logo: d.logo || undefined,
    priceRange: d.priceRange || '$$',
    address: buildAddress(d),
    geo: buildGeo(d),
    contactPoint: generateContactPoint(d),
    sameAs: splitList(d.sameAs),
    openingHoursSpecification: d.hours ? {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59'
    } : undefined,
    isAccreditedBy: d.accreditation ? {
      '@type': 'Organization',
      name: d.accreditation
    } : undefined,
    hasCredential: d.credential ? {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: d.credential
    } : undefined,
    medicalSpecialty: splitList(d.medicalSpecialty),
    availableService: splitList(d.levelsOfCare)?.map(name => ({
      '@type': 'MedicalTherapy',
      name
    })),
    aggregateRating: (d.ratingValue && d.reviewCount) ? {
      '@type': 'AggregateRating',
      ratingValue: parseFloat(d.ratingValue),
      reviewCount: parseInt(d.reviewCount),
      bestRating: 5
    } : undefined
  })
}

// ── WebSite ──
export function generateWebSite(d) {
  return clean({
    '@type': 'WebSite',
    '@id': websiteId(d.url),
    url: d.url,
    name: d.name,
    publisher: { '@id': orgId(d.url) }
  })
}

// ── WebPage ──
export function generateWebPage(d) {
  return clean({
    '@type': d.pageType || 'WebPage',
    '@id': webpageId(d.pageUrl || d.url),
    url: d.pageUrl || d.url,
    name: d.pageTitle || d.name,
    isPartOf: { '@id': websiteId(d.url) },
    about: { '@id': orgId(d.url) },
    datePublished: d.datePublished || undefined,
    dateModified: d.dateModified || undefined,
    inLanguage: 'en-US'
  })
}

// ── Service ──
export function generateService(d, serviceName, serviceDesc) {
  const name = serviceName || d.serviceName || d.name
  return clean({
    '@type': 'Service',
    '@id': serviceId(d.url, name),
    name,
    description: serviceDesc || d.serviceDescription,
    serviceType: d.serviceType || 'MedicalTherapy',
    url: d.serviceUrl || d.pageUrl || d.url,
    category: d.serviceCategory || 'Addiction Treatment',
    provider: { '@id': orgId(d.url) },
    areaServed: d.areaServed ? {
      '@type': 'AdministrativeArea',
      name: d.areaServed
    } : undefined,
    audience: d.ageGroups ? {
      '@type': 'PeopleAudience',
      audienceType: d.ageGroups
    } : undefined
  })
}

// ── Article / BlogPosting ──
export function generateArticle(d) {
  return clean({
    '@type': d.articleType || 'Article',
    '@id': articleId(d.pageUrl || d.url),
    headline: d.headline,
    description: d.articleDescription || d.description,
    url: d.pageUrl || d.url,
    image: d.articleImage || d.image,
    datePublished: d.datePublished,
    dateModified: d.dateModified,
    wordCount: d.wordCount ? parseInt(d.wordCount) : undefined,
    articleSection: d.articleSection,
    keywords: splitList(d.keywords),
    inLanguage: 'en-US',
    author: d.authorName ? {
      '@type': 'Person',
      '@id': personId(d.url, d.authorName),
      name: d.authorName,
      jobTitle: d.authorTitle || undefined,
      worksFor: { '@id': orgId(d.url) }
    } : undefined,
    editor: d.editorName ? {
      '@type': 'Person',
      name: d.editorName
    } : undefined,
    reviewedBy: d.reviewerName ? {
      '@type': 'Person',
      name: d.reviewerName
    } : undefined,
    publisher: { '@id': orgId(d.url) },
    isPartOf: { '@id': websiteId(d.url) },
    mainEntityOfPage: d.pageUrl || d.url
  })
}

// ── Person ──
export function generatePerson(d, name, title) {
  const personName = name || d.providerName || d.authorName
  if (!personName) return undefined
  return clean({
    '@type': 'Person',
    '@id': personId(d.url, personName),
    name: personName,
    jobTitle: title || d.providerTitle || d.authorTitle,
    worksFor: { '@id': orgId(d.url) },
    url: d.providerUrl || undefined,
    description: d.providerBio || undefined,
    image: d.providerImage || undefined
  })
}

// ── FAQPage ──
export function generateFAQ(d) {
  const mainEntity = []
  for (let i = 1; i <= 10; i++) {
    const q = d[`q${i}`]
    const a = d[`a${i}`]
    if (q && a) {
      mainEntity.push({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a }
      })
    }
  }
  if (mainEntity.length === 0) return undefined
  return {
    '@type': 'FAQPage',
    '@id': faqId(d.pageUrl || d.url),
    url: d.pageUrl || d.url,
    mainEntity
  }
}

// ── BreadcrumbList ──
export function generateBreadcrumb(d, items) {
  const breadcrumbs = items || d.breadcrumbs
  if (!breadcrumbs || breadcrumbs.length === 0) return undefined
  return {
    '@type': 'BreadcrumbList',
    '@id': breadcrumbId(d.pageUrl || d.url),
    itemListElement: breadcrumbs.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url || undefined
    }))
  }
}

// ── Review ──
export function generateReview(d) {
  if (!d.reviewAuthor || !d.reviewBody) return undefined
  return clean({
    '@type': 'Review',
    itemReviewed: { '@id': orgId(d.url) },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: d.reviewRating ? parseFloat(d.reviewRating) : 5,
      bestRating: 5
    },
    author: {
      '@type': 'Person',
      name: d.reviewAuthor
    },
    reviewBody: d.reviewBody,
    datePublished: d.reviewDate || undefined
  })
}

// ═══════════════════════════════════════
//  PRESET GRAPH BUILDERS
// ═══════════════════════════════════════

export function buildHomepageGraph(d) {
  const items = [
    generateOrganization(d),
    generateWebSite(d),
    generateWebPage({ ...d, pageUrl: d.url, pageTitle: d.name }),
    generateBreadcrumb(d, [{ name: 'Home', url: d.url }])
  ].filter(Boolean)
  return wrapGraph(items)
}

export function buildLocationGraph(d) {
  const items = [
    generateOrganization(d),
    generateWebPage({ ...d, pageType: 'WebPage' }),
    generateService(d),
    generateFAQ(d),
    generateBreadcrumb(d, [
      { name: 'Home', url: d.url },
      { name: d.locationName || d.city || 'Location', url: d.pageUrl }
    ])
  ].filter(Boolean)
  return wrapGraph(items)
}

export function buildServiceGraph(d) {
  const items = [
    generateOrganization(d),
    generateService(d),
    generateWebPage({ ...d, pageType: 'MedicalWebPage' }),
    generateFAQ(d),
    generateBreadcrumb(d, [
      { name: 'Home', url: d.url },
      { name: 'Services', url: `${d.url}services/` },
      { name: d.serviceName || 'Service', url: d.pageUrl }
    ])
  ].filter(Boolean)
  return wrapGraph(items)
}

export function buildDrugTreatmentGraph(d) {
  const items = [
    generateOrganization(d),
    generateService(d),
    generateFAQ(d),
    generateReview(d),
    generateBreadcrumb(d, [
      { name: 'Home', url: d.url },
      { name: d.serviceName || 'Treatment', url: d.pageUrl }
    ])
  ].filter(Boolean)
  return wrapGraph(items)
}

export function buildInsuranceGraph(d) {
  const items = [
    generateWebPage({ ...d, pageType: 'WebPage', pageTitle: d.pageTitle || 'Insurance Verification' }),
    generateService(d, d.serviceName || 'Insurance Verification', d.serviceDescription || 'Free insurance benefit verification for addiction treatment.'),
    generateFAQ(d),
    generateBreadcrumb(d, [
      { name: 'Home', url: d.url },
      { name: 'Insurance', url: d.pageUrl }
    ])
  ].filter(Boolean)
  return wrapGraph(items)
}

export function buildContactGraph(d) {
  const items = [
    generateOrganization(d),
    generateWebPage({ ...d, pageType: 'ContactPage', pageTitle: d.pageTitle || 'Contact Us' }),
    generateBreadcrumb(d, [
      { name: 'Home', url: d.url },
      { name: 'Contact', url: d.pageUrl }
    ])
  ].filter(Boolean)
  return wrapGraph(items)
}

export function buildArticleGraph(d) {
  const items = [
    generateArticle(d),
    generatePerson(d, d.authorName, d.authorTitle),
    generateBreadcrumb(d, [
      { name: 'Home', url: d.url },
      { name: 'Blog', url: `${d.url}news-updates/` },
      { name: d.headline || 'Article', url: d.pageUrl }
    ])
  ].filter(Boolean)
  return wrapGraph(items)
}

export function buildProviderGraph(d) {
  const items = [
    generatePerson(d, d.providerName, d.providerTitle),
    generateOrganization(d),
    generateWebPage({ ...d, pageType: 'ProfilePage', pageTitle: d.providerName }),
    generateBreadcrumb(d, [
      { name: 'Home', url: d.url },
      { name: 'Our Team', url: `${d.url}our-team/` },
      { name: d.providerName || 'Provider', url: d.pageUrl }
    ])
  ].filter(Boolean)
  return wrapGraph(items)
}

// ── Wrap into @graph ──
function wrapGraph(items) {
  if (!items || items.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@graph': items
  }
}
