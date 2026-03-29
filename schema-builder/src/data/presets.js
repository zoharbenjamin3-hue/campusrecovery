// Preset definitions: label, icon, description, form fields, generator key
export const PRESETS = [
  {
    key: 'homepage',
    label: 'Homepage',
    icon: '🏠',
    desc: 'Organization + MedicalOrg + LocalBusiness + WebSite + Breadcrumb',
    sections: [
      { title: 'Organization Info', fields: ORG_FIELDS },
      { title: 'Address & Location', fields: ADDRESS_FIELDS },
      { title: 'Contact & Hours', fields: CONTACT_FIELDS },
      { title: 'Credentials & Accreditation', fields: CREDENTIAL_FIELDS },
      { title: 'Ratings', fields: RATING_FIELDS }
    ]
  },
  {
    key: 'location',
    label: 'Location Page',
    icon: '📍',
    desc: 'MedicalOrg + Place + Service + FAQ + Breadcrumb',
    sections: [
      { title: 'Organization Info', fields: ORG_FIELDS },
      { title: 'Address & Location', fields: ADDRESS_FIELDS },
      { title: 'Page Details', fields: PAGE_FIELDS },
      { title: 'Service', fields: SERVICE_FIELDS },
      { title: 'FAQ', fields: FAQ_FIELDS }
    ]
  },
  {
    key: 'service',
    label: 'Service Page',
    icon: '⚙️',
    desc: 'Service + MedicalOrg + FAQ + Breadcrumb',
    sections: [
      { title: 'Organization Info', fields: ORG_FIELDS },
      { title: 'Page Details', fields: PAGE_FIELDS },
      { title: 'Service Details', fields: SERVICE_FIELDS },
      { title: 'FAQ', fields: FAQ_FIELDS }
    ]
  },
  {
    key: 'drugTreatment',
    label: 'Drug Treatment Center',
    icon: '💊',
    desc: 'MedicalOrg + LocalBusiness + Service + FAQ + Review + Breadcrumb',
    sections: [
      { title: 'Organization Info', fields: ORG_FIELDS },
      { title: 'Address & Location', fields: ADDRESS_FIELDS },
      { title: 'Credentials', fields: CREDENTIAL_FIELDS },
      { title: 'Page Details', fields: PAGE_FIELDS },
      { title: 'Service', fields: SERVICE_FIELDS },
      { title: 'Review', fields: REVIEW_FIELDS },
      { title: 'Ratings', fields: RATING_FIELDS },
      { title: 'FAQ', fields: FAQ_FIELDS }
    ]
  },
  {
    key: 'insurance',
    label: 'Insurance Page',
    icon: '🛡️',
    desc: 'WebPage + Service + FAQ + Breadcrumb',
    sections: [
      { title: 'Organization Info', fields: ORG_FIELDS.slice(0, 3) },
      { title: 'Page Details', fields: PAGE_FIELDS },
      { title: 'Service', fields: SERVICE_FIELDS },
      { title: 'FAQ', fields: FAQ_FIELDS }
    ]
  },
  {
    key: 'contact',
    label: 'Contact Page',
    icon: '📞',
    desc: 'MedicalOrg + ContactPage + ContactPoint + Breadcrumb',
    sections: [
      { title: 'Organization Info', fields: ORG_FIELDS },
      { title: 'Address & Location', fields: ADDRESS_FIELDS },
      { title: 'Contact Details', fields: CONTACT_FIELDS },
      { title: 'Page Details', fields: PAGE_FIELDS }
    ]
  },
  {
    key: 'article',
    label: 'Blog Article',
    icon: '📝',
    desc: 'Article + Person + Publisher + Breadcrumb',
    sections: [
      { title: 'Organization Info', fields: ORG_FIELDS.slice(0, 3) },
      { title: 'Article Details', fields: ARTICLE_FIELDS },
      { title: 'Author & Editorial', fields: AUTHOR_FIELDS }
    ]
  },
  {
    key: 'provider',
    label: 'Provider / Team',
    icon: '👨‍⚕️',
    desc: 'Person + MedicalOrg + ProfilePage + Breadcrumb',
    sections: [
      { title: 'Organization Info', fields: ORG_FIELDS.slice(0, 3) },
      { title: 'Provider Details', fields: PROVIDER_FIELDS },
      { title: 'Page Details', fields: PAGE_FIELDS }
    ]
  }
]

