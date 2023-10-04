import React from 'react';

const Header = ({title, description, url}) => {
    return (
        <div style={{backgroundImage: 'url('+url+')', backgroundSize: "cover"}} className='text-center'>
            <h1>{title}</h1>
            <p className='bg-light' style={{"--bs-bg-opacity": .5}}>{description}</p>
        </div>
    );
};

export default Header;

