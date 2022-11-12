import { useState, useRef, useEffect } from 'react'
import './Chips.css'

const Chips = () => {
	const [translate, setTranslate] = useState(0)
	const [containerWidth, setContainerWidth] = useState(0)
	const [chipsTotalWidth, setChipsTotalWidth] = useState(0)
	const chipsContainer = useRef(null)

	const tags = [
		'All',
		'Music',
		'Gaming',
		'Clash of Clans',
		'K-Pop',
		'CSS',
		'Mixes',
		'NBA',
		'Computer Engineering',
		'Computer Keyboard',
		'Live',
		'Game shows',
		'Chess',
		'League of Legends',
		'Physics',
		'Action-adventure games',
		'Recently uploaded',
		'Watched',
		'New to you'
	]

	useEffect(() => {
		function getChipsWidth(chips) {
			let width = 0
			
			for (let i = 0; i < chips.length; i++) {
				width += chips[i].offsetWidth + 18
			}
			
			return width
		}

		if (chipsContainer) {
			setChipsTotalWidth(getChipsWidth(chipsContainer.current.childNodes))
			setContainerWidth(chipsContainer.current.offsetWidth)
		}
	}, [])

	function scrollRight() {
		let toScroll = chipsTotalWidth * 0.20
		const checkNext = (translate * -1) + toScroll
		
		if (checkNext >= chipsTotalWidth - containerWidth) {
			setTranslate((chipsTotalWidth - containerWidth) * -1)
			return
		}

		setTranslate(prev => prev - toScroll)
	}

	function scrollLeft() {
		const toScroll = chipsTotalWidth * 0.20

		if (translate + toScroll >= 0) {
			setTranslate(0)
			return
		}

		setTranslate(prev => prev + toScroll)
	}

	return (
		<div className="chips__container">
			<div className="chips__container--overflow-hidden">
				<div ref={chipsContainer} className="chips" style={{ transform: `translateX(${translate}px)` }}>
					{tags.map(tag => <div className="chip" key={tag}>{tag}</div>)}
				</div>
			</div>
			<div 
			onClick={scrollLeft} 
			className={
				`chips__button 
				chips__button--left 
				${translate === 0 ? 'chips__button--none' : ''}`
				}
			>
				<img className="icon" src="./assets/left-btn.svg" alt="left button icon" />
			</div>
			<div 
			onClick={scrollRight} 
			className={
				`chips__button 
				chips__button--right 
				${translate * -1 === chipsTotalWidth - containerWidth ? 'chips__button--none' : ''}`
				}
			>
				<img className="icon" src="./assets/right-btn.svg" alt="right button icon" />
			</div>
		</div>
	);
}

export default Chips;