campoDeFormulario = document.querySelectorAll('.form')
submit = document.getElementById('next')
etapaProcesso = document.querySelectorAll('.number')

submit.addEventListener('click', function () {
  campoDeFormulario.forEach(function (input) {
    if (input.value === "") {
      input.classList.add('vazio')
    } else {
      input.classList.remove('vazio')
      input.classList.add('preenchido')
    }
})

})