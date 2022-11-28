import React from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'
const Title = ({children, className, size, isUppercase}) => {
    const classes = classNames(`ui-title-${size}`)
  return (
    <p 
      className={classes}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
    >
      {children}
    </p>
  )
}

Title.propTypes = {
    isUppercase: propTypes.bool,
    size: propTypes.oneOf(['1', '2', '3']),
    children: propTypes.node.isRequired,
    className: propTypes.string,
}

Title.defaultProps = {
    isUppercase: true,
    size: '1',
    className: '',
}

export default Title