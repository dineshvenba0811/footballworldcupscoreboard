import {useReducer, useState} from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import classes from "./scoreboards-grid.module.scss";
import Scoreboard from "../Scoreboard";
import useInterval from "../../hooks/useInterval";
import MessageBoard from "../MessageBoard";
import ScoresReducer, {actionTypes, initialState} from "./ScoresReducer";
import useRandomInterval from "../../hooks/useRandomInterval";
import {areAllGamesFinished, getRandomInt} from "../../utils";
import useTimeout from "../../hooks/useTimeout";
import Prediction from "../Prediction/index.jsx";

/**
 * ScoreboardsGrid component executes the ScoresReducer.js and hooks useInterval,useRandomInterval,useTimeout.
 * based on the execution it displays the score data of the matched in the application by sending the respective props to the component.
 * it sends pairScore as props to Scoreboard component..
 * it sends status as props to Scoreboard component..
 **/

const TIME_BEFORE_GAMES_START = 3; // seconds
const PLAYING_TIME = 90000; // milliseconds
let  currentTimeMatchStarted=0;
const ScoreboardsGrid = () => {
    const [timeElapsed, setTimeElapsed] = useState(TIME_BEFORE_GAMES_START);
    const [state, dispatch] = useReducer(ScoresReducer, initialState);
    const [isPlayingTime, setIsPlayingTime] = useState(true);

    const minGameId = 0;
    const { games, finishedGames } = state;
    const gamesToRender = games.length > 0 ? games : finishedGames;
    const maxGameId = games.length - 1;

    // Initial countdown time interval
    // get the current time to store the time started values
    useInterval(() => {
        setTimeElapsed((timeElapsed) => timeElapsed - 1);
        if (timeElapsed === 0) {
            setTimeElapsed(timeElapsed); // stop the timer
        }
    }, 1000);

    const getCurrentTime= ()=>{
       return new Date();
    }

    // Start games in random moment of time
    const delay = [3000, 4000];
    const cancelUpdateGameState = useRandomInterval(() => {
        console.log(delay+"delay");
        if (isPlayingTime) {
            let gamedid=getRandomInt(minGameId, maxGameId);
            currentTimeMatchStarted= getCurrentTime();
            console.log("currentTimeMatchStarted.getTime"+"gameid"+gamedid+"-----"+currentTimeMatchStarted.getTime());
            dispatch({ type: actionTypes.START_GAME, data: { gameIdStartedGame: gamedid,gameStartedTime:currentTimeMatchStarted } });
        } else {
            dispatch({ type: actionTypes.FINISH_GAME, data: { gameIdFinishedGame: getRandomInt(minGameId, initialState.games.length - 1) } });
        }
    }, ...delay);



    // Start game score updates
    const updateScoreDelay = [3000, 8000];
    const cancelUpdateScoreInterval = useRandomInterval(() => {
      let  goalScoredTime= getCurrentTime();
      let getRandomGameId=getRandomInt(minGameId, maxGameId);
      let getRandomTeamId=getRandomInt(1, 2);
      let playerId=getRandomInt(0, 7);
      if(playerId){
          dispatch({
              type: actionTypes.UPDATE_SCORE,
              data: { gameId: getRandomGameId, teamId: getRandomTeamId,playerId:playerId,goalScoredTime:goalScoredTime }
          });
      }
    }, ...updateScoreDelay);


    const updateYellowCardDelay = [10000, 50000];
    const cancelUpdateYellowCardInterval = useRandomInterval(() => {
        let  yellowCardGivenTime= getCurrentTime();
        let getRandomGameId=getRandomInt(minGameId, maxGameId);
        let getRandomTeamId=getRandomInt(1, 2);
        let playerId=getRandomInt(0, 7);
        if(playerId){
            dispatch({
                type: actionTypes.YELLOW_CARD_INFORMATION,
                data: { gameIdYellowCard: getRandomGameId, teamIdYellowCard: getRandomTeamId,playerIdYellowCard:playerId,yellowCardGivenTime:yellowCardGivenTime }
            });
        }
    }, ...updateYellowCardDelay);

    // cancel all updates when game time completed.
    if (areAllGamesFinished(games)) {
        console.log(">>> All games finished. Cancel all updates.");
        cancelUpdateGameState();
        cancelUpdateScoreInterval();
        cancelUpdateYellowCardInterval();
    }
    // Function to get a random player ID from the initial state
    // Start a timeout for when to finish the games
    useTimeout(() => {
        console.log(">>> Playing time ended. Start finalizing the games.");
        setIsPlayingTime(false);
    }, PLAYING_TIME);

    const getGameStatus = (isGameStarted) => isGameStarted ? 'Playing' : '';
    const getScoreBoardStateMessage = () => areAllGamesFinished(games) ? 'Summary'  : 'Current Games';

    return (
        <>
            {timeElapsed === 0 ?
                <>
                            <MessageBoard message={getScoreBoardStateMessage()}/>
                            <div className={classes.grid}>
                                {gamesToRender?.map(pairScore => (
                                    <Scoreboard
                                        key={crypto.randomUUID()}
                                        pairScore={pairScore}
                                        status={getGameStatus(pairScore.startedGame)}
                                    />))}
                            </div>

                </> :
                <MessageBoard message={`Games are about to start in ${timeElapsed} seconds.`}/>
            }
        </>
    );
};

export default ScoreboardsGrid;
