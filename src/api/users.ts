const users = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: roles[index % roles.length], // Alternate roles
  permissions: index % 2 === 0 ? ['read', 'write', 'delete'] : ['read'],
  created_at: new Date().toISOString(),
  updated_at: null,
})) as User[]

export const getUsers = async () => {
  await simulateLatency()
  return users
}
export const getSingleUser = async (id: number) => {
  await simulateLatency()
  return users.find((user) => user.id === id)
}
