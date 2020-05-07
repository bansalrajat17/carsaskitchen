import { AuditParameters } from "../../webapp/orm/AuditParameters";
import { ServiceSite } from './ServiceSite';

export class SBenefit extends AuditParameters {
    constructor(public benefitId: number,
        public benefitName: string, public serviceSiteList: ServiceSite[],
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
