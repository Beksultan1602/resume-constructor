import React from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types'

const Description = ({children, className, isPrimary, isSecondary}) => {
  const classes = classNames('ui-text', classNames, {
    isPrimary: isPrimary,
    isSecondary: isSecondary
  })
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

Description.propTypes = {
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired
}

Description.defaultProps = {
  isPrimary: false,
  isSecondary: false,
  className: '',
}

export default Description