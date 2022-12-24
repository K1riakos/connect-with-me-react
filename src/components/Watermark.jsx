import GithubLogo from '../assets/github.svg';

export const Watermark = () => {
	return (
		<div className='watermark-container'>
			<div className='github-logo'>
				<img src={GithubLogo} alt='github' />
			</div>
			<a
				href='https://github.com/K1riakos/connect-with-me-react'
				target='_blank'
			>
				Source Code
			</a>
		</div>
	);
};
