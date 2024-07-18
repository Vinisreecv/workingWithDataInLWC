import { LightningElement } from 'lwc';

//car_c schema
import NAME_FIELD from '@salesforce/schema/Car__c.Name';
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c';
import PICTURE_URL_FIELD from '@salesforce/schema/Car__c.Picture_URL__c';
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c';
import MSRP_FIELD from '@salesforce/schema/Car__c.MSRP__c';
import FUEL_TYPE_FIELD from '@salesforce/schema/Car__c.Fuel_Type__c';
import CONTROL_FIELD from '@salesforce/schema/Car__c.Control__c';
import SEAT_FIELD from '@salesforce/schema/Car__c.Number_of_Seats__c';

//this function is used to extract field value
import { getFieldValue } from 'lightning/uiRecordApi';

export default class CarCard extends LightningElement {
    //carName
  // carPictureUrl

    categoryField=CATEGORY_FIELD
    makeField=MAKE_FIELD
    msrpField=MSRP_FIELD
    controlField=CONTROL_FIELD
    fuelTypeField=FUEL_TYPE_FIELD
    seatField=SEAT_FIELD

    // id of car to display data

    //recordId='a0IIg000000lidFMAQ'
// car fields display with specific format

  //carName
  //carPictureUrl
`  
`
      handleRecordLoaded(event){
        const {records}= event.detail
        const recordData=records [this.recordId]
        this.carName = getFieldValue(recordData, NAME_FIELD)
        this.carPictureUrl = getFieldValue(recordData, PICTURE_URL_FIELD)

    }

} 