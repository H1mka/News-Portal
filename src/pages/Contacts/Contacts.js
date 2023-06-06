import React from 'react';
import './Contacts.css';

import randomImg from '../../assets/img/image.png';

const Contacts = () => {
    return (
        <div className='contactsPage'>
            <div className='info'>
                <div className='phone-number'>
                    <a href='tel:+380501234578'>+38 (050) 571 91 72</a>
                </div>
                <div className='name'>
                    Адєлєв <br /> Дмитро
                </div>
                <div className='mail'>
                    <a href='mailto:adelevdmitriy@gmail.com'>
                        adelevdmitriy@gmail.com
                    </a>
                </div>
                <div className='position'>JavaScript розробник</div>
                <div className='technologies'>ES6, React, TypeScript</div>
            </div>
            <div className='image'>
                <img alt={randomImg} src={randomImg} />
            </div>
        </div>
    );
};

export default Contacts;
