import React from 'react'
import './Button.css'

const Button = ({ text, img }) => {
    return (
        <>
            <div className="button-container">
                {text}
                {
                    img && <img src={img} alt="" />
                }
            </div>
        </>
    )
}

export default Button