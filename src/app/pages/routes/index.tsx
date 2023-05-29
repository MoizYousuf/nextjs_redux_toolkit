'use client'
import React from 'react';
import Counter from '@/app/pages/counter';
import Layout from '@/app/customLayout';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { NextUIProvider } from "@nextui-org/react";
import { ConnectionProvider, WalletProvider, } from '@solana/wallet-adapter-react';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import Calculator from '../calculator';
import { clusterApiUrl } from '@solana/web3.js';



function Router() {
    const [page, setPage] = React.useState('/');
    const [isPending, startTransition] = React.useTransition();
    const wallets = React.useMemo(
        () => [
            new UnsafeBurnerWalletAdapter(),
        ],
        []
    );

    const endpoint = React.useMemo(() => clusterApiUrl('devnet'), [])
    const navigate = (url: string) => {
        startTransition(() => {
            setPage(url);
        });
    }

    let content: React.ReactNode;
    switch (page) {
        case '/':
            content = <Counter navigate={navigate} />;
            break;
        case '/calculator':
            content = <Calculator navigate={navigate} />;
            break;
        default:
            content = <h1>Not Found</h1>;
            break;
    }

    return (
        <Provider store={store}>
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                    <NextUIProvider>
                        <WalletModalProvider>
                            <Layout isPending={isPending}>
                                {content}
                            </Layout>
                        </WalletModalProvider>
                    </NextUIProvider>
                </WalletProvider>
            </ConnectionProvider>
        </Provider>
    );
}

export default Router;