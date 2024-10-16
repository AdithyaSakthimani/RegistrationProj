import React from 'react' ; 
import './HeaderStyle.css';
const HeaderFunc=({title})=>{
    return (
        <div>
            <header className = "header-style">
                {title}
                </header>
        </div>
    )
};
export default HeaderFunc ; 