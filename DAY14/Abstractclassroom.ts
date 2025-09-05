//interface
export interface payout {
    //method signature
    deliv (name : string): void
}

export interface cashOn{
    cashOnDelivery(): void

}

export interface UPI{
     upiPayments() : void
}

export interface cardPay{
  cardPayments() 
}

export interface internetBank extends cardPay{
    internetBanking() : void 
}

export class payments implements payout{
    deliv(name: string): void {
        console.log("hello akaran")
    }
    cashOnDelivery() : void{
        console.log("pay during delivery ")
    }
     upiPayments() : void {
        console.log("during order payment using upi")
     }
     internetBanking() : void{
        console.log("during order pay using card")
     }
}

//Abstract

import { payout } from "./Demonstratinginterface";
abstract class  CanaraBank {

    abstract delivery() : void //abstract method

    nod(){ //normal method
        console.log("payment error ")
    }

}

class Amazon extends CanaraBank implements payout{
    delivery(): void {
        console.log("order should be delivery paroperly")
    }
    deliv(name: string): void {
        console.log(`hello ${name}`)
    }
    cashOnDelivery() : void{
        console.log("pay during delivery ")
    }
     upiPayments(): void {
        console.log("during order payment using upi")
     }
     internetBanking() : void{
        console.log("during order pay using card")
     }
     cardPayments(): void{
        console.log("during order pay using card")
     }

}

const pay = new Amazon()
pay.cashOnDelivery()
pay.upiPayments()
pay.internetBanking()
pay.deliv("karan")
pay.delivery()
pay.cardPayments()
