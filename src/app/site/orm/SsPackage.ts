import { ServiceSite } from "./ServiceSite";
import { SPackageDetail } from "./SPackageDetail";
import { SsPackageKey } from "./SsPackageKey";
import { AuditParameters } from 'src/app/webapp/orm/AuditParameters';

export class SsPackage extends AuditParameters {
  constructor(
    public ssPackageKey: SsPackageKey,
    public sPackageDetail: SPackageDetail,
    public serviceSite: ServiceSite,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
