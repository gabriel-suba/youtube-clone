import './Sidebar.css'

const Sidebar = (props) => {
	const { lgCollapsed } = props

	const sidebar_lg_sections = [
		{
			name: '',
			items: [
				{
					icon: './assets/home.svg',
					description: 'Home'
				},
				{
					icon: './assets/subscriptions.svg',
					description: 'Subscriptions'
				},

			]
		},
		{
			name: '',
			items: [
				{
					icon: './assets/video-library.svg',
					description: 'Library'
				},
				{
					icon: './assets/history.svg',
					description: 'History'
				},
				{
					icon: './assets/play.svg',
					description: 'Your videos'
				},
				{
					icon: './assets/clock.svg',
					description: 'Watch later'
				},
				{
					icon: './assets/thumbs-up.svg',
					description: 'Liked videos'
				},
				{
					icon: './assets/expand.svg',
					description: 'Show more'
				},
			]
		},
		{
			name: 'EXPLORE',
			items: [
				{
					icon: './assets/trending.svg',
					description: 'Trending'
				},
				{
					icon: './assets/music.svg',
					description: 'Music'
				},
				{
					icon: './assets/movies.svg',
					description: 'Movies'
				},
				{
					icon: './assets/gaming.svg',
					description: 'Gaming'
				},
				{
					icon: './assets/newspaper.svg',
					description: 'News'
				},
				{
					icon: './assets/trophy.svg',
					description: 'Sports'
				},
				{
					icon: './assets/fashion.svg',
					description: 'Fashion & Beauty'
				},
			]
		},
		{
			name: '',
			items: [
				{
					icon: './assets/settings.svg',
					description: 'Settings'
				},
				{
					icon: './assets/flag.svg',
					description: 'Report history'
				},
				{
					icon: './assets/help.svg',
					description: 'Help'
				},
				{
					icon: './assets/feedback.svg',
					description: 'Send feedback'
				},
			]
		},
	]

	const sidebar_sm = {
		name: '',
		items: [
			{
				icon: './assets/home.svg',
				description: 'Home'
			},
			{
				icon: './assets/subscriptions.svg',
				description: 'Subscriptions'
			},
			{
				icon: './assets/video-library.svg',
				description: 'Library'
			},
		]
	}

	return (
		<>
			<div className={`${lgCollapsed ? 'toggled' : '' }`}>
				<div className="sidebar__container sidebar__container--sm">
					<div className="sidebar--sm">
						<div className="sidebar__section">
							{sidebar_sm.items.map(item => (
								<div className="sidebar__item" key={item.description}>
									<img src={item.icon} alt={item.description} className="icon" />
									<div className="sidebar__item-description">{item.description}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className={`slide-parent sidebar__wrapper`}>
				<div className="slide-child sidebar__container sidebar__container--lg scrollbar">
					<div className="sidebar--lg">
						{sidebar_lg_sections.map(section => (
							<div className="sidebar__section" key={section.items.length}>
								{section.name.length > 0 && 
								<div className="section__label">
									<span>{section.name}</span>
								</div>
								}
								{section.items.map(item => (
									<div className="sidebar__item" key={item.description}>
										<img src={item.icon} alt={item.description} className="icon" />
										<div className="sidebar__item-description">{item.description}</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Sidebar;