import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import * as anchor from '@project-serum/anchor'
import * as web3 from '@solana/web3.js'
import { ProgramId } from '@/constants';
import { IDL, PlusProgram } from '@/idl/PlusProgram';
import { Connection } from '@solana/web3.js';
import { Wallet } from '@project-serum/anchor';
import { IArgsOperation } from '@/app/types';


const InitializeIdl = createAction('anchor/initializeIdl', (connection: Connection, wallet: Wallet) => {
    return {
        payload: new anchor.Program<PlusProgram>(IDL,
            ProgramId,
            new anchor.AnchorProvider(connection, wallet, {
                preflightCommitment: 'processed',
            }))
    }
})

const Operation = createAsyncThunk('anchor/operation', async (data: IArgsOperation<PlusProgram>) => {
    const { program, first, second, wallet, connection } = data;
    try {
        const keypair = web3.Keypair.generate();
        let transaction = new web3.Transaction();
        transaction.add(await program.methods.operation(
            new anchor.BN(first),
            new anchor.BN(second),
            { add: {} }
        ).accounts({
            signer: program.provider.publicKey,
            systemProgram: web3.SystemProgram.programId,
            plusAccount: keypair.publicKey
        }).signers([keypair]).instruction())
        transaction.feePayer = wallet.publicKey;
        transaction.recentBlockhash = (await program.provider.connection.getLatestBlockhash("finalized")).blockhash;
        transaction = await wallet.signTransaction(transaction);
        console.log("done na done", transaction)
        const tx = await connection.sendRawTransaction(transaction.serialize());
        console.log("tx", tx)
        // await wallet.signTransaction(transaction);
        // console.log("wallet", transaction)
        // // sending raw transaction
        // let tx = await connection.sendRawTransaction(transaction.serialize())
        // console.log("trx", tx)
    } catch (error) {
        console.log('error', error)
    }
});

export { InitializeIdl, Operation };