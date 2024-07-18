public with sharing class carController {
    //wrapper class
    public class Filters{
        @AuraEnabled
        public string searchKey {get;set;}
        @AuraEnabled
        public Decimal maxPrice {get;set;}
        @AuraEnabled
        public String[] categories {get;set;}
        @AuraEnabled
        public String[] maketype {get;set;}
        
           
    }

    @AuraEnabled(Cacheable=true)
    public static List<Car__c> getCars(Filters filters){
        String Key,whereClause ='';
        Decimal maxPrice;
        String[] categories,maketype, criteria = new List<String>{};
        if(filters !=null){

            maxPrice = filters.maxPrice;
            categories = filters.categories;
            maketype = filters.maketype;
            if(!String.isEmpty(filters.searchKey)){
                Key = '%'+filters.searchKey + '%';
                criteria.add('Name LIKE : Key');
            }
            if(filters.maxPrice >=0){
                

            }

        }
        return [SELECT Id, Name, Description__c, Category__c, MSRP__c, Picture_URL__c FROM Car__c];

    }
}