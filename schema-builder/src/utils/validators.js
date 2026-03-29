// Validation rules per preset type
const RULES = {
  homepage: {
    required: ['name', 'url', 'telephone'],
    recommended: ['description', 'streetAddress', 'city', 'state', 'zip', 'latitude', 'longitude', 'logo', 'accreditation', 'sameAs']
  },
  location: {
    required: ['name', 'url', 'telephone', 'streetAddress', 'city', 'state'],
    recommended: ['latitude', 'longitude', 'pageUrl', 'description', 'accreditation', 'levelsOfCare']
  },
  service: {
    required: ['name', 'url', 'serviceName', 'pageUrl'],
    recommended: ['serviceDescription', 'telephone', 'areaServed', 'accreditation']
  },
  drugTreatment: {
    required: ['name', 'url', 'telephone'],
    recommended: ['serviceName', 'pageUrl', 'accreditation', 'ratingValue', 'reviewCount', 'levelsOfCare']
  },
  insurance: {
    required: ['url', 'pageUrl'],
    recommended: ['name', 'serviceName', 'telephone']
  },
  contact: {
    required: ['name', 'url', 'telephone', 'streetAddress', 'city'],
    recommended: ['email', 'pageUrl', 'latitude', 'longitude']
  },
  article: {
    required: ['url', 'headline', 'datePublished', 'authorName'],
    recommended: ['pageUrl', 'articleDescription', 'dateModified', 'editorName', 'reviewerName', 'articleImage', 'keywords']
  },
  provider: {
    required: ['url', 'providerName'],
    recommended: ['providerTitle', 'providerBio', 'pageUrl', 'providerImage', 'name']
  }
}

const FIELD_LABELS = {
  name: 'Facility Name',
  url: 'Website URL',
  telephone: 'Phone Number',
  streetAddress: 'Street Address',
  city: 'City',
  state: 'State',
  zip: 'ZIP Code',
  latitude: 'Latitude',
  longitude: 'Longitude',
  description: 'Description',
  logo: 'Logo URL',
  accreditation: 'Accreditation',
  sameAs: 'Social Links',
  pageUrl: 'Page URL',
  serviceName: 'Service Name',
  serviceDescription: 'Service Description',
  areaServed: 'Area Served',
  headline: 'Headline',
  datePublished: 'Publish Date',
  dateModified: 'Modified Date',
  authorName: 'Author Name',
  editorName: 'Editor Name',
  reviewerName: 'Medical Reviewer',
  articleDescription: 'Article Description',
  articleImage: 'Article Image',
  keywords: 'Keywords',
  email: 'Email',
  levelsOfCare: 'Levels of Care',
  ratingValue: 'Rating Value',
  reviewCount: 'Review Count',
  providerName: 'Provider Name',
  providerTitle: 'Provider Title',
  providerBio: 'Provider Bio',
  providerImage: 'Provider Image',
  pageTitle: 'Page Title'
}

export function validate(presetKey, data) {
  const rules = RULES[presetKey]
  if (!rules) return { errors: [], warnings: [] }

  const errors = []
  const warnings = []

  for (const field of rules.required) {
    if (!data[field] || !data[field].toString().trim()) {
      errors.push(`${FIELD_LABELS[field] || field} is required`)
    }
  }

  for (const field of rules.recommended) {
    if (!data[field] || !data[field].toString().trim()) {
      warnings.push(`${FIELD_LABELS[field] || field} is recommended for best SEO`)
    }
  }

  return { errors, warnings }
}
