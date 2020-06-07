import { SsPackage } from "./SsPackage";
import { AuditParameters } from "../../webapp/orm/AuditParameters";
import { PpHighlight } from "./PpHighlight";

export class SPackageDetail extends AuditParameters {
  constructor(
    public no: number,
    public description: string,
    public amount: number,
    public ssPackageSet: SsPackage[],
    public ppHighlightList: PpHighlight[],
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
