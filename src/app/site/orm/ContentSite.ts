import { AuditParameters } from "../../webapp/orm/AuditParameters";

export class ContentSite extends AuditParameters {
    constructor(public contentNo: string,
        public contentHead: string,
        public contentDesc: string,
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
