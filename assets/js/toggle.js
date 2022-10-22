const toggle = document.getElementById('toggle')
const toggleState = document.getElementById('toggle-state')

let state = 1

toggle.addEventListener('click', () => {
  state++

  const factor = toggle.clientWidth / 3
  if (state > 3) state = 1

  switch (state) {
    case 1: {
      toggleState.style.transform = `translateX(${factor * 0})`
      break
    }

    case 2: {
      toggleState.style.transform = `translateX(${factor * 1}px)`
      break
    }

    case 3: {
      toggleState.style.transform = `translateX(${factor * 2}px)`
      break
    }
  }
})