// ── Field groups ──

const ORG_FIELDS = [
  { key: 'name', label: 'Facility Name', required: true, placeholder: 'Campus Recovery Center' },
  { key: 'url', label: 'Website URL', required: true, placeholder: 'https://campusrecoverycenter.com/' },
  { key: 'description', label: 'Description', type: 'textarea', placeholder: 'Evidence-based addiction and mental health treatment...' },
  { key: 'legalName', label: 'Legal Business Name', placeholder: 'Campus Recovery Center LLC' },
  { key: 'logo', label: 'Logo URL', placeholder: 'https://example.com/logo.png' },
  { key: 'image', label: 'Image URL', placeholder: 'https://example.com/photo.jpg' },
  { key: 'sameAs', label: 'Social Profiles (comma-separated)', type: 'textarea', placeholder: 'https://facebook.com/..., https://instagram.com/...' }
]

const ADDRESS_FIELDS = [
  { key: 'streetAddress', label: 'Street Address', placeholder: '19 S Dixie Hwy' },
  { key: 'city', label: 'City', placeholder: 'Lake Worth Beach' },
  { key: 'state', label: 'State', placeholder: 'FL' },
  { key: 'zip', label: 'ZIP Code', placeholder: '33460' },
  { key: 'country', label: 'Country', placeholder: 'US' },
  { key: 'latitude', label: 'Latitude', placeholder: '26.6168' },
  { key: 'longitude', label: 'Longitude', placeholder: '-80.0557' }
]

const CONTACT_FIELDS = [
  { key: 'telephone', label: 'Main Phone', required: true, placeholder: '+1-877-995-0102' },
  { key: 'intakePhone', label: 'Intake / Admissions Phone', placeholder: '+1-877-995-0102' },
  { key: 'email', label: 'Email', placeholder: 'info@campusrecoverycenter.com' },
  { key: 'hours', label: 'Hours (e.g. 24/7)', placeholder: '24/7' },
  { key: 'languages', label: 'Languages (comma-separated)', placeholder: 'English, Spanish' }
]

const CREDENTIAL_FIELDS = [
  { key: 'accreditation', label: 'Accredited By', placeholder: 'The Joint Commission' },
  { key: 'credential', label: 'Credential / Certification', placeholder: 'Gold Seal of Approval' },
  { key: 'medicalSpecialty', label: 'Medical Specialties (comma-separated)', placeholder: 'Addiction Medicine, Psychiatry' },
  { key: 'levelsOfCare', label: 'Levels of Care (comma-separated)', placeholder: 'PHP, IOP, Outpatient, MAT' },
  { key: 'conditionsTreated', label: 'Conditions Treated (comma-separated)', placeholder: 'Alcohol, Opioids, Depression, Anxiety' },
  { key: 'therapiesOffered', label: 'Therapies Offered (comma-separated)', placeholder: 'CBT, DBT, MAT, Group Therapy' },
  { key: 'insuranceAccepted', label: 'Insurance Accepted (comma-separated)', placeholder: 'Aetna, BCBS, Cigna, UHC' },
  { key: 'ageGroups', label: 'Age Groups Served', placeholder: 'Adults 18+' }
]

const RATING_FIELDS = [
  { key: 'ratingValue', label: 'Average Rating', placeholder: '4.8' },
  { key: 'reviewCount', label: 'Total Review Count', placeholder: '48' }
]

const PAGE_FIELDS = [
  { key: 'pageUrl', label: 'Page URL', placeholder: 'https://campusrecoverycenter.com/services/' },
  { key: 'pageTitle', label: 'Page Title', placeholder: 'Our Services — Campus Recovery Center' },
  { key: 'datePublished', label: 'Date Published', type: 'date' },
  { key: 'dateModified', label: 'Date Modified', type: 'date' }
]

