const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
  let dataDeHoje = new Date()
  let horaDeHoje = dataDeHoje.getHours()
  let minutosDeHoje = dataDeHoje.getMinutes()
  let segundosDeHoje = dataDeHoje.getSeconds()

  if(horaDeHoje < 10) horaDeHoje = "0" + horaDeHoje
  if(minutosDeHoje < 10) minutosDeHoje = "0" + minutosDeHoje
  if(segundosDeHoje < 10) segundosDeHoje = "0" + segundosDeHoje

  horas.textContent = horaDeHoje
  minutos.textContent = minutosDeHoje
  segundos.textContent = segundosDeHoje
}) 