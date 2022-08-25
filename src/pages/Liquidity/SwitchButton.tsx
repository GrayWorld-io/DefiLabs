import React from "react";
import { ButtonGroup, Button, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: "center",
        padding: theme.spacing(0.5),
        marginBottom: theme.spacing(1),
      },
}));

const SwitchButton = (props: any) => {
    const classes = useStyles();
    const { setAddState } = props;

    return (
        <div>
            <Typography variant="h5" className={classes.title}></Typography>

            <ButtonGroup size="large" variant="contained">
                <Button
                    id="add-button"
                    color="primary"
                    onClick={() => {
                        setAddState(true);
                    }}
                >
                    Add Liquidity
                </Button>
                <Button
                    id="add-button"
                    color="primary"
                    onClick={() => {
                        setAddState(false);
                    }}
                >
                    Remove Liquidity
                </Button>
            </ButtonGroup>
        </div>
    );
}

export default SwitchButton;