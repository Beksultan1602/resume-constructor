import propTypes from 'prop-types'
import './Header.scss'

const Header = ({onClick}) => {
  return (
    <header className='Header'>
        <div className="ui-container">
            <div className="Header_content">
                <span className='Header_logo'>
                    Cv builder
                </span>
                <button onClick={onClick} className="ui-button isLink">print</button>
            </div>
        </div>
    </header>
  )
}

Header.propTypes = {
  onClick: propTypes.func
}
Header.defaultProps = {
  onClick: () => {}
}

export default Header