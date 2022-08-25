import React, { useEffect } from "react";
import {
    Container,
    Grid,
    IconButton,
    makeStyles,
    Paper,
    Typography,
  } from "@material-ui/core";
import { useSnackbar } from "notistack";

import TokenSelectDialog from "../../components/TokenSelectDialog/TokenSelectDialog";
import TokenInputField from "../../components/TokenSelectDialog/TokenInputField";

const AddLiquidity = (props: any) => {

    const { enqueueSnackbar } = useSnackbar();
    // Stores a record of whether their respective dialog window is open
    const [dialog1Open, setDialog1Open] = React.useState(false);
    const [dialog2Open, setDialog2Open] = React.useState(false);

    // Stores data about their respective coin
    const [coin1, setCoin1] = React.useState({
        address: undefined,
        symbol: undefined,
        balance: undefined,
    });
    const [coin2, setCoin2] = React.useState({
        address: undefined,
        symbol: undefined,
        balance: undefined,
    });

    // Stores the current reserves in the liquidity pool between coin1 and coin2
    const [reserves, setReserves] = React.useState(["0.0", "0.0"]);

    // Stores the current value of their respective text box
    const [field1Value, setField1Value] = React.useState("");
    const [field2Value, setField2Value] = React.useState("");

    // Controls the loading button
    const [loading, setLoading] = React.useState(false);

    // Stores the user's balance of liquidity tokens for the current pair
    const [liquidityTokens, setLiquidityTokens] = React.useState("");

    // Used when getting a quote of liquidity
    const [liquidityOut, setLiquidityOut] = React.useState([0, 0, 0]);

    // These functions take an HTML event, pull the data out and puts it into a state variable.
    const handleChange = {
        field1: (e: any) => {
            setField1Value(e.target.value);
        },
        field2: (e: any) => {
            setField2Value(e.target.value);
        },
    };

    // Turns the account's balance into something nice and readable
    const formatBalance = (balance: string, symbol: string) => {
        if (balance && symbol)
            return parseFloat(balance).toPrecision(8) + " " + symbol;
        else return "0.0";
    };

    // Turns the coin's reserves into something nice and readable
    const formatReserve = (reserve: string, symbol: string) => {
        if (reserve && symbol) return reserve + " " + symbol;
        else return "0.0";
    };

    // Determines whether the button should be enabled or not
    const isButtonEnabled = () => {

        // If both coins have been selected, and a valid float has been entered for both, which are less than the user's balances, then return true
        const parsedInput1 = parseFloat(field1Value);
        const parsedInput2 = parseFloat(field2Value);
        return (
            coin1.address &&
            coin2.address &&
            parsedInput1 !== NaN &&
            0 < parsedInput1 &&
            parsedInput2 !== NaN &&
            0 < parsedInput2 &&
            parsedInput1 <= coin1.balance! &&
            parsedInput2 <= coin2.balance!
        );
    };


    const deploy = () => {
        console.log("Attempting to add liquidity...");
        setLoading(true);


    }

    // Called when the dialog window for coin1 exits
    const onToken1Selected = (address: string) => {
        // Close the dialog window
        setDialog1Open(false);

        if (address == "ETH") {

        } else {
            
        }
    }

    // Called when the dialog window for coin1 exits
    const onToken2Selected = (address: string) => {
        // Close the dialog window
        setDialog2Open(false);

    }


    // This hook is called when either of the state variables `coin1.address` or `coin2.address` change.
    // This means that when the user selects a different coin to convert between, or the coins are swapped,
    // the new reserves will be calculated.
    useEffect(() => {
        console.log(
            "Trying to get reserves between:\n" + coin1.address + "\n" + coin2.address
        );


    }, [coin1.address, coin2.address, props.network, props.account]);

    // This hook creates a timeout that will run every ~10 seconds, it's role is to check if the user's balance has
    // updated has changed. This allows them to see when a transaction completes by looking at the balance output.
    useEffect(() => {
        const coinTimeout = setTimeout(() => {
            console.log("Checking balances & Getting reserves...");

        }, 10000);

        return () => clearTimeout(coinTimeout);
    });
    return (
        <div>
            {/* Dialog Windows */}
            <TokenSelectDialog
                open={dialog1Open}
                onClose={onToken1Selected}
            />
            <TokenSelectDialog
                open={dialog2Open}
                onClose={onToken2Selected}
            />
            <Grid container direction="column" alignItems="center" spacing={2}>
                <Grid item xs={12}>
                    <TokenInputField
                        activeField={true}
                        value={field1Value}
                        onClick={() => setDialog1Open(true)}
                        onChange={handleChange.field1}
                        symbol={coin1.symbol !== undefined ? coin1.symbol : "Select"}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TokenInputField
                        activeField={true}
                        value={field2Value}
                        onClick={() => setDialog2Open(true)}
                        onChange={handleChange.field2}
                        symbol={coin2.symbol !== undefined ? coin2.symbol : "Select"}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default AddLiquidity;