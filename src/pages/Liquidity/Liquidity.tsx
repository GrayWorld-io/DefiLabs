import React, { ChangeEvent, useState } from "react";
import {
    Theme,
    Container,
    Grid,
    makeStyles,
    createStyles,
    Paper,
    Typography,
} from "@material-ui/core";

import ethers from 'ethers';

import CreateExchange from './CreateExchange';
import SwitchButton from './SwitchButton';
import AddLiquidity from './AddLiquidity';
import RemoveLiquidity from './RemoveLiquidity';

const styles = (theme: Theme) => createStyles({
    paperContainer: {
        borderRadius: theme.spacing(2),
        padding: theme.spacing(1),
        paddingBottom: theme.spacing(3),
        maxWidth: 700,
        margin: "auto",
    },
    title: {
        textAlign: "center",
        padding: theme.spacing(0.5),
        marginBottom: theme.spacing(1),
    },
    footer: {
        marginTop: "155px",
    },
});

const useStyles = makeStyles(styles);

const Liquidity = (props: any) => {
    const classes = useStyles();

    const [newExchangeToken, setNewExchangeTokenInput] = useState<string>('');

    const [addState, setAddState] = React.useState(true);

    const add_or_remove = (deploy: boolean) => {
        if (deploy === true) {
            return <AddLiquidity network={props.network} account={props.account} />;
        }
        return <RemoveLiquidity network={props.network} account={props.account} />;
    };

    return (
        <div>
            <Container>

                <Paper className={classes.paperContainer}>

                    <CreateExchange network={props.network} account={props.account}/>

                    <Typography variant="h5" className={classes.title}>
                        <SwitchButton setAddState={setAddState} />
                    </Typography>
                    {add_or_remove(addState)}
                </Paper>
            </Container>

        </div>
    )
}

export default Liquidity;