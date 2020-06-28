import { SEligibility } from "./SEligibility";
import { ServiceSite } from "./ServiceSite";
import { SsEligibilityKey } from "./SsEligibilityKey";
import { AuditParameters } from 'src/app/webapp/orm/AuditParameters';

export class SsEligibility extends AuditParameters {
  constructor(
    public ssEligibilityKey: SsEligibilityKey,
    public sEligibility: SEligibility,
    public serviceSite: ServiceSite,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
