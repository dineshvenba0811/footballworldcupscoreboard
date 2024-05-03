import classes from "./scoreboard.module.scss";
import TeamView from "../TeamView";
import Result from "../Result";
import GameStatus from "../GameStatus";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import GoalDisplayStatus from "../GoalDisplayStatus/index.jsx";
import Accordion from "react-bootstrap/Accordion";
import YellowCardDisplayStatus from "../YellowCardDisplayStatus/index.jsx";
/**
 * Scoreboard component renders the grid in the application to display the match score information.
 * it receives pairScore and status as props from the Scoreboard component..
 * it sends teamData as props to TeamView component..
 * it sends homeTeamScore and awayTeamScore as props to Result component..
 * it sends status as props to GameStatus component..
 * to display the score information as home team score :[Result, Gamestatus]: away team score
 * GoalDisplayStatus , YellowCardDisplayStatus displays the goalscored by the player and yellow card information
 **/
const Scoreboard = ({ pairScore, status }) => {
    return (
        <Card >
            <Card.Body>
                <Card.Text>
                    <Row>
                        <Col xs={3}>
                            <TeamView teamData={pairScore.homeTeam} />
                        </Col>
                        <Col xs={6}>
                                <Result homeTeamScore={pairScore.homeTeam.score} awayTeamScore={pairScore.awayTeam.score}/>
                                <GameStatus status={status}/>
                        </Col>
                        <Col xs={3}>
                            <TeamView teamData={pairScore.awayTeam}/>
                        </Col>
                    </Row>
                        <Row style={{ marginTop: '20px' }}>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Detailed Scorecard</Accordion.Header>
                                    <Accordion.Body>
                                        <Col xs={5} style={{display: 'inline-block',marginRight: '10px'}}>
                                            <GoalDisplayStatus teamData={pairScore.homeTeam}></GoalDisplayStatus>
                                            <YellowCardDisplayStatus  teamData={pairScore.homeTeam}> </YellowCardDisplayStatus>
                                        </Col>

                                        <Col xs={5} style={{display: 'inline-block',marginLeft: '10px'}}>
                                            <GoalDisplayStatus teamData={pairScore.awayTeam}></GoalDisplayStatus>
                                            <YellowCardDisplayStatus teamData={pairScore.awayTeam}> </YellowCardDisplayStatus>
                                        </Col>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Row>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
export default Scoreboard;
