import React, { ChangeEvent, useState } from "react";
import ethers from 'ethers';

import { getFactoryContract } from '../../utils/ethers';
import { Button, makeStyles, TextField, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

}));

const CreateExchange = (props: any) => {
    const classes = useStyles();

    const [newExchangeToken, setNewExchangeTokenInput] = useState<string>('');

    const handleNewExchangeTokenChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setNewExchangeTokenInput(event.target.value);
    }

    const handleCreateExchange = async () => {
        console.log(newExchangeToken)
        await (getFactoryContract(props.network)).createExchange(newExchangeToken);
    }

    return (
        <div>
            <Grid container direction="row" justifyContent="space-between">
                <Grid item xs={8}>
                    <TextField fullWidth label="TokenAddress" color="secondary" focused onChange={handleNewExchangeTokenChange} />
                </Grid>
                <Grid item xs={4}>
                    <Button color="secondary" variant="outlined" onClick={handleCreateExchange}>Create Exchange</Button>
                </Grid>

            </Grid>

        </div>
    )
}

export default CreateExchange;