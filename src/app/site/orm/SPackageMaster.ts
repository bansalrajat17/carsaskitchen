import { AuditParameters } from "../../webapp/orm/AuditParameters";
import { PpHighlight } from "./PpHighlight";
import { PmpdPackage } from './PmpdPackage';

export class SPackageMaster extends AuditParameters {
  constructor(
    public no: number,
    public name: string,
    public pmpdPackageSet: PmpdPackage[],
    public ppHighlightList: PpHighlight[],
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
