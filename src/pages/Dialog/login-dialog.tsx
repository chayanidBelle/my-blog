import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainActionType } from "../../store/main-action";
import { IReducers } from "../../store/root.reducer";
import "./dialog.css";

interface ILogin {
  open: boolean;
  setOpen: Function;
}

const LoginDialog = (props: ILogin) => {
  const inStyle = useStyles();
  const dispatch = useDispatch();
  // const data = store.getState(); //getState for only one reducer
  const { username, password } = useSelector(
    (state: IReducers) => state.mainReducer
  );

  const onChangeValue = (e: any) => {
    dispatch({
      type: MainActionType.SIGN_UP_STORING,
      payload: { [e.target.name]: e.target.value },
    });
  };

  const onSubmit = () => {
    fetch("/api/get-message")
      .then((response: any) => {
        response.text();
        console.log("response :>> ", response);
      })
      .then((result: any) => {
        console.log("result :>> ", result);
      })
      .catch((error: any) => {
        console.log("error :>> ", error);
      });
  };

  return (
    <Dialog
      open={props.open}
      onClose={() => props.setOpen(false)}
      maxWidth="sm"
      scroll="paper"
      fullWidth
      className={inStyle.dialog}
    >
      <DialogContent className={inStyle.dialogContent}>
        <p className="engFont" style={{ textAlign: "center", fontWeight: 600 }}>
          Login
        </p>
        <Box margin="40px 0px">
          <TextField
            required
            name="username"
            label="Username"
            variant="outlined"
            autoComplete="false"
            defaultValue={username}
            onBlur={onChangeValue}
          />
        </Box>
        <Box>
          <TextField
            required
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            autoComplete="false"
            defaultValue={password}
            onBlur={onChangeValue}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Box
          padding="10px 20px 10px 20px"
          width="100%"
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
        >
          <Button
            onClick={onSubmit}
            sx={{
              width: "100px",
              height: "38px",
              backgroundColor: "#b5c9c8",
              borderRadius: "5px",
              color: "#FFF",
              "&:hover": {
                backgroundColor: "#57838c",
                color: "#FFF",
              },
            }}
          >
            Submit
          </Button>
          <Button
            onClick={() => props.setOpen(false)}
            sx={{
              width: "100px",
              height: "38px",
              backgroundColor: "#b5c9c8",
              borderRadius: "5px",
              color: "#FFF",
              "&:hover": {
                backgroundColor: "#57838c",
                color: "#FFF",
              },
            }}
          >
            Cancel
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;

const useStyles = makeStyles((theme: Theme) => ({
  dialog: {
    padding: theme.spacing(2),
  },
  dialogContent: {
    height: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typo: {
    fontFamily: "Space Grotesk, sans-serif",
  },
}));
