import { AuditParameters } from "../../webapp/orm/AuditParameters";

export class STestimonial extends AuditParameters {
  constructor(
    public no: number,
    public givenBy: string,
    public designation: string,
    public description: string,
    public logo: string,
    public rating: number,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
