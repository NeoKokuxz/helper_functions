const daysAgoCalculator = (date: string) => {
  const currentTime = new Date()
  const pastTime = new Date(date)
  const days = Math.floor((currentTime.getTime() - pastTime.getTime()) / 1000 / 60 / 60 / 24);
  return days
}
