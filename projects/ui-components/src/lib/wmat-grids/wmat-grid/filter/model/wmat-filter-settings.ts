export const DEFAULT_FILTER_SETTINGS: WmatFilterSettings = {
  type: "normal",
  operator: "contains",
  sensitivity: "insensitive"
}

export interface WmatFilterSettings {
  type: 'normal' | 'excel'
  operator: 'exact' | 'startsWith' | 'contains',
  sensitivity: 'sensitive' | 'insensitive'
}
