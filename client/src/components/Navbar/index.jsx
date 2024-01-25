import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo"><img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="" /></div>
        <div className="pages">
            <div className="page">
                <Link className='btn' to={'/'}>HOME</Link>
                <button className='btn'>ABOUT</button>
                <button className='btn'>SERVICES</button>
                <button className='btn'>SHOP</button>
                <button className='btn'>PAGES</button>
                <Link className='btn' to={'/add'}>ADD</Link>
                <Link className='btn' to={'/wishlist'}>WISHLIST</Link>
                <button className='btn'>CONTACT</button>
            </div>
            <div className="menu">
                <MenuOutlinedIcon/>
            </div>
        </div>
        <div className="icons">
            <SearchIcon/>
            <FavoriteBorderOutlinedIcon/>
            <ShoppingBasketOutlinedIcon/>
        </div>
    </div>
  )
}

export default Navbar