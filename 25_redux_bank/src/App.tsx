import './App.css'
import {type FC, useState} from "react";
import type {AccountState} from "./types";
import {Balance} from "./components/Balance.tsx";
import {Operation} from "./components/Operation.tsx";

// how to intall Redux. Put in console: 
//npm install @reduxjs/toolkit react-redux

export const App: FC = () => {
    const [account, setAccount] = useState<AccountState>({balance: 0})

    const handleDeposit = (amount: number) => {
        setAccount((prevState) => ({
            ...prevState, balance: prevState.balance + amount
        }))
    }

    const handleWithdraw = (amount: number) => {
        setAccount((prevState: AccountState) => {
            const currentBalance = prevState.balance - amount;
            if (currentBalance < 0) return prevState;
            return {...prevState, balance: currentBalance};
        })
    }

    return (
        <>
            <Balance balance={account.balance}/>
            <Operation
                onDeposit={handleDeposit}
                onWithdraw={handleWithdraw}
            />
        </>
    )
}

