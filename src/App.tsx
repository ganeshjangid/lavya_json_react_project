import React, { useState } from 'react';
import './App.css';
import {
  makeStyles,
  Paper,
  Grid,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingTop: '2px',
    textAlign: 'left',
    color: theme.palette.text.secondary,
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
  },
  heading: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor: '#4398ec',
    paddingLeft: '10px !important',
    padding: '5px',
  },
  tablestyle: {
    '&th, td': {
      padding: '7px',
      fontSize: '12px',
    },
  },
}));
function App() {
  const classes = useStyles();
  const [readiness, setReadiness] = useState({
    deployment: {
      minNoOfPodsReplicas: '',
      livnessProbe: false,
      readinessProbe: false,
    },
    deploymentconfig: {
      minNoOfPodsReplicas: '',
      livnessProbe: false,
      readinessProbe: false,
    },
    replicaset: {
      minNoOfPodsReplicas: '',
      livnessProbe: false,
      readinessProbe: false,
    },
    pod: {
      minNoOfPodsReplicas: '',
      livnessProbe: false,
      readinessProbe: false,
    },
    masterMultiNodeCheck: false,
  });

  console.log(readiness);
  const setInput = (i: any, v: any) => {
    switch (i) {
      case 'deployment':
        setReadiness({
          ...readiness,
          [i]: {
            ...readiness['deployment'],
            minNoOfPodsReplicas: v,
          },
        });
        break;
      case 'deploymentconfig':
        setReadiness({
          ...readiness,
          [i]: {
            ...readiness['deploymentconfig'],
            minNoOfPodsReplicas: v,
          },
        });
        break;
      case 'replicaset':
        setReadiness({
          ...readiness,
          [i]: {
            ...readiness['replicaset'],
            minNoOfPodsReplicas: v,
          },
        });
        break;
      case 'pod':
        setReadiness({
          ...readiness,
          [i]: {
            ...readiness['pod'],
            minNoOfPodsReplicas: v,
          },
        });
        break;
    }
  };

  const setReadiNess = (i: any, v: any) => {
    switch (i) {
      case 'deployment':
        setReadiness({
          ...readiness,
          [i]: {
            ...readiness['deployment'],
            readinessProbe: v,
          },
        });
        break;
      case 'deploymentconfig':
        setReadiness({
          ...readiness,
          [i]: {
            ...readiness['deploymentconfig'],
            readinessProbe: v,
          },
        });
        break;
      case 'replicaset':
        setReadiness({
          ...readiness,
          [i]: {
            ...readiness['replicaset'],
            readinessProbe: v,
          },
        });
        break;
      case 'pod':
        setReadiness({
          ...readiness,
          [i]: {
            ...readiness['pod'],
            readinessProbe: v,
          },
        });
        break;
    }
  };

  const setLiveNess = (i: any, v: any) => {
    switch (i) {
      case 'deployment':
        setReadiness({
          ...readiness,
          [i]: {
            ...readiness['deployment'],
            livnessProbe: v,
          },
        });
        break;
      case 'deploymentconfig':
        setReadiness({
          ...readiness,
          [i]: {
            ...readiness['deploymentconfig'],
            livnessProbe: v,
          },
        });
        break;
      case 'replicaset':
        setReadiness({
          ...readiness,
          [i]: {
            ...readiness['replicaset'],
            livnessProbe: v,
          },
        });
        break;
      case 'pod':
        setReadiness({
          ...readiness,
          [i]: {
            ...readiness['pod'],
            livnessProbe: v,
          },
        });
        break;
    }
  };

  const setMultiNode = (val: boolean) => {
    setReadiness({
      ...readiness,
      masterMultiNodeCheck: val,
    });
  };
  const formData = [
    {
      title: 'Development',
      inputVal: readiness.deployment.minNoOfPodsReplicas,
      inputHandle: 'deployment',
      radioReadness: 'deployment1',
    },
    {
      title: 'Development Config',
      inputVal: readiness.deploymentconfig.minNoOfPodsReplicas,
      inputHandle: 'deploymentconfig',
      radioReadness: 'deploymentconfig1',
    },
    {
      title: 'Replica Set',
      inputVal: readiness.replicaset.minNoOfPodsReplicas,
      inputHandle: 'replicaset',
      radioReadness: 'replicaset1',
    },
    {
      title: 'Pod',
      inputVal: readiness.pod.minNoOfPodsReplicas,
      inputHandle: 'pod',
      radioReadness: 'pod1',
    },
  ];

  const handleJSON = (event: any) => {
    if (event) {
      event.preventDefault();
      //console.log(readiness);
      const filename = 'rules';
      const fileData = JSON.stringify(readiness);
      const blob = new Blob([fileData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `${filename}.json`;
      link.href = url;
      link.click();
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}></Grid>

        <Grid item xs={6}>
          <form onSubmit={handleJSON}>
            {formData.map((result) => {
              return (
                <Paper className={classes.paper} key={result.title}>
                  <Grid className={classes.heading}>
                    <Typography
                      style={{
                        fontSize: '13px',
                        fontFamily: 'arial',
                        fontWeight: 600,
                      }}
                    >
                      {result.title}
                    </Typography>
                  </Grid>
                  <Table
                    aria-label="simple table"
                    className={classes.tablestyle}
                  >
                    <TableBody>
                      <TableRow>
                        <TableCell align="left" style={{ width: '30%' }}>
                          Min no. of Pod Replicas
                        </TableCell>
                        <TableCell align="left">
                          <input
                            type="number"
                            value={result.inputVal}
                            onChange={(e) =>
                              setInput(result.inputHandle, e.target.value)
                            }
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left" style={{ width: '30%' }}>
                          Check Liveness Probe
                        </TableCell>
                        <TableCell align="left">
                          <input
                            type="radio"
                            value="true"
                            name={result.inputHandle}
                            onClick={(e) =>
                              setLiveNess(result.inputHandle, true)
                            }
                          />
                          Yes
                          <input
                            type="radio"
                            value="false"
                            name={result.inputHandle}
                            defaultChecked
                            onClick={(e) =>
                              setLiveNess(result.inputHandle, false)
                            }
                          />
                          No
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left" style={{ width: '40%' }}>
                          Check Readiness Probe
                        </TableCell>
                        <TableCell align="left">
                          <input
                            type="radio"
                            value="true"
                            name={result.radioReadness}
                            onClick={(e) =>
                              setReadiNess(result.inputHandle, true)
                            }
                          />
                          Yes
                          <input
                            type="radio"
                            value="false"
                            defaultChecked
                            name={result.radioReadness}
                            onClick={(e) =>
                              setReadiNess(result.inputHandle, false)
                            }
                          />
                          No
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Paper>
              );
            })}
            <Paper className={classes.paper}>
              <Grid className={classes.heading}>
                <Typography
                  style={{
                    fontSize: '13px',
                    fontFamily: 'arial',
                    fontWeight: 600,
                  }}
                >
                  Master Node
                </Typography>
              </Grid>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell align="left" style={{ width: '40%' }}>
                      Master Multi Node Check
                    </TableCell>
                    <TableCell align="left">
                      <input
                        type="radio"
                        value="true"
                        name="multiNode"
                        onClick={(e) => setMultiNode(true)}
                      />
                      Yes
                      <input
                        type="radio"
                        value="false"
                        defaultChecked
                        name="multiNode"
                        onClick={(e) => setMultiNode(false)}
                      />
                      No
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
            <Typography align="center">
              <button type="submit">Go</button>
            </Typography>
          </form>
        </Grid>

        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}

export default App;
