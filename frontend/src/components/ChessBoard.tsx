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
        ChessBoard Component
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