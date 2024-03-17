import img1 from '../../img/1.png'
import SearchIcon from '@mui/icons-material/Search'
import './Header.css'
import { Badge, IconButton } from '@mui/material'
import WorkIcon from '@mui/icons-material/Work'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
	const navigate = useNavigate()
	const { basket } = useSelector(state => state)

	return (
		<div>
			<header id='header'>
				<div className='container'>
					<div className='header'>
						<img src={img1} alt='' />
						<div className='header-navs'>
							<h4 onClick={() => navigate('/')}>Home</h4>
							<h4>Menu</h4>
							<h4>Promo</h4>
							<IconButton
								size='large'
								aria-label='show 4 new mails'
								color='inherit'
							>
								<SearchIcon />
							</IconButton>
							<IconButton
								size='large'
								aria-label='show 4 new mails'
								color='inherit'
							>
								<Link to='/basket'>
									<Badge badgeContent={basket?.length} color='error'>
										<WorkIcon />
									</Badge>
								</Link>
							</IconButton>
							<IconButton
								size='large'
								aria-label='show 4 new mails'
								color='inherit'
								onClick={() => navigate('/admin')}
							>
								<AdminPanelSettingsIcon />
							</IconButton>
							<button className='signIn'>SIGN IN </button>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Header
