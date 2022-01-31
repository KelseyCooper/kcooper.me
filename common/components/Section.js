import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Section({ id, children, setInViewSection }) {
  const [ref, inView] = useInView({ threshold: 1 })

  useEffect(() => {
    if (id === 'Cards') {
      console.log(id, inView)
      console.log(ref, 'ref')
    }
    if (inView && id) {
      setInViewSection(id)
    }
  })

  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  )
}
