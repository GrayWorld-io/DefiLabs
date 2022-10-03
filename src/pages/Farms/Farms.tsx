import React, { useEffect, useState } from "react";
import FarmList from "../../components/Farms/Farms";

import {
    Theme,
    Container,
    makeStyles,
    createStyles,
    Paper,
    Typography,
} from "@material-ui/core";

import { fetchFarms } from "../../functions/farms/farms";
import { getFarmConfig } from "../../constants/farms";
import { SerializedFarmConfig } from "../../constants/types";

const Farms = (props: any) => {
    const [farms, setFarms] = useState<any>();

    useEffect(() => {
        getFarmConfig(props.network).then((farmsToFetch) => {
            fetchFarms(farmsToFetch, props.network).then((farms) => {
                setFarms(farms);
            })
        })
    }, [props.network]);
    return (
        <Container>
            <FarmList farms={farms}/>
        </Container>

    )
}

export default Farms;