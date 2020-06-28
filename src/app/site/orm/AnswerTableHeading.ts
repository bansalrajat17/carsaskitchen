import { AuditParameters } from "../../webapp/orm/AuditParameters";
import { AthAatp } from "./AthAatp";

export class AnswerTableHeading extends AuditParameters {
  constructor(
    public no: number,
    public heading: string,
    public athAatpList: AthAatp[],
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
