import React from 'react'
import PropTypes from 'prop-types'


const Button = ({color,text,onClick}) => {
  return (
    <button onClick={onClick}style={{backgroundColor:color}} className='btn'>{text}</button>
  )
}
Button.defaultProps=
{
    color:'steelblue',   //this is the actual property for color,but it is ovverided in Header file
}
Button.propTypes={
    text:PropTypes.string,   //these are like the datatypes of our content
    color:PropTypes.string,
    onClick:PropTypes.func,
}
export default Button
