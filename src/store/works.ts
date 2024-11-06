import type { PageData } from './editor'

export type WorkProp = Required<Omit<PageData, 'props' | 'setting'>> & {
  barcodeUrl?: string
}

export interface StaticProps {
  eventDate: string
  eventData: { pv: number }
  eventKey: string
  _id: string
}

export interface WorksProp {
  templates: WorkProp[]
  works: WorkProp[]
  statics: { id: number; name: string; list: StaticProps[] }[]
  totalWorks: number
  totalTemplates: number
  searchText: string
}
