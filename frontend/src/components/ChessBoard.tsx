import { Square } from "chess.js"
import { Color, PieceSymbol } from "../../node_modules/chess.js/dist/types/chess";

export const ChessBoard = ({ board }: {
    board : ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    }| null)[][]
} ) => {
    return <div className="text-white-200">
        {board.map((row, i) =>{
            return <div key={i} className="flex">
                {row.map((square, j)=>{
                    return <div key={j} className={`w-16 h-16 ${(i+j)%2 ===0 ? `bg-green-500` : `bg-white` }`}> 
                        {square ? square.type:""}
                    </div>
                })} 

            </div>
        })}
    </div>
}

/*
{ board:{
    square: square;
    type: PieceSymbol;
    color: Color;
} | null)[][]
}
*/