import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const Menu = (props) => {

    let navigate = useNavigate();

  return (
            <ul>
            { props.menuData.map(menu => {
              return ( 
                <li style={{zIndex: menu.zIndex}}
                onClick={()=>{navigate(menu.path)}}>
                  <p className='li_text'>{menu.name}</p>
                </li>
                )
            })}
            </ul>
    )
}
export default Menu;