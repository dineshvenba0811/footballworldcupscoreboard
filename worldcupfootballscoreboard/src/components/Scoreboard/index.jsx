import classes from "./scoreboard.module.scss";
import TeamView from "../TeamView";
import Result from "../Result";
import GameStatus from "../GameStatus";


/**
 * Scoreboard component renders the grid in the application to display the match score information.
 * it receives pairScore and status as props from the Scoreboard component..
 * it sends teamData as props to TeamView component..
 * it sends homeTeamScore and awayTeamScore as props to Result component..
 * it sends status as props to GameStatus component..
 * to display the score information as home team score :[Result, Gamestatus]: away team score
 **/
const Scoreboard = ({ pairScore, status }) => {
    return (
        <section className={classes.scoreboard}>
            <TeamView teamData={pairScore.homeTeam} />
            <main>
                <Result homeTeamScore={pairScore.homeTeam.score} awayTeamScore={pairScore.awayTeam.score} />
                <GameStatus status={status} />
            </main>
            <TeamView teamData={pairScore.awayTeam} />
        </section>
    );
};

export default Scoreboard;
