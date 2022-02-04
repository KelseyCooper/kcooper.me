import { useRef, useEffect, useState } from 'react'

export default function useRefScrollProgress(inputRef, options) {
  const ref = inputRef || useRef()
  const offset = options.offset ? options.offset : 0
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)

  useEffect(() => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const offsetTop = rect.top + scrollTop + offset
    setStart(offsetTop / document.body.clientHeight)
    setEnd((offsetTop + rect.height) / document.body.clientHeight)
  })
  return { ref, start, end }
}
