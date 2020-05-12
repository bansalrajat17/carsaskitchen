import { AuditParameters } from "../../webapp/orm/AuditParameters";

export class TestimonialSite extends AuditParameters {
    constructor(public no: number,
        public givenBy: string,
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
