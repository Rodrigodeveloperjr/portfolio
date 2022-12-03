import { keyframes } from '@stitches/react'
import { useEffect, useRef } from 'react'


export const scaleUp = keyframes({
	"0%": { transform: "rotate(320deg)" },
	"50%": { transform: "rotate(260deg)" },
	"100%": { transform: "rotate(320deg)" },
})

const HandEffect = () => {

	const hand: any = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
	
			if (entries[0].isIntersecting) {
				setInterval(() => {
				hand.current.style.animation = `${ scaleUp } 1s ease`
				}, 500)
			}
		})

		observer.observe(hand.current)

		return () => observer.disconnect()
	}, [])

	return (
		<span
		ref={hand}
		style={{ display: "inline-flex", transform: "rotate(320deg)" }}
		>
		✋
		</span>
	)
}

export { HandEffect }
