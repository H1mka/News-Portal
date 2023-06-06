import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='mainFooter'>
            <div>
                Новинник<div className='smallest'>Single Page Application</div>
            </div>
            <div>
                <div className='smallest' style={{ textAlign: 'right' }}>
                    Made by
                </div>
                Адєлєв Дмитро
            </div>
        </footer>
    );
};

export default Footer;
