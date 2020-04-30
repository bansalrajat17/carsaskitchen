import { AuditParameters } from "../../webapp/orm/AuditParameters";

export class ServiceSite extends AuditParameters {
    constructor(public serviceId: string,
        public serviceName: string,
        public serviceHead: string,
        public serviceIntro: string, public eligibility: string, public turnoverLimit: string, public penalty: string, createdDate: Date,
        modifiedDate: Date,
        createdBy: string,
        modifiedBy: string) {
        super(createdDate,
            modifiedDate,
            createdBy,
            modifiedBy);
    }
}
