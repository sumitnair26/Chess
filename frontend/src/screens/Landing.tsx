import { useNavigate } from "../../node_modules/react-router-dom/dist/index"

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
                    <div onClick={()=>{
                        navigate("/game")
                    }} className="mt-4">
                        <button className="px-8 py-4 text-2xl bg-green-500 hover:bg-green-700 text-white font-bold rounded">
                            Play Online
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}