import type {FC} from "react";
import type {BalanceProps} from "../types";

export const Balance:FC<BalanceProps> = ({balance}) => {
    return (
        <div>
            <h1>Bank</h1>
            <h3>Balance: {balance}</h3>
        </div>
    );
};
