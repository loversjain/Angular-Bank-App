export interface StatementsResonse {
    data: Daum[]
    links: Links
    meta: Meta
  }
  
  export interface Daum {
    id: number
    transaction_date: string
    amount: string
    type: string
    details: string
    balance: number
  }
  
  export interface Links {
    first: string
    last: string
    prev: any
    next: any
  }
  
  export interface Meta {
    current_page: number
    from: number
    last_page: number
    links: Link[]
    path: string
    per_page: number
    to: number
    total: number
  }
  
  export interface Link {
    url?: string
    label: string
    active: boolean
  }
  