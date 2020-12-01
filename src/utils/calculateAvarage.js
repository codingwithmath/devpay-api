module.exports = (currentValue, updatedValue, updatedTimes) => {
  const getCurrentValue = Number(currentValue)
  const getUpdatedValue = Number(updatedValue)

  const soma = getCurrentValue + getUpdatedValue

  console.log(soma)

  const avarage = soma / updatedTimes


  console.log("salário calculado: ", avarage)
  return avarage
}