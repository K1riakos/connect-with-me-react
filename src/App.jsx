import { Logo } from './components/Logo';
import { Social } from './components/Social';
import { Watermark } from './components/Watermark';

import { socialAccs } from './socials';

function App() {
	return (
		<>
			<Logo />
			<div className='social-group'>
				{socialAccs.map((acc) => {
					return <Social key={acc.id} link={acc.link} name={acc.name} />;
				})}
			</div>
			<Watermark />
		</>
	);
}

export default App;
