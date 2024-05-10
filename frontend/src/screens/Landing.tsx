import { useNavigate } from "../../node_modules/react-router-dom/dist/index"
import { Button } from "../components/Button";

export const Landing = () => {
    const navigate = useNavigate();
    return <div>
        <div className="pt-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex justify-center">
                    <img src={"/chess_board.png"} className="max-w-96"  />
                </div>
                <div className="">
                    <div>
                        <h1 className="text-5xl font-bold text-white">Play Chess Online </h1>
                    </div>
                    <div className="mt-4">
                        <Button onClick={()=>{
                        navigate("/game")
                    }}> Play Online</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}