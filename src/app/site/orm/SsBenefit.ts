import { ServiceSite } from "./ServiceSite";
import { SBenefit } from "./SBenefit";
import { SsBenefitKey } from "./SsBenefitKey";
import { AuditParameters } from "src/app/webapp/orm/AuditParameters";

export class SsBenefit extends AuditParameters {
  constructor(
    public ssBenefitKey: SsBenefitKey,
    public sBenefit: SBenefit,
    public serviceSite: ServiceSite,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
