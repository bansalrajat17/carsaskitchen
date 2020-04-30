import { AuditParameters } from './AuditParameters';

export class UserMaster extends AuditParameters {
    constructor(public username: string, public password: string, public phone: string,
        public city: string,
        public address: string, public token: string, createdDate: Date,
        modifiedDate: Date,
        createdBy: string,
        modifiedBy: string) {
        super(createdDate,
            modifiedDate,
            createdBy,
            modifiedBy);
    }

}