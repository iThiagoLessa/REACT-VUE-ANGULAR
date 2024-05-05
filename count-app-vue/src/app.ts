import { ref } from 'vue'

const number = ref(0)

function increase() {
  number.value++
}

function decrease() {
  number.value--
}

export { increase, decrease, number }
