import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => (
  createStyles({
    "button":{
      borderColor: "#FF8549",
      color: "#FF8549",
      fontWeight: 600,
      marginBottom: "8px",
      "&:hover":{
        backgroundColor:"#FF8549",
        color: "#FFFFFF"
      }
    }
  })
))


const Answer = (props) => {
  const classes = useStyles();
  return(
    <Button 
      className={classes.button}
      variant="outlined" onClick={() => props.select(props.content, props.nextId)}>
      
      {props.content}
    </Button>
  )
}

export default Answer