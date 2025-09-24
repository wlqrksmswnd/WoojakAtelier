export default function GameCard({game,record}){
    <div className="gamecard-container">
        <img src={`/game_imgs/${game}`}></img>
        <div>{record}</div>
    </div>
}