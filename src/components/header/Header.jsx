import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { pages } from '../../constants/constants';
import { Link } from 'react-router-dom';
import HeaderButton from './header-button';
import { useEffect } from 'react';
import T77_logo from "../../assets/T77_logo.png";
import './Header.css';

function Header() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	useEffect(() => {
		// Set isVisible to true after a short delay to allow the component to render
		const timeout = setTimeout(() => {}, 500); // Adjust delay as needed

		// Clean up the timeout to avoid memory leaks
		return () => clearTimeout(timeout);
	}, []); // Empty dependency array ensures this effect runs only once on component mount

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<div className={'fixed w-full z-20 top-0 navbar'}>
			<AppBar
				position='static'
				className='z-50 top-0 py-2'
				style={{
					backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
					position: 'sticky',
					backdropFilter: 'blur(5px)',
				}}
			>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'
								anchorOrigin = {{
									vertical: 'top',
									horizontal: 'right'
								}}
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{pages.map((page) => (
									<MenuItem
										key={page.id}
										onClick={handleCloseNavMenu}
									>
										<Typography
											textAlign='center'
											textTransform='capitalize'
										>
											<Link to={page.link}>{page.name}</Link>
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>

						{/* Logo in the center for small devices */}
						<Box
							sx={{
								display: { xs: 'flex', md: 'none' },
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Link
								to='/'
								className='sm:visible lg:hidden absolute left-[44%]'
							>
								<img
									src={T77_logo}
									className='w-20 h-16 object-contain hover:cursor-pointer mx-auto'
									alt='Logo'
								/>
							</Link>
						</Box>

						<Box
							sx={{
								justifyContent: 'center',
								flexGrow: 1,
								display: {
									xs: 'none',
									md: 'flex',
									justifyContent: 'space-between', // Separate the links with the logo
									alignItems: 'center',
								},
								size: '80%'
							}}
						>
							{/* Links without the logo */}
							{pages.map((page) => (
								<HeaderButton
									key={page.id}
									onClick={handleCloseNavMenu}
									page={page}
								>
									<Link to={page.link}>{page.name}</Link>
								</HeaderButton>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
}

export default Header;
