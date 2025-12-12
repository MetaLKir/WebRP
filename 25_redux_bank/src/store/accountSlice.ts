import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {AccountState} from "../types";

const initialState: AccountState = {
    balance: 0,
}

export const accountSlice =
    createSlice({
        name: "account",
        initialState,
        reducers: {
            //deposit
            deposit: (state, action: PayloadAction<number>) => {
                state.balance += action.payload;
            },
            withdraw: (state, action: PayloadAction<number>) => {
                const currentBalance = state.balance - action.payload;
                if (currentBalance >= 0) state.balance = currentBalance;
            }
        }
    })

export const {deposit, withdraw} = accountSlice.actions;
export default accountSlice.reducer;