import { Button, Container } from '@nextui-org/react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React from 'react';
import { ICalculator } from '../../types';

const Calculator: React.FC<ICalculator> = () => {

    const onConnect = () => {

    }
    return (
        <Container>
            <Button onClick={onConnect} >Connect</Button>
            <WalletMultiButton />
        </Container>
    );
};

export default Calculator;