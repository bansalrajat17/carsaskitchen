export class AuditParameters {
    constructor(protected createdDate: Date,
        protected modifiedDate: Date,
        protected createdBy: string,
        protected modifiedBy: string){
    }  
}