import { useState, useEffect } from 'react'
import './Videos.css'

const Videos = () => {
	const [videos, setVideos] = useState()

	function buildResults() {
		const titles = [
			"Front-end dev reacts to mind-blowing Codepens",
			"Don't Use a Mouse Anymore! VSCode Shortcuts, Lama Dev",
			"Top 6 React Hooks Mistakes Beginners Make",
			"CSS Crash Course For Absolute Beginners",
			"SEULGI 슬기 '28 Reasons' Dance Practice Behind I 28 Reasons",
			"[4K] STAYC - “STAYC Medley” Band LIVE Concert",
			"aespa 에스파 '도깨비불 (Illusion)' Dance Practice",
			"'ANTIFRAGILE' (LE SSERAFIM KIM CHAEWON FanCam)",
			"I Made a Game in One Line of Code",
			"My Sova lineups shocked these pro players and casters",
			"PEENOISE NO MAN'S SKY #01",
			"Klaus TH15 Queen Charge JUMP Lalo *META* (Clash of Clans)"
		]

		const channels = [
			"Kevin Powell",
			"Lama Dev",
			"Web Dev Simplified",
			"Traversy Media",
			"Red Velvet",
			"it's Live",
			"SMP FLOOR",
			"스브스케이팝 ZOOM",
			"n8dev",
			"AverageJonas",
			"PeenoisePlays",
			"Lexnos Gaming"
		]

		const arr = []

		for (let i = 0; i < titles.length; i++) {
			arr.push({
				id: i, 
				thumbnail: `./assets/vid-${i+1}.jpg`,
				channelImg: `./assets/pic-${i+1}.jpg`, 
				title: titles[i],
				channel: channels[i],
				views: '100k views',
				posted: '4 hours ago'
			})
		}

		const rows = []
		const chunk = arr.length / 4
		let currPos = 0

		for (let i = 0; i < chunk; i++) {
			rows.push({ id: i, rows: arr.slice(currPos, currPos + 4) })
			currPos += 4
		}
		
		return rows
	}

	useEffect(() => {
		setVideos(buildResults())
	}, [])

	return (
		<div className="video-gallery">
			{/* grid-row */}
			{videos && videos.map(video => (
				<div className="grid-row" key={video.id}>
					{video.rows.map(row => (
						<div className="video__container" key={row.id}>
							<div className="video__thumbnail">
								<img src={row.thumbnail} alt="thumbnail of a video" />
								<div className="thumbnail__time">5:13</div>
							</div>
							<div className="video__detail">
								<div className="detail__user-img">
									<img src={row.channelImg} alt="" />
								</div>
								<div className="wrapper">
									<div className="detail__title">{row.title}</div>
									<div className="detail__channel">{row.channel}</div>
									<div className="detail__pair">
										<span>{row.views}</span> &#183; <span>{row.posted}</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			))}
		</div>
	)
}

export default Videos;