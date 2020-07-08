import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import "w3-css/w3.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "gray",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          //label={auth ? "red" : "green"}
        />
      </FormGroup>

      {auth ? (
        <div
          className="container-fluid Height
        
        "
          style={{ background: "#eaf2ef" }}
        >
          <div className="row">
            <div className="col text-center">
              <p>Hello Mr Gomez</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="container-fluid Height text-white"
          style={{ background: "#302f2b" }}
        >
          <div className="row">
            <div className="col text-center">
              <p>Hello Mr. Dia</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
