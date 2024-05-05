import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from "./goaldisplaystatus.module.scss";
/**
 * GoalDisplayStatus component renders the team's goal information in the application.
 * It receives `teamData` as props containing an array of objects with `time` and `name` properties.
 **/
const GoalDisplayStatus = ({teamData}) => {
    // sort the data of the goal scored time
    const sortedGoals = teamData.goalScoredTime.sort((a, b) => a.time - b.time);
    return (
            <div className={classes.goaldisplaystatus}>
                {sortedGoals.map((goal, index) => (
                    <div key={index}>
                        <Row>
                            <span>{goal.time} &quot; </span>
                        </Row>
                        <Row>
                            <Col xs={8}><span style={{display: 'inline-block'}}>{goal.name}</span></Col>
                            <Col xs={4}> <img src='./football.svg' alt="Football"  style={{display: 'inline-block', width:"12",  height:"12"}}/></Col>
                        </Row>
                    </div>
                ))}
            </div>
);
};
export default GoalDisplayStatus;
