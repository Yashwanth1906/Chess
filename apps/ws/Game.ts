import {Chess, Square} from "chess.js"

type GAME_RESULT = "white_wins" | "black_wins" | "draw";

function isPromoting(board : Chess,from : Square, to : Square){
    if(!from) return false;
    const cell = board.get(from);
    if(cell.type !== 'p') return false;
    if(cell.color !== board.turn()) return false;
    if(!['1','8'].some((i) => to.endsWith(i))) return false;

    return board.moves({square:from,verbose:true}).map((i) => i.to).includes(to);
}
export class Game{
    public gameId : string;
    public player1Id : string;
    public player2Id : string | null;
    public board : Chess;
    public movesCount : number = 0;
    public result : GAME_RESULT | null;
    private player1TimeTaken = 0;
    private player2TimeTaken = 0;
    private startTime = new Date(Date.now());
    private lastMoveTime = new Date(Date.now());


    constructor(player1Id : string,player2Id : string | null, gameId : string | null,startTime? : Date){
        this.player1Id = player1Id;
        this.player2Id = player2Id;
        this.gameId = gameId ?? this.getRandom();
        this.board =new Chess();
        this.result = null;
        if(startTime){
            this.startTime = startTime;
            this.lastMoveTime = startTime;
        }
    }
    getRandom(){
        return Math.random().toString().substring(2,15) + Math.random().toString().substring(2,15);
    }

    seedMoves(moves : {
        id: string,
        gameId : string,
        moveNumber : number,
        from : string,
        to : string,
        comments : string | null,
        timeTake : number | null,
        createAt : Date
    }[]){
        moves.forEach((move : any) => {
            if(isPromoting(this.board,move.from as Square, move.to as Square)){
                this.board.move({
                    from:move.from,
                    to:move.to,
                    promotion:'q'
                })
            } else {
                this.board.move({
                    from:move.from,
                    to: move.to
                })
            }
        })
        this.movesCount = moves.length;
        if(moves[moves.length-1]){
            this.lastMoveTime = moves[moves.length -1].createAt;
        }
        moves.map((move,index) =>{
            if(move.timeTake){
                if(index % 2 === 0) this.player1TimeTaken += move.timeTake;
                else this.player2TimeTaken += move.timeTake;
            }
        })
    }
    updateSecondPlayer = async(player2Id :string) =>{
        this.player2Id = player2Id;
        // const whitePlayer = get the white player from the db or the redis.
        // const blackPlayer = get the black playyer from the db or the redis
    }
}