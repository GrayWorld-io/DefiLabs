import React, { useEffect } from "react";
import {
    Grid,
    makeStyles,
    Paper,
    Typography,
} from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { useSnackbar } from "notistack";

import TokenSelectDialog from "../../components/TokenSelectDialog/TokenSelectDialog";
import TokenInputField from "../../components/TokenInputField";
import LoadingButton from "../../components/LoadingButton";

import { getTokenBalanceAndSymbol, getAccountBalance } from "../../utils/ethers";
import { getReserves, getLPTokenAmount } from "../../functions/cpmm";
import { addLiquidity } from "../../functions/liquidity";

const useStyles = makeStyles((theme) => ({
    paperContainer: {
        borderRadius: theme.spacing(2),
        padding: theme.spacing(2),
        paddingBottom: theme.spacing(3),
        width: "40%",
        overflow: "wrap",
        background: "linear-gradient(45deg, #ff0000 30%, #FF8E53 90%)",
        color: "white",
    },
    fullWidth: {
        width: "100%",
    },
    values: {
        width: "50%",
    },
    title: {
        textAlign: "center",
        padding: theme.spacing(0.5),
        marginBottom: theme.spacing(1),
    },
    hr: {
        width: "100%",
    },
    balance: {
        padding: theme.spacing(1),
        overflow: "wrap",
        textAlign: "center",
    },
    buttonIcon: {
        marginRight: theme.spacing(1),
        padding: theme.spacing(0.4),
    },
}));

