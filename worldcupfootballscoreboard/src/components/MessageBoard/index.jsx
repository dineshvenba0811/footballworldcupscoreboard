import classes from "./message-board.module.scss";


/**
 * MessageBoard component renders the initial text information in the application while starting the games.
 * it receives message as props from the ScoreboardsGrid component..
 **/
const Index = ({ message }) => {
    return (
        <div className={classes.message}>
            {message}
        </div>
    );
};

export default Index;