const SERVICE_FIELDS = [
  { key: 'serviceName', label: 'Service Name', placeholder: 'Partial Hospitalization Program (PHP)' },
  { key: 'serviceDescription', label: 'Service Description', type: 'textarea', placeholder: '5 hours/day, 7 days/week of structured clinical programming...' },
  { key: 'serviceType', label: 'Service Type', placeholder: 'MedicalTherapy' },
  { key: 'serviceCategory', label: 'Category', placeholder: 'Addiction Treatment' },
  { key: 'serviceUrl', label: 'Service Page URL', placeholder: 'https://campusrecoverycenter.com/services/' },
  { key: 'areaServed', label: 'Area Served', placeholder: 'Palm Beach County, FL' }
]

const FAQ_FIELDS = [
  { key: 'q1', label: 'Question 1', placeholder: 'What insurance do you accept?' },
  { key: 'a1', label: 'Answer 1', type: 'textarea', placeholder: 'We accept most major insurance...' },
  { key: 'q2', label: 'Question 2', placeholder: 'What programs do you offer?' },
  { key: 'a2', label: 'Answer 2', type: 'textarea', placeholder: 'We offer PHP, IOP, and OP...' },
  { key: 'q3', label: 'Question 3', placeholder: '' },
  { key: 'a3', label: 'Answer 3', type: 'textarea', placeholder: '' },
  { key: 'q4', label: 'Question 4', placeholder: '' },
  { key: 'a4', label: 'Answer 4', type: 'textarea', placeholder: '' },
  { key: 'q5', label: 'Question 5', placeholder: '' },
  { key: 'a5', label: 'Answer 5', type: 'textarea', placeholder: '' }
]

const ARTICLE_FIELDS = [
  { key: 'headline', label: 'Headline', required: true, placeholder: 'Is It Safe To Go To A Drug Rehab In Florida?' },
  { key: 'articleDescription', label: 'Description', type: 'textarea', placeholder: 'Article description...' },
  { key: 'pageUrl', label: 'Article URL', required: true, placeholder: 'https://campusrecoverycenter.com/single-post/...' },
  { key: 'articleImage', label: 'Featured Image URL', placeholder: 'https://example.com/image.jpg' },
  { key: 'articleType', label: 'Type', placeholder: 'Article', options: ['Article', 'BlogPosting', 'MedicalWebPage'] },
  { key: 'articleSection', label: 'Section', placeholder: 'Addiction Research' },
  { key: 'keywords', label: 'Keywords (comma-separated)', placeholder: 'addiction treatment, rehab, recovery' },
  { key: 'wordCount', label: 'Word Count', placeholder: '1400' },
  { key: 'datePublished', label: 'Date Published', type: 'date', required: true },
  { key: 'dateModified', label: 'Date Modified', type: 'date' }
]

const AUTHOR_FIELDS = [
  { key: 'authorName', label: 'Author Name', required: true, placeholder: 'Freddy Moldt' },
  { key: 'authorTitle', label: 'Author Title', placeholder: 'CEO' },
  { key: 'editorName', label: 'Editor Name', placeholder: 'Devin Scheller' },
  { key: 'reviewerName', label: 'Medical Reviewer', placeholder: 'Sahil Talwar, PA' }
]

const REVIEW_FIELDS = [
  { key: 'reviewAuthor', label: 'Reviewer Name', placeholder: 'Michael T.' },
  { key: 'reviewBody', label: 'Review Text', type: 'textarea', placeholder: 'The team at Campus Recovery truly changed my life...' },
  { key: 'reviewRating', label: 'Rating (1-5)', placeholder: '5' },
  { key: 'reviewDate', label: 'Review Date', type: 'date' }
]

const PROVIDER_FIELDS = [
  { key: 'providerName', label: 'Provider Name', required: true, placeholder: 'Freddy Moldt' },
  { key: 'providerTitle', label: 'Job Title', placeholder: 'Chief Executive Officer' },
  { key: 'providerBio', label: 'Bio', type: 'textarea', placeholder: 'Background and experience...' },
  { key: 'providerImage', label: 'Photo URL', placeholder: 'https://example.com/photo.jpg' },
  { key: 'providerUrl', label: 'Profile URL', placeholder: 'https://campusrecoverycenter.com/our-team/' }
]
