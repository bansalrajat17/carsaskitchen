import { SPackageDetail } from "./SPackageDetail";
import { PpHighlightKey } from "./PpHighlightKey";
import { PHighlight } from "./PHighlight";
import { AuditParameters } from "src/app/webapp/orm/AuditParameters";

export class PpHighlight extends AuditParameters {
  constructor(
    public ppHighlightKey: PpHighlightKey,
    public pHighlight: PHighlight,
    public sPackage: SPackageDetail,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
