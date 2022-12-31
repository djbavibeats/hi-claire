// Styles
import "./styles.css"

// Components
import Card from './Components/Card.js'

// Utils
import { things } from './utils/things.js'

export default function Secret() {
	return (<>
		<div className="header">
			<div className="marquee">
			<p>🫣 🗜️ ✅ 🥑 🥤 🍋 🏴‍☠️ 🦈 HIIII 🦈 🏴‍☠️ 🍋 🥤 🥑 ✅ 🗜️ 🫣</p></div>
		</div>
		<div className="instructions">
			<p>{`Hi Claire!!`}</p> 
			<br />
			<p>{`I was going to write you a card for New Years (and I'm still going to...), but it was hard to capture just how special spending 2022 with you has been with just one piece of paper. So here are Twenty-Two 2022 cards for you with some of my favorite memories we've shared this year. I know there's a lot I missed (we've done more than 22 things together), so I will make sure to make 23 cards next year (GET IT... 2023??)`}</p>
			<br />
			<p>{`Here's a joke just in case you do not get it: `}</p>
			<div className="knock-knock-joke-container">
				<p className="knock-knock-joke-line">	Knock Knock</p>
				<p className="knock-knock-joke-line">	Who's There</p>
				<p className="knock-knock-joke-line">Why are there only 22 cards? We did more than 22 things togehter?</p>
				<p className="knock-knock-joke-line">Why are there only 22 cards? We did more than 22 things together who?</p>
				<p className="knock-knock-joke-line">	Because it was 2022! I'll do 23 cards in 2023.</p>
			</div>
			<br />
			<div>
				<p>Loooove, <br/> Justin</p>
			</div>
			<br />
			<div className="tap-to-flip-container">
				<p>P.S. - Tap on the cards and they'll flip over!!</p>				
			</div>
		</div>
		<div className="cards-container">
		{
			things.map((thing) => {
				return <Card thing={thing} />
			})
		}		
		</div>
	</>)
}