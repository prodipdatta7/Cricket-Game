export interface NewMatch {
    matchID: string;
    tossWinner: string;
    electedTo: string;
    draw: boolean;
    winner: string;
    looser: string;
    firstInnings: any[];
    secondInnings: any[];
    winnersTotalRun: number;
    loosersTotalRun: number;
    winnersInnings: any[];
    loosersInnings: any[];
    totalRunsInFirstInnings: number;
    totalRunsInSecondInnings: number;
    Result: string;
    toDay: number;
}
