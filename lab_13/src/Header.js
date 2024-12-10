import React from 'react';

const Header = ({ onHomeClick }) => {
    return (
        <header id="header" style={headerStyle}>
            <h1 onClick={onHomeClick}>Home</h1>
        </header>
    );
};

const headerStyle = {
    background: 'seagreen',
    height: '100px',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    top: 0,
    cursor: 'pointer',
    color: 'white',
    paddingRight: '20px',
};

export default Header;
