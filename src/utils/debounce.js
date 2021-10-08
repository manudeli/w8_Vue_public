let timer = null

const debounce = (callback, delay) => {
  if (timer !== null) clearTimeout(timer)

  timer = setTimeout(async () => {
    await callback()
  }, delay)
}

export default debounce
