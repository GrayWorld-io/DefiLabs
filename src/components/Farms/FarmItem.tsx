import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles, Typography, ButtonBase } from "@material-ui/core";
import * as COLORS from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    "&:hover, &$focusVisible": {
      backgroundColor: COLORS.grey[200],
    },
  },
  coinName: {
    opacity: 0.6,
  },
}));

FarmItem.propTypes = {
  lpSymbol: PropTypes.string.isRequired,
};

export default function FarmItem(props: any) {
  const { lpSymbol, ...other } = props;
  const classes = useStyles();

  return (
    <ButtonBase focusRipple className={classes.button} >
      <Grid container direction="row">
        <Typography variant="h6">{lpSymbol}</Typography>
        <Typography variant="body1" className={classes.coinName}>TVL</Typography>
      </Grid>
    </ButtonBase>
  );
}
