export interface CategoryData {
  id: number
  title: string | null
  slug: string | null
  body: string | null
  metaTitle: string | null
  metaDescription: string | null
  createdAt: string
  updatedAt: string
  createdBy: number
  updatedBy: number
  internal: number
  isHome: boolean | null
  options: Record<string, never> // or specify the keys if known
  status: boolean | null
  // localized content
  es?: CategoryLocale

  [locale: string]: CategoryLocale | unknown
}

export interface CategoryLocale {
  title: string
  slug: string
  status: boolean
  body: string
  metaTitle: string
  metaDescription: string
}
