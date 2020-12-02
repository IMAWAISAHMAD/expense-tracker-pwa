import React,{useContext,useState} from 'react'
import {Button,Grid,Typography} from '@material-ui/core'
import {AppContext} from '../context/AppContext'
import Balance from './Balance'
import Transaction from './Transaction'
import AddTransaction from './AddTransaction'
import Dialog from './controls/Dialog'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Notification from './controls/Notification'
import {TransactionType,Notify} from '../types'

export default function Transactions() {

    const {transactions,addTransaction,deleteTransaction,updateTransaction} = useContext(AppContext);
    const [editRecord,setEditRecord] = useState<null|TransactionType>(null);
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [notify,setNotify] = useState<Notify>({isOpen:false,type:'success',title:'',message:''});
    
    
    const addOrUpdate = (values:TransactionType,handleReset:Function) => {
        const {id,date,type,desc,amount} = values;
        if(id===0){
            const newTransaction = {
                id:transactions.length+1,
                date,
                type,
                desc,
                amount
            }
            
            addTransaction(newTransaction)
            setNotify({
                isOpen:true,
                type:'success',
                title:'Transaction',
                message:'Transaction added successfully'
            })
        }
        else
        {
            updateTransaction(values)
            setNotify({
                isOpen:true,
                type:'info',
                title:'Transaction',
                message:'Transaction updated successfully'
            })
        }  
        handleReset();
        setIsOpen(false);   
        setEditRecord(null)
    }
       
    
    const recordForEdit = (transaction:TransactionType) => {
      setEditRecord(transaction);
      setIsOpen(true);
    } 
    
    return (
        <div style={{textAlign:'center'}}>
            <Grid container>
                <Grid item  xs={12} sm={12} md={12}>
                    <Balance/>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <Button variant='outlined' color='primary' onClick={()=>setIsOpen(true)} startIcon={<AddCircleIcon/>}>
                    Add Transaction
                </Button>
                <Dialog
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title='Transaction Entry Form'
                contentText='Enter Transaction Details'
                setEditRecord={setEditRecord}
                >
                  <AddTransaction addOrUpdate={addOrUpdate} editRecord={editRecord}/>
                </Dialog>    
                </Grid>
                <Grid item  xs={12} sm={12} md={12}>
                    {transactions.length>0 ?
                        transactions.map(transaction=>(
                            <Transaction 
                            key={transaction.id} 
                            transaction={transaction} 
                            deleteTransaction={deleteTransaction} 
                            handleEdit={recordForEdit}
                            setNotify={setNotify}
                            />
                    )):
                    <div style={{marginTop:'24px'}}>
                        <Typography variant='h5' color='primary'>No Transactions Found</Typography>
                    </div>
                    }
                </Grid>
            </Grid>
            <Notification
            notify={notify}
            setNotify={setNotify}
            />
        </div>
    )
}
