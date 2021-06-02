import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import MUIRichTextEditor from 'mui-rte';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Write() {
  const classes = useStyles();
  const defaultTheme = createMuiTheme();

  Object.assign(defaultTheme, {
    overrides: {
      MUIRichTextEditor: {
        root: {
          marginTop: 20,
          width: '100%',
          height: '640px',
          border: '1px solid gray',
        },
        editor: {
          borderBottom: '1px solid gray',
        },
      },
    },
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MuiThemeProvider theme={defaultTheme}>
            <MUIRichTextEditor label="입력하세요" />
          </MuiThemeProvider>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" fullWidth={true}>
            등록
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth={true}>
            뒤로가기
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
