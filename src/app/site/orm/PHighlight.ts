import { AuditParameters } from "src/app/webapp/orm/AuditParameters";
import { PpHighlight } from "./PpHighlight";

export class PHighlight extends AuditParameters {
  constructor(
    no: number,
    description: string,
    public ppHighlightSet: PpHighlight[],
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
