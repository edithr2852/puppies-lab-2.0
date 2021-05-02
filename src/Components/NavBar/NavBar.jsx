import React from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
	function handleLogOut() {
		// Delegate to the users-service
		userService.logOut();
		// Update state will also cause a re-render
		setUser(null);
	}

	return (
		<nav className="nav">
			<Link className="nav" to='/'>Puppies</Link>
			&nbsp; | &nbsp;
			<Link className="nav" to='/add'>Add A Puppy</Link>
            &nbsp; | &nbsp;
			<span>Welcome, {user.name}</span>
			&nbsp; | &nbsp;
			<Link className="nav" to='' onClick={handleLogOut}>
				Log Out
			</Link>
		</nav>
	);
}
