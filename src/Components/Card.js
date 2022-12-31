import { useState } from 'react'
import { useSpring, a } from '@react-spring/web'


export default function Card({ thing }) {
	const [ flipped, set ] = useState(false)
	const { transform, opacity } = useSpring({
		opacity: flipped ? 1 : 0,
		transform: `rotateY(${ flipped ? 0 : 180 }deg)`
	})
	
	let imageSource = `/pictures/` + thing.number + `.png`
	let styles = { }
	
	if (thing.number === 'twentytwentytwo') {
		imageSource = `/pictures/twentytwentytwo.png`
		styles = { 
			objectFit: 'contain',
			maxWidth: '100%',
			margin: '0 auto'
		}
	}	
	
	console.log(imageSource)

	return (<>
		<div 
			className="card"
			onClick={() => set(state => !state)}
		>
			<a.div 
				className="card-face front"
				style={{ 
					opacity: opacity.to(o => 1 - o), 
					transform,
					rotateY: '180deg'
				}}
			>
				<div className="card-content">
					<div className="card-front-picture-container">
						<img style={styles} src={imageSource} />
					</div>
					<div className="card-front-words-container">
						<div className="card-symbol">{ thing.name }</div>
						<div className="card-date">{ thing.number }</div>
					</div>
					
				</div>
			</a.div>
			<a.div 
				className="card-face back"
				style={{ 
					opacity, 
					transform
				}}
			>
				<div className="card-content">
					<div className="card-back-words-container">
						<div className="card-description">{ thing.description }</div>
					</div>
					<div className="card-back-footer-container">
						<div className="card-symbol">{ thing.name }</div>
						<div className="card-date">{ thing.number }</div>
					</div>
				</div>
			</a.div>
		</div>
	</>)
}
