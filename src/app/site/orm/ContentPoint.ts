import { AuditParameters } from 'src/app/webapp/orm/AuditParameters';

export class ContentPoint extends AuditParameters {
  constructor(
    public no: number,
    public description: string,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(
      createdDate,
      modifiedDate,
      createdBy,
      modifiedBy
    );
  }
}
