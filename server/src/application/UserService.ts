import { User } from "../domain/User";
import { UserInterface } from "./UserInterface";

/*
service = new PlayerService(playerInterface)
service.createUser(user)
*/

export class UserService {
  userInterface: UserInterface;
  constructor(userInterface: UserInterface) {
    this.userInterface = userInterface;
  }

  createUser(user: User): Promise<string> {
    return this.userInterface.createUser(user);
  }

  // changeName(playerId: string, newName: string): Promise<Partial<Player>> {
  //   return this.playerInterface.changeName(playerId, newName);
  // }

  // findPlayer(playerID: string): Promise<Player> {
  //   return this.playerInterface.findPlayer(playerID);
  // }

  // findPlayerByEmail(playerEmail: string): Promise<Player> {
  //   return this.playerInterface.findPlayerByEmail(playerEmail);
  // }

  // async addGame(playerId: string): Promise<GameType> {
  //   const dice = new Dice();
  //   const player = await this.findPlayer(playerId);
  //   const game = new Game(dice);
  //   player.addNewGame(game);
  //   return this.playerInterface.addGame(player);
  // }

  // deleteAllGames(playerDetails: Player): Promise<boolean> {
  //   return this.playerInterface.deleteAllGames(playerDetails);
  // }

  // getGames(playerId: string): Promise<Array<GameType>> {
  //   return this.playerInterface.getGames(playerId);
  // }

  // getPlayerList(): Promise<PlayerList> {
  //   return this.playerInterface.getPlayerList();
  // }
}
