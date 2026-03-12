export const getUserDisplayName = (user: any) =>
  user?.firstName || user?.name || 'User'
