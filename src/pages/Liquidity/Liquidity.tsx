import React, { ChangeEvent, useState } from "react";
import {
    Container,
    Grid,
    makeStyles,
    Paper,
    Typography,
} from "@material-ui/core";

import ethers from 'ethers';

import CreateExchange from './CreateExchange';
import SwitchButton from './SwitchButton';
import AddLiquidity from './AddLiquidity';
import RemoveLiquidity from './RemoveLiquidity';

const Liquidity = (props: any) => {

    const [newExchangeToken, setNewExchangeTokenInput] = useState<string>('');

    const [addState, setAddState] = React.useState(true);

    const deploy_or_remove = (deploy: boolean) => {
        if (deploy === true) {
            return <AddLiquidity network={props.network} />;
        }
        return <RemoveLiquidity network={props.network} />;
    };

    const handleNewExchangeTokenChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setNewExchangeTokenInput(event.target.value);
    }

    const handleCreateExchange = async () => {
        alert(newExchangeToken);
        // await (getFactoryContract(props.network)).createExchange(newExchangeToken);
    }

    return (
        <div>
            <div>
                Liquidity
            </div>
            <CreateExchange />
            <SwitchButton setAddState={setAddState}/>
            {deploy_or_remove(addState)}
        </div>
    )
}

export default Liquidity;