import { ServiceSite } from "./ServiceSite";
import { AuditParameters } from "src/app/webapp/orm/AuditParameters";
import { SsStcKey } from "./SsStcKey";
import { STaxComputation } from "./STaxComputation";

export class SsStc extends AuditParameters {
  constructor(
    public ssStcKey: SsStcKey,
    public sTaxComputation: STaxComputation,
    public serviceSite: ServiceSite,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
