const teamsMap = {
    1: 'homeTeam',
    2: 'awayTeam'
}

const sortGamesByTotalScore = (currentGame, nextGame) => {
    const currentGameTotalScore = currentGame.homeTeam.score + currentGame.awayTeam.score;
    const nextGameTotalScore = nextGame.homeTeam.score + nextGame.awayTeam.score;
    return nextGameTotalScore - currentGameTotalScore;
}
// actiontypes for the reducer functions to update
export const actionTypes = {
    START_GAME: 'start',
    UPDATE_SCORE: 'update',
    FINISH_GAME: 'finish',
    YELLOW_CARD_INFORMATION:'cardInfo'
}
// initial state
export const initialState = {
    finishedGames: [],
    games: [
        {
            gameId: 0,
            startedGame: false,
            gameStartedTime:0,
            currentGameTime:0,
            homeTeam: {
                name: 'Mexico',
                countryCode: 'mx',
                score: 0,
                goalScoredTime:[],
                yellowCardTime:[],
                players: [
                    { playerId:0, name: 'Edson'},
                    { playerId:1, name: 'Hirving'},
                    { playerId:2, name: 'Guillermo'},
                    { playerId:3, name: 'Carlos'},
                    { playerId:4, name: 'Santiago'},
                    { playerId:5, name: 'Héctor'},
                    { playerId:6, name: 'Javier'},
                    { playerId:7, name: 'César'},
                ]
            },
            awayTeam: {
                name: 'Canada',
                countryCode: 'ca',
                score: 0,
                goalScoredTime:[],
                yellowCardTime:[],
                players: [
                    { playerId:0, name: 'Alphonso'},
                    { playerId:1, name: 'Jonathan'},
                    { playerId:2, name: 'Quinn'},
                    { playerId:3, name: 'Stephen'},
                    { playerId:4, name: 'Alistair'},
                    { playerId:5, name: 'Cyle'},
                    { playerId:6, name: 'Maxime'},
                    { playerId:7, name: 'Jonathan'},
                ]
            },
        },
        {
            gameId: 1,
            startedGame: false,
            gameStartedTime:0,
            currentGameTime:0,
            homeTeam: {
                name: 'Spain',
                countryCode: 'es',
                score: 0,
                goalScoredTime:[],
                yellowCardTime:[],
                players: [
                    { playerId:0, name: 'Rodri'},
                    { playerId:1, name: 'Pedri'},
                    { playerId:2, name: 'Parejo'},
                    { playerId:3, name: 'Iago'},
                    { playerId:4, name: 'Aymeric'},
                    { playerId:5, name: 'Thiago'},
                    { playerId:6, name: 'Grimaldo'},
                    { playerId:7, name: 'Marcos'},
                ]
            },
            awayTeam: {
                name: 'Brazil',
                countryCode: 'br',
                score: 0,
                goalScoredTime:[],
                yellowCardTime:[],
                players: [
                    { playerId:0, name: 'Vini.'},
                    { playerId:1, name: 'Neymar'},
                    { playerId:2, name: 'Alisson'},
                    { playerId:3, name: 'Casemiro'},
                    { playerId:4, name: 'Ederson'},
                    { playerId:5, name: 'Marquinhos'},
                    { playerId:6, name: 'Éder'},
                    { playerId:7, name: 'Rodrygo'},
                ]
            }
        },
        {
            gameId: 2,
            startedGame: false,
            gameStartedTime:0,
            currentGameTime:0,
            homeTeam: {
                name: 'Germany',
                countryCode: 'de',
                score: 0,
                goalScoredTime:[],
                yellowCardTime:[],
                players: [
                    { playerId:0, name: 'Stegen'},
                    { playerId:1, name: 'Joshua'},
                    { playerId:2, name: 'Manuel'},
                    { playerId:3, name: 'Musiala'},
                    { playerId:4, name: 'Gündoğan'},
                    { playerId:5, name: 'Kroos'},
                    { playerId:6, name: 'Goretzka'},
                    { playerId:7, name: 'Rüdiger'},
                ]
            },
            awayTeam: {
                name: 'France',
                countryCode: 'fr',
                score: 0,
                goalScoredTime:[],
                yellowCardTime:[],
                players: [
                    { playerId:0, name: ' Mbappé'},
                    { playerId:1, name: ' Benzema'},
                    { playerId:2, name: ' Griezmann'},
                    { playerId:3, name: ' Maignan'},
                    { playerId:4, name: ' Dembélé'},
                    { playerId:5, name: ' Nkunku'},
                    { playerId:6, name: ' Kanté'},
                    { playerId:7, name: ' Coman'},
                ]
            }
        },
        {
            gameId: 3,
            startedGame: false,
            gameStartedTime:0,
            currentGameTime:0,
            homeTeam: {
                name: 'Uruguay',
                countryCode: 'uy',
                score: 0,
                goalScoredTime:[],
                yellowCardTime:[],
                players: [
                    { playerId:0, name: ' Valverde'},
                    { playerId:1, name: ' Araujo'},
                    { playerId:2, name: ' Giménez'},
                    { playerId:3, name: ' Bentancur'},
                    { playerId:4, name: ' Núñez'},
                    { playerId:5, name: ' Torreira'},
                    { playerId:6, name: ' Coates'},
                    { playerId:7, name: ' Ugarte'},
                ]
            },
            awayTeam: {
                name: 'Italy',
                countryCode: 'it',
                score: 0,
                goalScoredTime:[],
                yellowCardTime:[],
                players: [
                    { playerId:0, name: ' Donnarumma'},
                    { playerId:1, name: ' Tonali'},
                    { playerId:2, name: ' Barella'},
                    { playerId:3, name: ' Bastoni'},
                    { playerId:4, name: ' Berardi'},
                    { playerId:5, name: ' Lorenzo'},
                    { playerId:6, name: ' Immobile'},
                    { playerId:7, name: ' Chiesa'},
                ]
            }
        },
        {
            gameId: 4,
            startedGame: false,
            gameStartedTime:0,
            homeTeam: {
                name: 'Argentina',
                countryCode: 'ar',
                score: 0,
                goalScoredTime:[],
                yellowCardTime:[],
                players: [
                    { playerId:0, name: 'Messi'},
                    { playerId:1, name: 'Martínez'},
                    { playerId:2, name: 'Dybala'},
                    { playerId:3, name: 'Marcos'},
                    { playerId:4, name: 'Martínez'},
                    { playerId:5, name: 'Rodrigo' },
                    { playerId:6, name: 'Martínez'},
                    { playerId:7, name: 'María'},
                ]
            },
            awayTeam: {
                name: 'Australia',
                countryCode: 'au',
                score: 0,
                goalScoredTime:[],
                yellowCardTime:[],
                players: [
                    { playerId:0, name: 'Ryan'},
                    { playerId:1, name: 'Goodwin'},
                    { playerId:2, name: 'Irvine'},
                    { playerId:3, name: 'Leckie'},
                    { playerId:4, name: 'Grant'},
                    { playerId:5, name: 'Maclaren'},
                    { playerId:6, name: 'Souttar'},
                    { playerId:7, name: 'Boyle'},
                ]
            }
        },
    ]
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.START_GAME:
            // get gameIdStartedGame and gameStartedTime from the action data
            const { gameIdStartedGame,gameStartedTime } = action.data;
            // find the game and identify the game is started or not
            // update the state only when the game is started
            const isGameStarted1 = state.games.find(game => game.gameId === gameIdStartedGame && game.startedGame === true);
            if(isGameStarted1){
                return state;
            }else{
                return {
                    ...state,
                    games: state.games.map((game) => game.gameId === gameIdStartedGame ? { ...game, startedGame: true,gameStartedTime:gameStartedTime } : game)
                }
            }
        case actionTypes.UPDATE_SCORE:
            //  get gameId,teamId,playerId,goalScoredTime from the action input
            const { gameId,teamId,playerId,goalScoredTime } = action.data;
            // find the game data by the gameId
            const game = state.games.find((game) => game.gameId === gameId);
            // update the state only when the gamedata is available else return the previous state
            if(!game){
                return state;
            }
            // get the time difference between goalScoredTime and gameStartedTime from the state values
            //  timeDifferenceInMillis  will be in milliseconds, convert into seconds
            const timeDifferenceInMillis = goalScoredTime - game.gameStartedTime;
            const timeDifferenceInSeconds = Math.floor(timeDifferenceInMillis / 1000);
            const seconds = timeDifferenceInSeconds % 60;
            // Don't update the score if the game has not started yer
            const isGameStarted = state.games.find(game => game.gameId === gameId && game.startedGame === true);
            if (!isGameStarted) {
                return state;
            }
            // by using the input teamId from the action get the team values from the teamsMap
            // get the playerOfTheTeam who has scored the goal from the team, by using the playerId and teamId received as input.
            // update the state values with goalScoredTime along with playername and goalscoredtime in seconds
            // update the state only when the input gameId is matched [ from action ] while iteration
            const team = teamsMap[teamId];
            const playerOfTheTeam = game[team].players.find(player => player.playerId === playerId);
            return {
                ...state,
                games: state.games.map((game) => game.gameId === gameId ?
                    {
                        ...game,
                        [team]: {
                            ...game[team],
                            score: game[team].score + 1,
                            goalScoredTime: [...game[team].goalScoredTime, { name: playerOfTheTeam.name, time: seconds } ]
                        }
                    } :
                    game)
            }
            // finish game case for updating the game status
            // once all the games are finished, copy the values from initial state to finishedGames, sort by sum of the goal scored by both teams.
        case actionTypes.FINISH_GAME:
            const { gameIdFinishedGame } = action.data;
            return {
                ...state,
                games: state.games.filter(game => game.gameId !== gameIdFinishedGame),
                finishedGames: [
                    ...state.finishedGames,
                    state.games.find((game) => game.gameId === gameIdFinishedGame)
                ].filter(Boolean) // filter(Boolean) keeps the array clean, i.e. removes `undefined` or `null`
                 .sort(sortGamesByTotalScore)
                 .map(game => {
                     game.startedGame = false;
                     return game;
                 })
            }
        // case for updating the yellow card information during the match time
        // receives   gameIdYellowCard,   teamIdYellowCard, playerIdYellowCard, yellowCardGivenTime from the action
        case actionTypes.YELLOW_CARD_INFORMATION:
            const { gameIdYellowCard,teamIdYellowCard,playerIdYellowCard,yellowCardGivenTime } = action.data;
            const gameYellowCard = state.games.find((game) => game.gameId === gameIdYellowCard);
            if(!gameYellowCard){
                return state;
            }
            const timeDifferenceInMillisForYellowCard = yellowCardGivenTime - gameYellowCard.gameStartedTime;
            const timeDifferenceForYellowCardInSeconds = Math.floor(timeDifferenceInMillisForYellowCard / 1000);
            const yellowCardTimeInSeconds = timeDifferenceForYellowCardInSeconds % 60;
            // Don't update the score if the game has not started yet
            const isGameStartedForYellowCard = state.games.find(game => game.gameId === gameIdYellowCard && game.startedGame === true);
            if (!isGameStartedForYellowCard) {
                return state;
            }
            // Increment the goals value of the team who scored
            const teamForYellowCard = teamsMap[teamIdYellowCard];
            const playerOfTheTeamForYellowCard = gameYellowCard[teamForYellowCard].players.find(player => player.playerId === playerIdYellowCard);
            console.log("playerDataOfTheTeam in the update method"+playerOfTheTeamForYellowCard);
            console.log(playerOfTheTeamForYellowCard);
            return {
                ...state,
                games: state.games.map((game) => game.gameId === gameIdYellowCard ?
                    {
                        ...game,
                        [teamForYellowCard]: {
                            ...game[teamForYellowCard],
                            yellowCardTime: [...game[teamForYellowCard].yellowCardTime, { name: playerOfTheTeamForYellowCard.name, time: yellowCardTimeInSeconds } ]
                        }
                    } :
                    game)
            }
        default:
            throw new Error('Unrecognized action type. Please check ScoresReducer.');
    }

}
export default reducer;
