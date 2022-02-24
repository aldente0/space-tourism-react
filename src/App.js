import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { Home } from './pages/Home';
import { Destination } from './pages/Destination';
import { Header } from './components/UI/header/Header';
import { Hamburger } from './components/UI/hamburger/Hamburger';
import { data } from './data';
import { Transition } from 'react-transition-group';

function App() {
	const [hamburgerVisible, setHamburgerVisible] = useState(false);

	const handleClick = () => {
		setHamburgerVisible(!hamburgerVisible);
	};

	return (
		<>
			<Router>
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
					{/* <Route component={NotFound} /> */}
				</Switch>
			</Router>
		</>
	);
}
export default App;
