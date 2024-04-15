import classes from "./game-status.module.scss";
/**
 * GameStatus component renders the status of the application at that time interval
 * it receives props as status from the ScoreboardsGrid component.
 **/
const GameStatus = ({ status }) => {
    return (
        <div className={classes.status}>
            {status}
        </div>
    );
};

export default GameStatus;
