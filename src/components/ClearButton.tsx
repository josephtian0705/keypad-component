import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    numberButton: {
        textAlign: 'center',
        width: '383px',
        fontSize: '30px'
    }
});

interface keypadProps {
    number: string;
    buttonClick: any;
}

function ClearButton({number, buttonClick}: keypadProps){
    const classes = useStyles();
    return(
        <div>
            <Button  
                className= {classes.numberButton}
                variant="outlined"
                onClick={buttonClick(number)}>
                    {number}
            </Button>
        </div>  
    );
}

export default ClearButton;