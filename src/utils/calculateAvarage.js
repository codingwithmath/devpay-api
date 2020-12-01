module.exports = (currentValue, updatedValue, updatedTimes) => {
  const avarage = (currentValue + updatedValue) / updatedTimes

  return avarage
}