import { AuditParameters } from "../../webapp/orm/AuditParameters";

export class Site extends AuditParameters {
    constructor(public no: number,
        public name:string,
        public head: string,
        public description: string,
        createdDate: Date,
        modifiedDate: Date,
        createdBy: string,
        modifiedBy: string) {
        super(createdDate,
            modifiedDate,
            createdBy,
            modifiedBy);
    }
}
