import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    
    numberButton: {
        textAlign: 'center',
        width: '190px',
        fontSize: '30px'
    }
});

interface keypadProps {
    number: string;
    bool: boolean;
    buttonClick: any;
}

function JapeneseBtn({bool, buttonClick, number}: keypadProps){
    const classes = useStyles();
    return(
        <div>
            <Button  
                className= {classes.numberButton}
                variant="outlined"
                onClick={buttonClick(number ,bool)}>
                    {number}
            </Button>
        </div>  
    );
}

export default JapeneseBtn;