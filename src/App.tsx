import React, { useState } from 'react';
import { Box, Card, Grid } from '@material-ui/core';
import ButtonK from './components/ButtonK';
import ClearButton from './components/ClearButton';
import JapaneseBtn from './components/JapaneseBtn';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  keypadCol: {
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
  },
  keypadCol2: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
  },
  keypadCol3: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridAutoRows: 'minmax(60px, auto)',
  },
  keypad: {
      height: '100%',
      width: '500px',
      margin: 'auto',
      borderRadius: '15px',
      maxWidth: '100%',
  },
  keypadScreen: {
      fontSize: '35px',
      padding: '5px',
      marginBottom: '5px',
      textAlign: 'right',
      height: '60px',
    },
  boolStyle: {
    marginTop: '10px',
    marginRight: '10px',

  }
});

function App() {
  let [result, setResult] = useState<string>('0');
  const [theBool1, setTheBool1] = useState<boolean>(true);
  const [theBool2, setTheBool2] = useState<boolean>(true);

  const classes = useStyles();

    let numberWithCommas = (x: string) => {
      var parts = parseFloat(x).toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }

    let handleButtonClick = (num: string) => () => {
      let NUM = result;

      if(NUM.length < 11){
        //0 unable to insert when do not have any input
      if(NUM.length <= 1){
        if(num === '0' || num === '00' || num === '000'){
          // console.log('inside');
          setResult('0');
          return;
        }
      }
        //To control 0 input when comes to the length limit
        if(NUM.length === 9){
          if(num === '000'){
            num = '00';
            setResult(NUM + num);
            // console.log(NUM + num);
            return;
          }
        } 
        
        if(NUM.length === 10){
          if(num === '00'){
            num = '0';
            setResult(NUM + num);
            // console.log(NUM + num);
            return;
          }

          if(num === '000'){
            num = '0';
            setResult(NUM + num);
            // console.log(NUM + num);
            return;
          }
        }
        
        //to clear the input
        if(num === 'C'){
          setResult('0');
          return;
        }

        if(num === '決定' || num === 'キャンセル'){
          setResult(NUM);
          return;
        }

        setResult(NUM + num);
        // console.log(NUM + num);

      }else if(NUM.length >= 10){
        //to clear the input
        if(num === 'C'){
          setResult('0');
          return;
        }

        if(num === '決定' || num === 'キャンセル'){
          setResult(NUM);
          return;
        }

        setResult(NUM);
        
      }
    }


    let handleBoolean = (num: string, bool: Boolean) => () =>{

      let bool1 = theBool1;
      let bool2 = theBool2;

      if(num === '込'){
        if(bool1 === true){
          bool1 = false;
          setTheBool1(bool1);
        } else if(bool1 === false){
          bool1 = true;
          setTheBool1(bool1);
        }
      }

      if(num === 'サ'){
        if(bool2 === true){
          bool2 = false;
          setTheBool2(bool2);
        } else if(bool2 === false){
          bool2 = true;
          setTheBool2(bool2);
        }
      }
    }

    return(
          <Card className={classes.keypad}>
            <Grid container direction="row" justify='flex-end'>
              <Box className={classes.boolStyle}>
                <p>込 = {theBool1.toString()}</p>
                <p>サ = {theBool2.toString()}</p>
              </Box>
            </Grid>
            <Box p={2}>
                <Box className={classes.keypadScreen}>{numberWithCommas(result)}</Box>
                  <Grid container justify="center">
                    <Box>
                      <ButtonK number={'1'} buttonClick={handleButtonClick}/>
                      <ButtonK number={'4'} buttonClick={handleButtonClick}/>
                      <ButtonK number={'7'} buttonClick={handleButtonClick}/>
                      <ButtonK number={'0'} buttonClick={handleButtonClick}/>
                    </Box>
                    <Box>
                      <ButtonK number={'2'} buttonClick={handleButtonClick}/>
                      <ButtonK number={'5'} buttonClick={handleButtonClick}/>
                      <ButtonK number={'8'} buttonClick={handleButtonClick}/>
                      <ButtonK number={'00'} buttonClick={handleButtonClick}/>
                      
                    </Box>
                    <Box>
                      <ButtonK number={'3'} buttonClick={handleButtonClick}/>
                      <ButtonK number={'6'} buttonClick={handleButtonClick}/>
                      <ButtonK number={'9'} buttonClick={handleButtonClick}/>
                      <ButtonK number={'000'} buttonClick={handleButtonClick}/>
                    </Box>
                  </Grid>
                  <Grid container justify='center'>
                    <ClearButton number={'C'} buttonClick={handleButtonClick}/>
                  </Grid>
                  <Grid container justify='center'>
                    <JapaneseBtn bool={true} number={'込'} buttonClick={handleBoolean} />
                    <JapaneseBtn bool={true} number={'サ'} buttonClick={handleBoolean} />
                  </Grid>
                  <Grid container justify='center'>
                    <JapaneseBtn bool={true} number={'決定'} buttonClick={handleButtonClick} />
                    <JapaneseBtn bool={true} number={'キャンセル'} buttonClick={handleButtonClick} />
                  </Grid>
                </Box>
            </Card>
    );
  }


export default App;
