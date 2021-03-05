import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts';
import {
  getData,
  getIsLoadingCity,
  getShowChart,
  getError,
} from '../selectors';
import Loader from './Loader';
import NotFound from './NotFound';

const useStyles = makeStyles({
  div: {
    display: 'flex',
    marginTop: '10px',
    flexWrap: 'wrap',
    maxWidth: '1100px',
    margin: '0 auto',
  },
});

const CityWeather = () => {
  const classes = useStyles();
  const data = useSelector(state => getData(state));
  const isLoadingCity = useSelector(state => getIsLoadingCity(state));
  const showChart = useSelector(state => getShowChart(state));
  const error = useSelector(state => getError(state));

  if (isLoadingCity) {
    return <Loader />;
  }

  return (
    <div className={classes.div}>
      {showChart && (
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
      )}
      {error && <NotFound />}
    </div>
  );
};

export default CityWeather;
