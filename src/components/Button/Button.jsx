import React from 'react';
import './button.css'

const Button = (props) => (
    <button className={'button ' + props.className} {...props}/>
)

export default Button;
