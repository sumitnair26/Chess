import { INIT_GAME } from "./Messages";

export class GameManager {
    private games: Game[];
    private pendingUser: WebSocket;
    private users: WebSocket[];

    constructor() {
        this.games = [];
    }

    addUser(socket: WebSocket){
        this.users.push(socket);
    }

    removeUser(socket: WebSocket){
        this.users = this.users.filter(user => user !== socket);
        //Stop the Game here as the user has left
    }

    private handleMessage(socket: WebSocket) {
        socket.on("message", (data)=> {
            const message = JSON.parse(data.toString());

            if(message.type == INIT_GAME){
                if(this.pendingUser) {
                    //start a game
                }else {
                    this.pendingUser = socket;
                }
            }
        })
    }
}