import React from 'react'
import {makeStyles,Button as MuiButton} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    root:{        
            margin:theme.spacing(0.5)
        },
    label:{
            textTransform:'none'
    }   
}))



export default function Button({color,size,text,onClick,variant,...other}) {
    const classes = useStyles();
    return (
        <MuiButton
        color={color || 'primary'}
        size={size}
        classes={{root:classes.root, label:classes.label}}
        onClick={onClick}  
        variant={variant||'contained'}
        {...other}
        >
        {text}
        </MuiButton>
    )
}
