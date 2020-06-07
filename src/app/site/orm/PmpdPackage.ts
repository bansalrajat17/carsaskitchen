import { AuditParameters } from "../../webapp/orm/AuditParameters";
import { SPackageMaster } from "./SPackageMaster";
import { SPackageDetail } from "./SPackageDetail";
import { PmpdPackageKey } from './PmpdPackageKey';

export class PmpdPackage extends AuditParameters {
  constructor(
    public pmpdPackageKey: PmpdPackageKey,
    public sPackageMaster: SPackageMaster,
    public sPackageDetail: SPackageDetail,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
