import {type ChangeEvent, type FC, useState} from "react";
import type {OperationProps} from "../types";


export const Operation: FC<OperationProps> = ({onDeposit, onWithdraw}) => {
    const [amount, setAmount] = useState<number>(0);

    const handleChange =
        (event: ChangeEvent<HTMLInputElement>) => {
            const value = Number(event.target.value);
            setAmount(isNaN(value) ? 0 : value);
        }

    const handleDepositClick = () => {
        if (amount > 0) {
            onDeposit(amount);
        }
    }

    const handleWithdrawClick = () => {
        if (amount > 0) {
            onWithdraw(amount);
        }
    }

    return (
        <div>
            <button onClick={handleWithdrawClick}>Withdraw</button>
            <input
                type={"number"}
                min={0}
                value={amount}
                onChange={handleChange}/>
            <button onClick={handleDepositClick}>Deposit</button>

        </div>
    );
};
