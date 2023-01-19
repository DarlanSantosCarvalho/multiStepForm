campoDeFormulario = document.querySelectorAll('.form')
submit = document.getElementById('next')
goBack = document.getElementById('back')
etapaProcesso = document.querySelectorAll('.number')
monthYear = document.querySelector('.month-year')
stepOne = document.querySelector('.forms')
stepTwo = document.querySelector('.forms2')
options = document.querySelectorAll('.option')
optionOne = document.querySelector('.one')
optionTwo = document.querySelector('.two')
optionThree = document.querySelector('.three')
month = document.querySelector('.month')
year = document.querySelector('.year')
paymentArcade = document.querySelector('.pay-arc')
paymentAdvanced = document.querySelector('.pay-adv')
paymentPro = document.querySelector('.pay-pro')
cancelButton = document.querySelector('.cancel')
phoneNumber = document.querySelector('.form-phone')


submit.addEventListener('click', function () {
  campoDeFormulario.forEach(function (input) {
    if (input.value === "") {
      input.classList.add('vazio')
    } else {
      input.classList.remove('vazio')
      input.classList.add('preenchido')
      etapaProcesso[0].classList.remove('ativo')
      etapaProcesso[1].classList.add('ativo')
      goBack.classList.remove('hidden')
      stepOne.classList.add('hidden')
      stepTwo.classList.remove('hidden')
      monthYear.classList.remove('hidden')
    }      
  })
})

goBack.addEventListener('click', function () {
  etapaProcesso[0].classList.add('ativo')
  etapaProcesso[1].classList.remove('ativo')
  goBack.classList.add('hidden')
  stepOne.classList.remove('hidden')
  stepTwo.classList.add('hidden')
  monthYear.classList.add('hidden')
})

optionOne.addEventListener('click', function () {
  optionOne.classList.add('clicked')
  cancelButton.classList.remove('hidden')
})

optionTwo.addEventListener('click', function () {
  optionTwo.classList.add('clicked')
})

optionThree.addEventListener('click', function () {
  optionThree.classList.add('clicked')
})

month.addEventListener('click', function () {
  year.classList.remove('chosen')
  month.classList.add('chosen')
  paymentArcade.innerHTML = `<p>$9/mo</p>`
  paymentAdvanced.innerHTML = `<p>$12/mo</p>`
  paymentPro.innerHTML = `<p>$15/mo</p>`
})

year.addEventListener('click', function () {
  year.classList.add('chosen')
  month.classList.remove('chosen')
  paymentArcade.innerHTML = `<p>$90/yr</p> <h3>2 months free</h3>`
  paymentAdvanced.innerHTML = `<p>$120/yr</p> <h3>2 months free</h3>`
  paymentPro.innerHTML = `<p>$150/yr</p> <h3>2 months free</h3>`
})