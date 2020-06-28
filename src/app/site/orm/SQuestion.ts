import { AuditParameters } from "../../webapp/orm/AuditParameters";
import { SsFaq } from './SsFaq';

export class SQuestion extends AuditParameters {
  constructor(
    public no: number,
    public question: string,
    public ssFaq: SsFaq,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
