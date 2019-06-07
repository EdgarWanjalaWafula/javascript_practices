/**
 * @author Legibra
 *
 * 
 * Website integration scripts
 */

'use strict'; 

// Spending calc

const SPENDING_THRESHOLD = 2000;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
var bank_balance = 303.91;
var amount = 0;

    function calcTax(){
        return (amount * TAX_RATE).toFixed(2); 
    }
    calcTax(); 

    function formatAmount(){
        return "Ksh." + amount.toFixed(2); 
    }
    formatAmount(); 

    function checkBal(){
        if(amount > SPENDING_THRESHOLD){
            break; 
            return "Out of funds"; 
        } else{
            return "and you still have funds"; 
        }
    }
    checkBal(); 

    while (amount < SPENDING_THRESHOLD) {
        amount = amount + PHONE_PRICE; 
        console.log("Purchased for", formatAmount() + ",", "tax is", calcTax(), checkBal());
    }

jQuery(document).ready(function($){
	$(function () {
        $('[data-toggle="tooltip"]').tooltip()
    }); 
}); 