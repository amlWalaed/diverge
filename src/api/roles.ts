export const roles = [
  { id: 1, name: 'admin', permissions: ['*'] },
  { id: 2, name: 'manager', permissions: ['view', 'create', 'update', 'delete'] },
  { id: 3, name: 'viewer', permissions: ['read'] },
]
