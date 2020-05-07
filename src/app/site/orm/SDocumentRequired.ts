import { AuditParameters } from "../../webapp/orm/AuditParameters";
import { ServiceSite } from './ServiceSite';

export class SDocumentRequired extends AuditParameters {
    constructor(public documentId: number,
        public documentName: string, public documentDesc: string, public serviceSiteList: ServiceSite[],
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
