import { Idl, Program, Wallet } from "@project-serum/anchor";
import { Connection, PublicKey } from "@solana/web3.js";

export interface ICustomNavigate {
    navigate: (url: string) => void;
}

export interface IChildren {
    children: React.ReactNode;
}

// counter page

export interface ICounter extends ICustomNavigate {

}
export interface ICalculator extends ICustomNavigate {

}

export interface ILayout extends IChildren {
    isPending: boolean
}

export interface IAnchorState<T extends Idl = any> {
    program: Program<T> | null;
    tx: string | null;
}
export type IActionReducer<T = any> = {
    type: string;
    payload: T;
}
export type IArgsOperation<T extends Idl = any> = {
    program: Program<T>;
    wallet: Wallet,
    connection: Connection,
    first: number,
    second: number
}