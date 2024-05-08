import { Chess } from "chess.js";
import { WebSocket } from "ws";
import { GAME_OVER, INIT_GAME, MOVE } from "./Messages";

export class Game {
    public player1: WebSocket;
    public player2: WebSocket;
    public board: Chess;
    private startTime: Date;

    constructor(player1: WebSocket, player2: WebSocket){
        this.player1 = player1;
        this.player2 = player2;
        this.board = new Chess();
        this.startTime = new Date();
        this.player1.send(JSON.stringify({
            type:INIT_GAME,
            payload:{
                color: "white"
            }
        }));
        this.player2.send(JSON.stringify({
            type:INIT_GAME,
            payload:{
                color: "black"
            }
        }));
    }
    /*  
        validation
        is it the users move
        is the move valid 
        Validate the type of move
    */
    makeMove(socket: WebSocket, move: {
                from: string,
                    to:string}) {
            try {
                this.board.move(move)
            } catch (error) {
                console.log(error);
                return;
            }

            if(this.board.isGameOver()){
                this.player1.emit(JSON.stringify({
                    type: GAME_OVER,
                    payload:{
                        winner: this.board.turn() ==="w" ? "black" : "white" 
                    }
                }))
                this.player2.emit(JSON.stringify({
                    type: GAME_OVER,
                    payload:{
                        winner: this.board.turn() ==="w" ? "black" : "white" 
                    }
                }))
            }

            if (this.board.moves.length % 2 ===0) {
                this.player2.emit(JSON.stringify({
                    type:MOVE,
                    payload:move
                }))
            }else{
                this.player1.emit(JSON.stringify({
                    type:MOVE,
                    payload:move
                }))
            }        
        }
    }