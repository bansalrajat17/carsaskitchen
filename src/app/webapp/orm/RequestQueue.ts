import { AuditParameters } from "./AuditParameters";

export class RequestQueue extends AuditParameters {
    public requestId: number;
    constructor(
        public name: string,
        public email: string,
        public phone: string,
        public status: string, createdDate: Date,
        modifiedDate: Date,
        createdBy: string,
        modifiedBy: string) {
        super(createdDate,
            modifiedDate,
            createdBy,
            modifiedBy);
    }

}