import React from "react";
import { ButtonGroup, Button } from "@mui/material";

const SwitchButton = (props: any) => {
    const { setAddState } = props;

    return (
        <div>
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