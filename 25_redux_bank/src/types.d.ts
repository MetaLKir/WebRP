export interface AccountState {
    balance: number;
}

export interface BalanceProps{
    balance: number;
}

export interface OperationProps{
    onDeposit:(amount:number) => void;
    onWithdraw:(amount:number) => void;
}