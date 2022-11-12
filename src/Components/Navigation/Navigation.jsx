import './Navigation.css'

const Navigation = (props) => {
	const { setLgCollapsed } = props

	return (
		<header>
			<nav className="navigation flex-align-vertical-center">

				<div className="navigation__left flex-align-vertical-center">
					<div onClick={() => setLgCollapsed(prev => !prev)} className="navigation__hamburger-menu flex-align-vertical-center">
						<img className="icon" src="./assets/menu.svg" alt="" />
					</div>
					<div className="navigation__logo">
						<img src="./assets/yt_logo_rgb_dark.png" alt="YouTube logo" />
					</div>
				</div>

				<div className="navigation__middle flex-align-vertical-center">
					<div className="navigation__input-form">
						<div className="navigation__input-group">
							<input type="text" placeholder="Search" />
							<img className="icon active" src="./assets/search-outline.svg" alt="search icon" />
						</div>
						<div className="navigation__search-btn flex-align-vertical-center">
							<img className="icon" src="./assets/search-outline.svg" alt="search icon" />
						</div>
					</div>
					<div className="navigation__mic-btn flex-align-vertical-center">
						<img className="icon" src="./assets/mic.svg" alt="mic icon" />
					</div>
				</div>

				<div className="navigation__right">
					<div><img className="icon" src="./assets/video-plus.svg" alt="video icon" /></div>
					<div><img className="icon" src="./assets/notifications.svg" alt="notification icon" /></div>
					<div className="navigation__avatar"><img src="./assets/avatar.svg" alt="user icon" /></div>
				</div>

			</nav>
		</header>
	);
}

export default Navigation;