import classes from "./team-view.module.scss";

/**
 * TeamView component renders the team information in the application by fetching the country flags from flagcdn.com .
 * it receives teamData as props from the Scoreboard component..
 **/
const TeamView = ({teamData}) => {
    return (
        <div className={classes.team}>
            <img src={`https://flagcdn.com/${teamData.countryCode}.svg`} width="50" alt={`${teamData.name}`}/>
            <span>{teamData.name}</span>
        </div>
    );
};

export default TeamView;
