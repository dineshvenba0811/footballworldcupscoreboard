import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import classes from "./goalinformation.module.scss";
/**
 * TeamView component renders the team information in the application by fetching the country flags from flagcdn.com .
 * it receives teamData as props from the Scoreboard component..
 **/
const GoalnformationDisplay = ({homeTeamData,awayTeamData}) => {
    const sortedHomeGoals = homeTeamData.goalScoredTime.sort((a, b) => a.time - b.time);
    const sortedHomeYellowCards = homeTeamData.yellowCardTime.sort((a, b) => a.time - b.time);
    const sortedAwayGoals = awayTeamData.goalScoredTime.sort((a, b) => a.time - b.time);
    const sortedAwayYellowCards = awayTeamData.yellowCardTime.sort((a, b) => a.time - b.time);
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
                <Accordion.Header>Detailed Scorecard</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col xs={6}>
                            <div className={classes.goalinformation}>
                                {sortedHomeGoals.map((goal, index) => (
                                    <div key={index}>
                                        <Row>
                                            <span>{goal.time} &quot; </span>
                                        </Row>
                                        <Row>
                                            <Col xs={8}><span style={{display: 'inline-block'}}>{goal.name}</span></Col>
                                            <Col xs={4}> <img src='./football.svg' width="12" height="12" style={{display: 'inline-block'}}
                                            /></Col>
                                        </Row>
                                    </div>
                                ))}
                                {sortedHomeYellowCards.map((goal, index) => (
                                    <div key={index}>
                                        <Row>
                                            <span>{goal.time} &quot; </span>
                                        </Row>
                                        <Row>
                                            <Col xs={8}>
                                                <span style={{display: 'inline-block'}} >{goal.name}</span>
                                            </Col>
                                            <Col xs={4}>
                                                <img src='./yellowCard.svg' width="20" height="20" style={{display: 'inline-block'}}
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div  className={classes.goalinformation}>
                                {sortedAwayGoals.map((goal, index) => (
                                    <div key={index}>
                                        <Row>
                                            <span>{goal.time} &quot; </span>
                                        </Row>
                                        <Row>
                                            <Col xs={8}><span style={{display: 'inline-block'}}>{goal.name}</span></Col>
                                            <Col xs={4}> <img src='./football.svg' width="12" height="12" style={{display: 'inline-block'}}
                                            /></Col>
                                        </Row>
                                    </div>
                                ))}
                                {sortedAwayYellowCards.map((goal, index) => (
                                    <div key={index}>
                                        <Row>
                                            <span>{goal.time} &quot; </span>
                                        </Row>
                                        <Row>
                                            <Col xs={8}>
                                                <span style={{display: 'inline-block'}} >{goal.name}</span>
                                            </Col>
                                            <Col xs={4}>
                                                <img src='./yellowCard.svg' width="20" height="20" style={{display: 'inline-block'}}
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default GoalnformationDisplay;
