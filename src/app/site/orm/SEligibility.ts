import { AuditParameters } from "../../webapp/orm/AuditParameters";
import { ServiceSite } from './ServiceSite';

export class SEligibility extends AuditParameters {
    constructor(public eligibilityId: number,
        public eligibilityDesc: string, public icon: string, public serviceSiteList: ServiceSite[],
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
