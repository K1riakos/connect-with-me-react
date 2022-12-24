export const Social = ({ link, name }) => {
	const redirect = () => {
		window.location.href = link;
	};

	return (
		<div className='social-container' onClick={redirect}>
			<h1 className='social-name'>{name}</h1>
		</div>
	);
};
