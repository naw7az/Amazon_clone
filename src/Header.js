import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
// for (Search and Basket) icons
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
	const [{ basket, user }] = useStateValue();

	const login = () => {
		if (user) {
			auth.signOut();
		}
	};
  return (
    <nav className="header">
    	{/* amazon logo on the left-> */}
		<Link to="/">
			<img className="header__logo" alt="" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
		</Link>
    	{/* Search Box at centre */}
		<div className="header__search"> 
			<input type='text' className='header__searchInput' />
			<SearchIcon className='header__searchIcon'/>
		</div>
		<div className='header__nav'>
			{/* 3 links on the right */}
			<Link to={!user && '/login'} className='header__link'>
				<div onClick={login} className="header__option">
					<span className='header__optionLineOne'>Hello, {user?.email} </span>
					<span className='header__optionLineTwo'>{user ? 'Sign Out': 'Sign In'} </span>
				</div>
			</Link>
			<Link to='/' className='header__link'>
				<div className="header__option">
					<span className='header__optionLineOne'>Returns</span>
					<span className='header__optionLineTwo'>& Orders</span>
				</div>
			</Link>
			<Link to='/' className='header__link'>
				<div className="header__option">
					<span className='header__optionLineOne'>Your</span>
					<span className='header__optionLineTwo'>Prime</span>
				</div>
			</Link>
			{/* basket icon with number rightmost */}
			<Link to='/checkout' className='header__link'>
				<div className='header__optionBasket'>
					<ShoppingCartIcon/>
					<span className='header__optionLineTwo header__basketCount'> {basket?.length} </span>
				</div>
			</Link>
		</div>
    </nav>
  )
}

export default Header
