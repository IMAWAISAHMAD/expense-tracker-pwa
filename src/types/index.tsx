export type initialStateType ={
    transactions:{
        id:number,
        date:string,
        desc:string,
        type:'income'|'expense',
        amount:string,
    }[];
    deleteTransaction: (id: number) => void;
    addTransaction: (transaction: TransactionType) => void;
    updateTransaction:(transaction:TransactionType) => void;
}

export type Actions =
  | { type: "ADD_TRANSACTION"; payload: TransactionType }
  | { type: "DELETE_TRANSACTION"; payload: number }
  | { type: "UPDATE_TRANSACTION"; payload: TransactionType };

export type TransactionType = {
  id:number,
  date:string,
  desc:string,
  type:'income'|'expense',
  amount:string,
  };

export type TransactionPropType = {
transaction: { id: number; date:string, title:string;  type:'income'|'expense'; amount: string };
}

export type Notify ={
  isOpen:boolean,
  type:"success" | "info" | "warning" | "error",
  title:string,
  message:string
}

export type NotificationProps={
  notify:Notify,
  setNotify:Function
}

export type DialogProps = {
  isOpen:boolean,
  title:string,
  subTitle:string,
  onConfirm?:Function
}

export type DeletConfirmationProps = {
  confirmDialog:DialogProps,
  setConfirmDialog:Function
}

export type TransactionComponentProps = {
  transaction:TransactionType,
  deleteTransaction:Function,
  handleEdit:Function,
  setNotify:Function
}

export type UseFormProps = {
  initialFieldValues:TransactionType,
  validateOnChange:boolean,
  validate:Function
}


export type InputProps = {
  name:string,
  label:string,
  value:string,
  onChange:any,
  type:string,
  color?:'primary'
  | 'secondary',
  variant?:'filled'
  | 'outlined'
  | 'standard',
  error?:null|Boolean,
  
}

export type SelectProps={
  name:string
  value:'income'|'expense',
  onChange:any,
  label:string,
  options:{
      id: number;
      name: string;
      value: string;
  }[],
  variant?:
  'filled'
  | 'outlined'
  | 'standard',
  error?:string
}

export type DialogFormProps = {
 isOpen:boolean,
 setIsOpen:Function,
 title:string,
 contentText:string,
 setEditRecord:Function,
 children:React.ReactNode
}

export type ButtonProps={
 color?:'primary'
 | 'inherit'
 | 'default'
 | 'secondary',
 size:'large'
 | 'medium'
 | 'small',
 variant?:'contained'
 | 'outlined'
 | 'text'
 onClick?:any,
 classes?:{},
 text:string,
 type?:string,
}

