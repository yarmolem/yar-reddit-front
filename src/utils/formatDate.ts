export const formatDate = (date: string) => {
  const opts = {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  } as const

  return new Intl.DateTimeFormat('es', opts)
    .format(new Date(date))
    .toUpperCase()
}
