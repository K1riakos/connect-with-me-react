import SampleLogo from '../assets/logo.jpg';

export const Logo = () => {
	return (
		<header className='logo-container'>
			<div className='logo-wrapper'>
				<img src={SampleLogo} alt='logo' />
			</div>
			<h1 className='logo-brand'>@Username</h1>
		</header>
	);
};
