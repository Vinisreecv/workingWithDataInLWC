import { LightningElement,wire } from 'lwc';
import getCars from '@salesforce/apex/carController.getCars'

export default class CarTileList extends LightningElement {

    cars
    error

    @wire(getCars)
    carsHandler({data,error}){
        if(data){

            console.log(data)
            this.cars = data

        }
        if(error){
            console.error(error)
            this.error = error

        }

    }
}