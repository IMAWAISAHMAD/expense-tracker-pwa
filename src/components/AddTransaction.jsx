/* eslint-disable react/jsx-no-duplicate-props */
import React,{useEffect} from 'react'
import {Grid} from '@material-ui/core'
import {useForm,Form} from './Form/useForm'
import Input from './controls/Input'
import Select from './controls/Select'
import Button from './controls/Button'


//Get Today Date//
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
const currentDate = yyyy + '-' +  mm + '-' + dd ;
//today = yyyy + '-' +  mm + '-' + dd ;
///////////////////////////////////////////////////////////

const selectOptions = [{id:1,name:'INCOME',value:'income'},{id:2,name:'EXPENSE',value:'expense'}]

const initialFieldValues = {
    id:0,
    date:currentDate,
    type:'',
    desc:'',
    amount:''
}



export default function AddTransaction({addOrUpdate,editRecord}) {
   
    const validate = (fieldValues=values) => {
        const temp={...errors};
        if('date' in fieldValues)
            temp.date = fieldValues.date ?'':'Date is required';
        if('type' in fieldValues)    
            temp.type = fieldValues.type.length !==0 ?'':'Transaction Type is required';
        if('desc' in fieldValues)    
           temp.desc = fieldValues.desc.length>=3 && fieldValues.desc.length<=15 ?'':'Description is required & must be between 3 to 15 cracters';
        if('amount' in fieldValues)     
            temp.amount = parseInt(fieldValues.amount,10)>0 ?'':'Amount is required & must be greater than zero';
        setErrors({
            ...temp
        })

        if(fieldValues===values)
        return Object.values(temp).every(x => x === "");
    }

    const{
        values,
        setValues,
        errors,
        setErrors,
        handleChange,
        handleReset
    } = useForm(initialFieldValues,true,validate)
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(validate()){
            addOrUpdate(values,handleReset) 
        }; 
    }
    

    useEffect(()=>{
        if(editRecord!=null){
            setValues({
                ...editRecord
            });
        }
    },[editRecord, setValues])

    return (
        <>
        <Form handleSubmit={handleSubmit}>   
            <Grid container>
                <Grid item xs={12}>
                <Select
                name='type'
                value={values.type}
                onChange={handleChange}
                label='Transaction Type'
                options={selectOptions}
                error={errors.type}
                />
                <Input
                name='date'
                type='date'
                value={values.date}
                label='Date'
                InputLabelProps={{ shrink: true, required: true }}
                variant='outlined'
                onChange={handleChange}
                error={errors.date}
                />
                <Input
                name='desc'
                type='text'
                value={values.desc}
                label='Description'
                onChange={handleChange}
                error={errors.desc}
                />
                <Input
                name='amount'
                type='number'
                value={values.amount}
                label='Amount'
                onChange={handleChange}
                error={errors.amount}
                />
                <div>
                    <Button
                    variant='contained'
                    size='large'
                    type='submit'
                    text='Submit'
                    onClick={handleSubmit}
                    />
                    <Button
                    color='default'
                    size='large'
                    text='Reset'
                    color='default'
                    onClick={handleReset}
                    />   
                </div>
                </Grid>
            </Grid> 
        </Form>  
    </> 
    )
}

