import classes from "./scoreboard.module.scss";
import TeamView from "../TeamView";
import Result from "../Result";
import GameStatus from "../GameStatus";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoalnformationDisplay from "../GoalnformationDisplay/index.jsx";
import Card from "react-bootstrap/Card";


/**
 * Scoreboard component renders the grid in the application to display the match score information.
 * it receives pairScore and status as props from the Scoreboard component..
 * it sends teamData as props to TeamView component..
 * it sends homeTeamScore and awayTeamScore as props to Result component..
 * it sends status as props to GameStatus component..
 * to display the score information as home team score :[Result, Gamestatus]: away team score
 **/
const Scoreboard = ({ pairScore, status }) => {

    const homeGoals = pairScore.homeTeam.score > 0;
    const awayGoals = pairScore.awayTeam.score > 0;

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
                            <GoalnformationDisplay homeTeamData={pairScore.homeTeam} awayTeamData={pairScore.awayTeam} />
                        </Row>

                </Card.Text>

            </Card.Body>
        </Card>








    );
};

export default Scoreboard;
