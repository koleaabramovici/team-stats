const team = {
 _players: [{
firstName: 'Pablo',
lastName: 'Escobar',
age: 42},
{firstName: 'Alex',
lastName: 'Salvatore',
age: 27},
{firstName: 'Jora',
lastName: 'Mentu',
age: 35
}],
 _games: [{
opponent: 'Bayern',
teamPoints: 2,
oppoentPoints: 1},
{opponent: 'CSS',
teamPoints: 0,
oppoentPoints: 1},
{opponent: 'Milano',
teamPoints: 3,
oppoentPoints: 2
}],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName, lastName, age){
    const player = {
      first: firstName,
      las: lastName,
      age: age
    };
    this.players.push(player)
  },
  addGame(opponentName, teamPoints, opponentPoints) {
   const game = {
     opponent: opponentName,
     teamP: teamPoints,
     oppP: opponentPoints
   };
   this._games.push(game)
  }
}

team.addPlayer( 'Steph', 'Curry', 28);
team.addPlayer( 'Lisa', 'Leslie', 44);
team.addPlayer( 'Bugs', 'Bunny', 76);

team.addGame('Real', 3, 3);
team.addGame('Atletico', 1, 2);
team.addGame('Barcelona', 4, 1);

console.log(team.players[0]);
console.log(team.games[0]);



//console.log(team.players[0])

