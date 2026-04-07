export const getUserDisplayName = (user: any) => {
  if (!user) return 'User'
  // Për doktorët e tu backend ka vetëm `name`
  if (user.name) return user.name
  // Për user të thjeshtë që ka firstName + lastName
  if (user.firstName || user.lastName) {
    return `${user.firstName || ''} ${user.lastName || ''}`.trim()
  }
  return 'User'
}
