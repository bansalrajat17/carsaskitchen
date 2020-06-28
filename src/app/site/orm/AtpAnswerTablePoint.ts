import { AuditParameters } from "../../webapp/orm/AuditParameters";

export class AtpAnswerTablePoint extends AuditParameters {
  constructor(
    public no: number,
    public description: string,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
