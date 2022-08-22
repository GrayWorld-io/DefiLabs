import React, { ChangeEvent, useState } from "react";
import ethers from 'ethers';

import { getFactoryContract } from '../../utils';

const Liquidity = (props: any) => {

    const [newExchangeToken, setNewExchangeTokenInput] = useState<string>('');

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
            <div>

                <input id="greetingInput"
                    type="text"
                    onChange={handleNewExchangeTokenChange}/>
                <button type="button" onClick={handleCreateExchange}>CreateExchange</button>
            </div>
        </div>
    )
}

export default Liquidity;