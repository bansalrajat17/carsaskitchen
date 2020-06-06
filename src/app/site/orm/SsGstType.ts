import { AuditParameters } from "../../webapp/orm/AuditParameters";

export class SsGstType extends AuditParameters {
  constructor(
    public returnType: string,
    public includes: string,
    public dueDate: string,
    public whenToFile: string,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
