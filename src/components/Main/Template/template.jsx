import React, {useContext, useState} from "react";
import TransactionContext from "../../Context/TransactionContext";
import { Card } from '../../Card/card';


function Template({
    title,
    bgcolor,
    txtcolor,
    header,
    showImage,
    showBalance,
    showDeposit,
    showWithdraw
}) {

    const { data } = useContext(TransactionContext);
    const [deposit, setDeposit] = useState(0);
    const [withdraw, setWithdraw] = useState(0);
    const [totalState, setTotalState] = useState(Number([data[0].balance]));
    const [validTransaction, setValidTransaction] = useState(true);


    const handleDepositChange = (event) => {

        if(Number(event.target.value) < 0){
            window.alert(`Amount negative not permited`);
            setDeposit(0);
            setValidTransaction(true);
        }
        

        if(deposit < 0) {    
            setDeposit(0);
            setValidTransaction(true);

        } else {
            setDeposit(Number(event.target.value));
        }
       
        if(event.target.value <= 0) return;

        setValidTransaction(false);
    };

    const handleWithdrawChange = (event) => {

        if(Number(event.target.value) < 0){
            window.alert(`Negative Amount not permited`);
            setWithdraw(0);
            setValidTransaction(true);
        }
        if(withdraw < 0) {
            setWithdraw(0);
            setValidTransaction(true);
        } else {
            setWithdraw(Number(event.target.value));
        }
        if(event.target.value <= 0 ) return;
        setValidTransaction(true);

        if(event.target.value > totalState) {
            alert(`Your balance $ ${totalState} is insufficient to make this widthdraw`);
            setValidTransaction(true);
        } else {
            setValidTransaction(false)
        }
    };

    const handleWithdrawSubmit = (event) =>{
        let newTotal = totalState - withdraw;
        setTotalState(newTotal);
        console.log(totalState);
        setValidTransaction(true);
        event.preventDefault();
    }

    const handleDepositSubmit = (event) => {
        let newDepositTotal = totalState + deposit;
        setTotalState(newDepositTotal);
        console.log(totalState);
        
        setValidTransaction(true);
        event.preventDefault();
    }

    return(
        <Card
            title={title}
            bgcolor={bgcolor}
            txtcolor={txtcolor}
            header={header}
            body={
                <div>
                    {
                        showImage ? (
                        <>
                        <img src="badbank.png" className="img-fluid" alt="badbank"/>
                        </>):(
                        <>
                        </>)
                    }
                    {
                        showBalance ? (
                        <>
                            <div className="row mb-3">
                                <div className="col-auto">
                                    <label id="total" className="form-label">BALANCE</label>
                                </div>
                                <div className="col-auto">
                                    <label id="total">{totalState}</label>
                                </div>
                            </div>

                        </>

                        ):(
                        <>
                        </>)
                    }
                    {
                        showWithdraw ? (
                        <>
                            <form onSubmit={handleWithdrawSubmit}>
                                <div className="row mb-3">
                                    <label id="total" className="form-label">WITHDRAW AMOUNT</label>
                                </div>
                                <div className="row mb-3">
                                    <input id="number-input" type="input" width="200" onChange={handleWithdrawChange}/>
                                </div>
                                <div className="row mb-3">
                                    <button  className="btn btn-secondary" type="submit" width="200" value="Submit" id="submit-input" disabled={validTransaction}>WITHDRAW</button>
                                </div>
                            </form>
                        </>
                        ):(
                        <>
                        </>)
                    }
                    {
                        showDeposit ? (
                        <>
                            <form onSubmit={handleDepositSubmit}>
                                <div className="row mb-3">
                                    <label id="total" className="form-label">DEPOSIT AMOUNT</label>
                                </div>
                                <div className="row mb-3">
                                    <input id="number-input" type="input" width="200" onChange={handleDepositChange}/>
                                </div>
                                <div className="row mb-3">
                                    <button  className="btn btn-secondary" type="submit" width="200" value="Submit" id="submit-input" disabled={validTransaction}>DEPOSIT</button>
                                </div>
                            </form>
                        </>
                        ):(
                        <>
                        </>)
                    }
                </div>
                
            }
            
        
        />
      
    )

}

export { Template };