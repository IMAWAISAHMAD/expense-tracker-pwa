import React,{useState} from 'react'
import {makeStyles,List,ListItem,ListItemAvatar,Avatar,ListItemSecondaryAction,ListItemText,IconButton,Typography} from '@material-ui/core'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import EditIcon from '@material-ui/icons/Edit';
import DeleteCofirmation from './controls/DeleteConfirmation';
import DeleteIcon from '@material-ui/icons/Delete';
import {DialogProps,TransactionComponentProps} from '../types'


const useStyles = makeStyles(theme=>({
    root: {
        flexGrow: 1,
        maxWidth: 500,
        margin:'auto'
      },
      demo: {
        backgroundColor: theme.palette.background.paper,
      }
}))


export default function Transaction({transaction,deleteTransaction,handleEdit,setNotify}:TransactionComponentProps) {
    const {id,type,desc,date,amount} = transaction;
    const classes = useStyles();
    const [confirmDialog,setConfirmDialog] = useState<DialogProps>({isOpen:false,title:'',subTitle:''})

    const handleDelete = (id:number) => {
        setConfirmDialog({
            isOpen:true,
            title:'Are you sure you want to delete this transaction',
            subTitle:'This can not be Undo',
            onConfirm:()=>{
                deleteTransaction(id)
                setNotify({
                    isOpen:true,
                    type:'error',
                    title:'Transaction',
                    message:'Transaction Deleted Successfully' 
                 })
            }
        })
       
    }
    return (
        <div className={classes.root}>
            <div className={classes.demo}>
                <List dense>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AccountBalanceWalletIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={desc} secondary={date}/>
                        {type==='income'?
                        (
                            <ListItemText disableTypography primary={<Typography variant='subtitle1' color='primary'>{(amount).toLocaleString()}</Typography>}/>
                        ):
                        (
                            <ListItemText disableTypography primary={<Typography variant='subtitle1' color='secondary'>{(amount).toLocaleString()}</Typography>}/>
                        )   
                        }
                        <ListItemSecondaryAction>
                            <IconButton 
                            edge="end" 
                            aria-label="delete"
                            onClick={()=>handleEdit(transaction)}
                            >
                                <EditIcon />
                            </IconButton>
                            <IconButton
                            edge="end" 
                            aria-label="delete"
                            onClick={()=>handleDelete(id)}
                            >
                                <DeleteIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
             </div>
        <DeleteCofirmation
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
        />
        </div>
    )
}

