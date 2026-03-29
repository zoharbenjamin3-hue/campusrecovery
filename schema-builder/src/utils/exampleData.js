const BASE = {
  name: 'Campus Recovery Center',
  legalName: 'Campus Recovery Center LLC',
  url: 'https://campusrecoverycenter.com/',
  telephone: '+1-877-995-0102',
  intakePhone: '+1-877-995-0102',
  email: 'info@campusrecoverycenter.com',
  streetAddress: '19 S Dixie Hwy',
  city: 'Lake Worth Beach',
  state: 'FL',
  zip: '33460',
  country: 'US',
  latitude: '26.6168',
  longitude: '-80.0557',
  logo: 'https://campusrecoverycenter.com/images/logo.png',
  image: 'https://campusrecoverycenter.com/images/campus-recovery-center-og.jpg',
  hours: '24/7',
  priceRange: '$$',
  description: 'Campus Recovery Center offers evidence-based addiction and mental health treatment in Lake Worth Beach, Florida. Joint Commission accredited PHP, IOP, and outpatient programs with medication-assisted treatment.',
  accreditation: 'The Joint Commission',
  credential: 'Gold Seal of Approval',
  medicalSpecialty: 'Addiction Medicine, Psychiatry, Behavioral Health',
  levelsOfCare: 'Partial Hospitalization Program, Intensive Outpatient Program, Outpatient Program, Medication-Assisted Treatment',
  conditionsTreated: 'Alcohol Addiction, Opioid Use Disorder, Cocaine Addiction, Benzodiazepine Dependence, Dual Diagnosis, Depression, Anxiety, PTSD, Bipolar Disorder',
  therapiesOffered: 'CBT, DBT, Motivational Interviewing, Trauma-Informed Care, MAT, Group Therapy, Family Therapy, 12-Step Facilitation',
  insuranceAccepted: 'Aetna, Blue Cross Blue Shield, Cigna, Humana, United Healthcare, Medicaid, Medicare, Tricare, Ambetter, Molina Healthcare',
  languages: 'English, Spanish',
  ageGroups: 'Adults 18+',
  sameAs: '',
  ratingValue: '4.8',
  reviewCount: '48'
}

