import { AuditParameters } from "../../webapp/orm/AuditParameters";
import { ServiceSite } from './ServiceSite';
import { Site } from "../../site/orm/Site";


export class SEligibility extends Site {
    constructor(public no: number,
        public name: string,
        public head: string,
        public description: string,public serviceSiteList: ServiceSite[],
        createdDate: Date,
        modifiedDate: Date,
        createdBy: string,
        modifiedBy: string) {
        super(no,name,head,description,createdDate,
            modifiedDate,
            createdBy,
            modifiedBy);
        }
}
