import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getCity } from '../redux/city/cityOperation';
import { setInput } from '../redux/city/cityActions';
import { getInput } from '../selectors';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  margin: {
    margin: theme.spacing(1),
    width: '1000px',
  },
  button: {
    height: ' 55px',
    width: '150px',
    marginTop: '8px',
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const SearchCities = () => {
  const classes = useStyles();
  const input = useSelector(state => getInput(state));
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setInput(event.target.value));
  };

  const handleClick = () => {
    dispatch(getCity(input));
  };

  return (
    <form className={classes.root} noValidate>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="Search for Cities"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          value={input}
          onChange={handleChange}
        />
      </ThemeProvider>
      <Button
        variant="contained"
        className={classes.button}
        color="primary"
        onClick={handleClick}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchCities;
