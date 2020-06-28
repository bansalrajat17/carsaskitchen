import { ContentSite } from './ContentSite';
import { ContentPoint } from './ContentPoint';
import { CsCpKey } from './CsCpKey';
import { AuditParameters } from 'src/app/webapp/orm/AuditParameters';


export class CsCp extends AuditParameters {
    constructor(
      public csCpKey: CsCpKey,
      public contentSite: ContentSite,
      public contentPoint: ContentPoint,
      createdDate: Date,
      modifiedDate: Date,
      createdBy: string,
      modifiedBy: string
    ) {
      super(createdDate, modifiedDate, createdBy, modifiedBy);
    }
  }