const AddLiquidity = (props: any) => {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    // Stores a record of whether their respective dialog window is open
    const [dialog1Open, setDialog1Open] = React.useState(false);
    const [dialog2Open, setDialog2Open] = React.useState(false);

    // Stores data about their respective coin
    const [coin1, setCoin1] = React.useState({
        symbol: "",
        balance: "",
    });
    const [coin2, setCoin2] = React.useState({
        address: "",
        symbol: "",
        balance: "",
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
            coin2.address &&
            parsedInput1 !== NaN &&
            0 < parsedInput1 &&
            parsedInput2 !== NaN &&
            0 < parsedInput2 &&
            parsedInput1 <= parseFloat(coin1.balance) &&
            parsedInput2 <= parseFloat(coin2.balance)
        );
    };


    const callAddLiquidity = async () => {
        console.log("Attempting to add liquidity...");
        setLoading(true);
        addLiquidity(reserves, field1Value, field2Value, coin2.address, props.network).then(() => {
            setLoading(false);
        });
    }

    // Called when the dialog window for coin1 exits
    const onToken1Selected = (tokenAddress: string) => {
        // Cldㄱose the dialog window
        setDialog1Open(false);
        if (tokenAddress == "ETH") {
            getAccountBalance(props.account)
                .then((data) => {
                    setCoin1({
                        symbol: data.symbol,
                        balance: data.balance
                    })
                })
        } else {
            getTokenBalanceAndSymbol(props.account, tokenAddress)
                .then((data) => {
                    setCoin2({
                        address: tokenAddress,
                        symbol: data.symbol,
                        balance: data.balance
                    })
                });
        }
    }

    // Called when the dialog window for coin1 exits
    const onToken2Selected = (tokenAddress: string) => {
        // Close the dialog window
        setDialog2Open(false);
        if (tokenAddress == "ETH") {
            getAccountBalance(props.account)
                .then((data) => {
                    setCoin2({
                        address: tokenAddress,
                        symbol: data.symbol,
                        balance: data.balance
                    })
                })
        } else {
            getTokenBalanceAndSymbol(props.account, tokenAddress)
                .then((data) => {
                    setCoin2({
                        address: tokenAddress,
                        symbol: data.symbol,
                        balance: data.balance
                    })
                });
        }

    }


    // This hook is called when either of the state variables `coin1.address` or `coin2.address` change.
    // This means that when the user selects a different coin to convert between, or the coins are swapped,
    // the new reserves will be calculated.
    useEffect(() => {
        console.log(
            "Trying to get reserves between:\n" + coin2.address
        );

        getReserves(coin2.address, props.network).then((reserves) => {
            setReserves(reserves);
        });
        getLPTokenAmount(coin2.address, props.account, props.network).then((balance) => {
            setLiquidityTokens(balance);
        });
    }, [coin2.address, props.network, props.account]);

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
            {/* Liquidity deployer */}
            <Typography variant="h5" className={classes.title}></Typography>

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
                <Grid item xs={12} className={classes.fullWidth}>
                    <TokenInputField
                        activeField={true}
                        value={field1Value}
                        onClick={() => setDialog1Open(true)}
                        onChange={handleChange.field1}
                        symbol={coin1.symbol !== "" ? coin1.symbol : "Select"}
                    />
                </Grid>
                <Grid item xs={12} className={classes.fullWidth}>
                    <TokenInputField
                        activeField={true}
                        value={field2Value}
                        onClick={() => setDialog2Open(true)}
                        onChange={handleChange.field2}
                        symbol={coin2.symbol !== "" ? coin2.symbol : "Select"}
                    />
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={4}
                className={classes.balance}
            >
                <hr className={classes.hr} />
                <Grid
                    container
                    item
                    className={classes.values}
                    direction="column"
                    alignItems="center"
                    spacing={2}
                >
                    {/* Balance Display */}
                    <Typography variant="h6">Your Balances</Typography>
                    <Grid container direction="row" justifyContent="space-between">
                        <Grid item xs={6}>
                            <Typography variant="body1" className={classes.balance}>
                                {formatBalance(coin1.balance, coin1.symbol)}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" className={classes.balance}>
                                {formatBalance(coin2.balance, coin2.symbol)}
                            </Typography>
                        </Grid>
                    </Grid>

                    <hr className={classes.hr} />
                    {/* Reserves Display */}
                    <Typography variant="h6">Reserves</Typography>
                    <Grid container direction="row" justifyContent="space-between">
                        <Grid item xs={6}>
                            <Typography variant="body1" className={classes.balance}>
                                {formatReserve(reserves[0], coin1.symbol)}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" className={classes.balance}>
                                {formatReserve(reserves[1], coin2.symbol)}
                            </Typography>
                        </Grid>
                    </Grid>

                    <hr className={classes.hr} />

                    {/* Liquidity Tokens Display */}
                    <Typography variant="h6">Your Liquidity Pool Tokens</Typography>
                    <Grid container direction="row" justifyContent="center">
                        <Grid item xs={6}>
                            <Typography variant="body1" className={classes.balance}>
                                {formatReserve(liquidityTokens, " ")}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Paper className={classes.paperContainer}>
                    {/*Red  Display to show the quote */}
                    <Grid
                        container
                        item
                        direction="column"
                        alignItems="center"
                        spacing={2}
                        className={classes.fullWidth}
                    >
                        {/* Tokens in */}
                        <Typography variant="h6">Tokens in</Typography>
                        <Grid container direction="row" justifyContent="space-between">
                            <Grid item xs={6}>
                                <Typography variant="body1" className={classes.balance}>
                                    {/* {formatBalance(liquidityOut[0], coin1.symbol)} */}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1" className={classes.balance}>
                                    {/* {formatBalance(liquidityOut[1], coin2.symbol)} */}
                                </Typography>
                            </Grid>
                        </Grid>

                        <hr className={classes.hr} />

                        {/* Liquidity Tokens Display */}
                        <Typography variant="h6">Liquidity Pool Tokens Out</Typography>
                        <Grid container direction="row" justifyContent="center">
                            <Grid item xs={6}>
                                <Typography variant="body1" className={classes.balance}>
                                    {/* {formatReserve(liquidityOut[2], "UNI-V2")} */}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

            <Grid container direction="column" alignItems="center" spacing={2}>
                <LoadingButton
                    loading={loading}
                    valid={isButtonEnabled()}
                    success={false}
                    fail={false}
                    onClick={callAddLiquidity}
                >
                    <AccountBalanceIcon className={classes.buttonIcon} />
                    Add Liquidity
                </LoadingButton>
            </Grid>
        </div>
    )
}

export default AddLiquidity;