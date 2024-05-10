import { ChessBoard } from "../components/ChessBoard"

export const Game = () => {
    return <div className="justify-center flex">
        <div className="pt-8 max-w-screen-lg w-full">
            <div className="grid grid-cols-6 gap-4 w-full">
                <div className="col-span-4 w-full bg-red-200">
                    <ChessBoard />
                </div>
                <div className="col-span-2 bg-green-200 w-full">
                    <button>Play</button>
                </div>
            </div>
        </div>
    </div>
}