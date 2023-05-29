'use client'
import React from 'react';
import { ICounter } from '../types';
import { Button, Container, Grid, Input } from '@nextui-org/react';
import Header from '../components/header';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { Operation } from '@/redux/actions/AnchorAction';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Wallet } from '@project-serum/anchor';


const Counter: React.FC<ICounter> = () => {
    const dispatch = useAppDispatch()
    const { program } = useAppSelector(state => state.anchor)
    const wallet = useWallet();
    const { connection } = useConnection()
    const addition = React.useCallback(() => {
        if (!program || !wallet) return;
        dispatch(Operation({
            program,
            wallet: wallet as any,
            first: 10,
            second: 5,
            connection
        }));
    }, [dispatch, program, wallet, connection])

    return (
        <Container>
            <Header />
            <Grid.Container justify={"center"}>
                <Grid xs={5} css={{ backgroundColor: "rgba(0,0,0,0.8)", padding: 20, borderRadius: 20 }}>
                    <Grid.Container>
                        <Grid xs={12}>
                            <Input type={"number"} css={{ width: "100%" }} placeholder='first value' />
                        </Grid>
                        <Grid css={{ mt: 10 }} xs={12}>
                            <Input type={"number"} css={{ width: "100%" }} placeholder='second value' />
                        </Grid>
                        <Grid css={{ mt: 10 }} xs={12} justify='center'>
                            <Button color={'secondary'} css={{ fontWeight: "800" }} onPress={addition} auto>ADDITION</Button>

                            <Button css={{ ml: 10, fontWeight: "800" }} color={'secondary'} auto>SUBTRACTION</Button>
                        </Grid>
                    </Grid.Container>
                </Grid>
            </Grid.Container>
        </Container>
    )
}

export default Counter;