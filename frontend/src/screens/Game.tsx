import { Button } from "../components/Button"
import { ChessBoard } from "../components/ChessBoard"
import { useSockets } from "../hooks/useSocket"
export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over"

export const Game = () => {
    const socket = useSockets();
    if(!socket) return <div>Connecting ...........</div>
    return <div className="justify-center flex">
        <div className="pt-8 max-w-screen-lg w-full">
            <div className="grid grid-cols-6 gap-4 w-full">
                <div className="col-span-4 w-full bg-red-200">
                    <ChessBoard />
                </div>
                <div className="col-span-2 bg-green-200 w-full">
                    <Button onClick={()=>{
                        socket.send(JSON.stringify({
                            type:INIT_GAME,
                        }))
                    }}> Play</Button>
                </div>
            </div>
        </div>
    </div>
}