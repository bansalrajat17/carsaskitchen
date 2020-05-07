import { AuditParameters } from "../../webapp/orm/AuditParameters";
import { SEligibility } from './SEligibility';
import { SDocumentRequired } from './SDocumentRequired';

export class ServiceSite extends AuditParameters {
    constructor(public serviceId: string,
        public serviceName: string,
        public serviceHead: string,
        public serviceIntro: string, public sEligibilityList: SEligibility[], sDocumentRequiredList: SDocumentRequired[], createdDate: Date,
        modifiedDate: Date,
        createdBy: string,
        modifiedBy: string) {
        super(createdDate,
            modifiedDate,
            createdBy,
            modifiedBy);
    }
}
