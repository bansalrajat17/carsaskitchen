import { AuditParameters } from "../../webapp/orm/AuditParameters";
import { StcHeading } from './StcHeading';

export class STaxComputation extends AuditParameters {
  constructor(
    public no: number,
    public description: string,
    public stcHeadingList:StcHeading[],
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