export const EXAMPLES = {
  homepage: {
    ...BASE,
    pageUrl: BASE.url
  },

  location: {
    ...BASE,
    pageUrl: 'https://campusrecoverycenter.com/locations/lake-worth-beach/',
    locationName: 'Lake Worth Beach Treatment Center',
    areaServed: 'Palm Beach County, FL',
    serviceName: 'Addiction Treatment Services',
    serviceDescription: 'Comprehensive outpatient addiction and mental health treatment including PHP, IOP, and OP programs in Lake Worth Beach, Florida.',
    q1: 'Where is Campus Recovery Center located?',
    a1: 'Campus Recovery Center is located at 19 S Dixie Hwy, Lake Worth Beach, FL 33460 — easily accessible from anywhere in Palm Beach County.',
    q2: 'What levels of care do you offer?',
    a2: 'We offer Partial Hospitalization (PHP), Intensive Outpatient (IOP), and standard Outpatient (OP) programs, plus Medication-Assisted Treatment (MAT).',
    q3: 'Do you accept walk-ins?',
    a3: 'We recommend calling ahead at (877) 995-0102 so we can prepare for your visit, but our admissions team is available 24/7 to assist you.'
  },

  service: {
    ...BASE,
    pageUrl: 'https://campusrecoverycenter.com/services/',
    serviceName: 'Partial Hospitalization Program (PHP)',
    serviceDescription: 'Our most intensive outpatient level — 5 hours per day, 7 days per week of structured clinical programming including individual therapy, group therapy, CBT, DBT, trauma-informed care, and medication management.',
    serviceType: 'MedicalTherapy',
    serviceCategory: 'Addiction Treatment',
    areaServed: 'Palm Beach County, FL',
    ageGroups: 'Adults 18+',
    q1: 'What is a Partial Hospitalization Program?',
    a1: 'PHP is the most intensive outpatient level of care. At Campus Recovery, PHP includes 5 hours of structured programming per day, 7 days per week, including individual therapy, group therapy, and psychiatric services.',
    q2: 'How long does PHP treatment last?',
    a2: 'PHP treatment typically lasts 2-4 weeks, depending on individual progress and clinical recommendations. Clients step down to IOP as they stabilize.',
    q3: 'Is PHP covered by insurance?',
    a3: 'Yes, most major insurance plans cover PHP. Contact our admissions team at (877) 995-0102 for a free, no-obligation insurance verification.'
  },

  drugTreatment: {
    ...BASE,
    pageUrl: 'https://campusrecoverycenter.com/substance-use-disorder-treatment-services/',
    serviceName: 'Substance Use Disorder Treatment',
    serviceDescription: 'Comprehensive addiction treatment including medical detox referral, PHP, IOP, outpatient, MAT, and dual diagnosis services.',
    areaServed: 'Palm Beach County, FL',
    reviewAuthor: 'Michael T.',
    reviewBody: 'The team at Campus Recovery truly changed my life. The therapists are compassionate and the structure of the IOP program gave me exactly what I needed.',
    reviewRating: '5',
    reviewDate: '2024-06-15',
    q1: 'What substances do you treat?',
    a1: 'We treat alcohol addiction, opioid use disorder, cocaine and stimulant addiction, benzodiazepine dependence, prescription drug abuse, and polysubstance use.',
    q2: 'Do you offer medication-assisted treatment?',
    a2: 'Yes. Our medical team prescribes Vivitrol, Suboxone, and other FDA-approved medications when clinically appropriate to reduce cravings and support recovery.',
    q3: 'What is dual diagnosis treatment?',
    a3: 'Dual diagnosis treatment addresses both substance use disorders and co-occurring mental health conditions simultaneously, which research shows produces better long-term outcomes.'
  },

  insurance: {
    ...BASE,
    pageUrl: 'https://campusrecoverycenter.com/insurance/',
    pageTitle: 'Insurance Verification — Campus Recovery Center',
    serviceName: 'Insurance Verification',
    serviceDescription: 'Free, confidential insurance benefit verification for addiction and mental health treatment. We accept most major insurance plans.',
    q1: 'What insurance do you accept?',
    a1: 'We accept Aetna, Blue Cross Blue Shield, Cigna, Humana, United Healthcare, Medicaid, Medicare, Tricare, Ambetter, Molina Healthcare, and many more. Call for verification.',
    q2: 'How do I verify my insurance?',
    a2: 'Call our admissions team at (877) 995-0102. We verify your benefits at no cost and explain your coverage in plain language within minutes.',
    q3: 'Will I have out-of-pocket costs?',
    a3: 'Coverage varies by plan. Many of our clients have little to no out-of-pocket cost. Our team will explain your specific benefits before treatment begins.'
  },

  contact: {
    ...BASE,
    pageUrl: 'https://campusrecoverycenter.com/contact/',
    pageTitle: 'Contact Campus Recovery Center'
  },

  article: {
    ...BASE,
    pageUrl: 'https://campusrecoverycenter.com/single-post/2024/08/22/is-it-safe-to-go-to-a-drug-rehab-in-florida/',
    headline: 'Is It Safe To Go To A Drug Rehab In Florida?',
    articleDescription: 'Addressing safety concerns about Florida drug rehabs. Learn about Florida House Bill 807, oversight by DCF, Joint Commission, FARR, and the state\'s regulatory transformation.',
    articleType: 'Article',
    authorName: 'Freddy Moldt',
    authorTitle: 'CEO',
    editorName: 'Devin Scheller',
    reviewerName: 'Sahil Talwar, PA',
    datePublished: '2024-08-22',
    dateModified: '2026-03-29',
    articleSection: 'Addiction Research',
    keywords: 'Florida rehab, drug rehab safety, addiction treatment regulation, FARR certification',
    wordCount: '1400',
    articleImage: 'https://campusrecoverycenter.com/images/florida-rehab-safety.jpg'
  },

  provider: {
    ...BASE,
    pageUrl: 'https://campusrecoverycenter.com/our-team/freddy-moldt/',
    providerName: 'Freddy Moldt',
    providerTitle: 'Chief Executive Officer',
    providerBio: 'Freddy Moldt is the CEO and founder of Campus Recovery Center, bringing extensive experience in addiction treatment operations, quality improvement, and patient advocacy to the organization.',
    providerImage: 'https://campusrecoverycenter.com/images/freddy-moldt.jpg',
    providerUrl: 'https://campusrecoverycenter.com/our-team/'
  }
}
