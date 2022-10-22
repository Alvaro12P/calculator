window.onload = () => {
  const buttons = document.querySelectorAll('.key>button')
  const screen = document.querySelector('#screen > input')

  let result = ''
  let firstOperand = ''
  let second = false
  let third = false

  buttons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      const type = evt.target.dataset.type
      const value = evt.target.dataset.value

      if (type === 'number') {
        if (!third) {
          result += value
          screen.value = parseInt(result)
        } else {
          firstOperand += value
          screen.value = parseInt(firstOperand)
        }
      } else if (type === 'operator') {
        switch (value) {
          case 'DEL': {
            console.log(result)
            console.log(firstOperand)
            result = result
              .split('')
              .splice(0, result.split('').length - 1)
              .join('')

            if (result.length === 0) result = '0'
            screen.value = parseInt(value)
            break
          }

          case 'reset': {
            result = '0'
            firstOperand = '0'
            screen.value = result
            second = false
            third = false
            break
          }

          case '+': {
            if (!second) {
              firstOperand = result
              second = true
              result = '0'
            } else if (second && !third) {
              result = parseInt(firstOperand) + parseInt(result)
              firstOperand = '0'
              screen.value = parseInt(result)
              third = true
            } else {
              result = parseInt(firstOperand) + parseInt(result)
              firstOperand = ''
              screen.value = parseInt(result)
            }
          }
        }
      }
    })
  })
}
