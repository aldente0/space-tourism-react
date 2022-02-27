import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import { Home } from './pages/Home';
import { Destination } from './pages/Destination';
import { Crew } from './pages/Crew';
import { Technology } from './pages/Technology';

import { Header } from './components/UI/header/Header';
import { Hamburger } from './components/UI/hamburger/Hamburger';
import { Transition } from 'react-transition-group';

function App() {
	const [hamburgerVisible, setHamburgerVisible] = useState(false);

	const handleClick = () => {
		setHamburgerVisible(!hamburgerVisible);
	};

	return (
		<>
			<Router basename='/space-tourism-react'>
				<Header
					hamburgerVisible={hamburgerVisible}
					setHamburgerVisible={setHamburgerVisible}
				/>

				<Transition
					in={hamburgerVisible}
					timeout={900}
					mountOnEnter
					unmountOnExit>
					{(state) => (
						<Hamburger
							handleClick={handleClick}
							className={`hamburger ${state}`}
						/>
					)}
				</Transition>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/destination' component={Destination} />
					<Route path='/crew' component={Crew} />
					<Route path='/technology' component={Technology} />
				</Switch>
			</Router>
		</>
	);
}
export default App;
