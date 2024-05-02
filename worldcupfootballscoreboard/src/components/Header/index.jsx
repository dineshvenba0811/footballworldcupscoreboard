import classes from './header.module.scss'

/**
 * Header component renders the header of the application
 * FIFA logo and header text.
 **/

const Header = () => {
    return (
        <div className={classes.header}>
        <header>
            <img src='./logo.svg' alt='FIFA World Cup Scoreboard'/>
            <h2>FIFA World Cup Scoreboard 2024</h2>
        </header>
        </div>
    );
};

export default Header
