import React from "react";
import { Button, CircularProgress, makeStyles, Grid } from "@material-ui/core";
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import FarmItem from "./FarmItem";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: 0,
    position: "relative",
  },
  coinList: {
    height: "300px",
    overflowY: "scroll",
  },
}));

const columns: GridColDef[] = [
  { field: "pid", headerName: "PID", width: 70, headerAlign: 'center', align: 'center' },
  { field: "lpSymbol", headerName: "Pool", width: 200, headerAlign: 'center', align: 'center'  },
  { field: "tvl", headerName: "TVL", width: 150, headerAlign: 'center', align: 'center'  },
  { field: "apr", headerName: "APR", width: 150, headerAlign: 'center', align: 'center'  },
  { field: "deposited", headerName: "My Staking", width: 150, headerAlign: 'center', align: 'center'  },
  { field: "claimable", headerName: "My Claimable", width: 170, headerAlign: 'center', align: 'center'  },
  {
    field: 'Staking',
    headerName: 'Action',
    width: 200,
    headerAlign: 'center', align: 'center',
    sortable: false,
    renderCell: (params: any) => (
      <div>
        <Button>
          Stake
        </Button>
        <Button>
          UnStake
        </Button>
      </div>

    )
  }
]
export default function FarmList(props: any) {
  const classes = useStyles();
  const { farms } = props;
  console.log(farms)
  return (
    <div className={classes.wrapper}>

      {farms && farms.length && (
        <div style={{ height: 300, width: '100%' }} >
          <DataGrid rows={farms} columns={columns} getRowId={(row: any) => row.pid} />
        </div>
      )}



    </div>
  );
}
