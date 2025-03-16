export {}
declare global {
  interface Role {
    id: number
    name: string
    permissions: string[]
  }
  interface User {
    id: number
    name: string
    role: Role
    permissions: string[]
    created_at: string
    updated_at: string | null
  }
}
