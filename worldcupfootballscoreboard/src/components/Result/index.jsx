import classes from "./result.module.scss";

/**
 * Result component renders the final result in the application as score for the teams.
 * it receives homeTeamScore and awayTeamScore as props from the Scoreboard component..
 **/
const Result = ({ homeTeamScore, awayTeamScore }) => {
    return (
        <span className={classes.result}>{homeTeamScore} - {awayTeamScore}</span>
    );
};

export default Result;
