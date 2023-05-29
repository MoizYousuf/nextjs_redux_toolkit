import React from "react";
import { Button, Grid } from "@nextui-org/react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { InitializeIdl } from "@/redux/actions/AnchorAction";
import { useDispatch } from "react-redux";
require('@solana/wallet-adapter-react-ui/styles.css');

const Header: React.FC = () => {
    const wallet = useWallet();
    const walletModal = useWalletModal();
    const { connection } = useConnection();
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(InitializeIdl(connection, wallet as any))
    }, [dispatch, wallet, connection])


    const connectionFunc = React.useCallback(() => {
        if (wallet.connected) wallet.disconnect();
        else walletModal.setVisible(true)
    }, [walletModal, wallet]);

    return (
        <Grid.Container css={{ mt: 10, mb: 20 }}>
            <Grid xs={8}></Grid>
            <Grid xs={4} css={{ justifyContent: 'flex-end' }}>
                <Button onClick={connectionFunc}>{wallet.connected ? wallet?.publicKey?.toString().slice(0, 8).concat('....') : "Connect"}</Button>
            </Grid>
        </Grid.Container>
    )
}

export default Header;