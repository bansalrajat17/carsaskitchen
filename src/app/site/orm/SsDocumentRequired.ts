import { ServiceSite } from "./ServiceSite";
import { SsDocumentRequiredKey } from "./SsDocumentRequiredKey";
import { SDocumentRequired } from "./SDocumentRequired";
import { AuditParameters } from "src/app/webapp/orm/AuditParameters";

export class SsDocumentRequired extends AuditParameters {
  constructor(
    public ssDocumentRequiredKey: SsDocumentRequiredKey,
    public sDocumentRequired: SDocumentRequired,
    public serviceSite: ServiceSite,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
