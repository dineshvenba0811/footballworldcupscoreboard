import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from "./yellowcarddisplaystatus.module.scss";
/**
 * * YellowCardDisplayStatus component renders the players who received yellow cards and their information in the application.
 *  * It receives `teamData` as props containing an array of objects with `time` and `name` properties.
 **/
const YellowCardDisplayStatus = ({teamData}) => {
    // sort the data of the yellowcard time
    const sortedYellowCards = teamData.yellowCardTime.sort((a, b) => a.time - b.time);
    return (
            <div className={classes.yellowcarddisplaystatus}>
                {sortedYellowCards.map((goal, index) => (
                    <div key={index}>
                        <Row>
                            <span>{goal.time} &quot; </span>
                        </Row>
                        <Row>
                            <Col xs={8}>
                                <span style={{display: 'inline-block'}} >{goal.name}</span>
                            </Col>
                            <Col xs={4}>
                                <img src='./yellowCard.svg' alt="Yellow Card" style={{display: 'inline-block', width:"20", height:"20"}}/>
                            </Col>
                        </Row>
                    </div>
                ))}
            </div>
    );
};

export default YellowCardDisplayStatus;
