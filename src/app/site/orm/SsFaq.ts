import { SEligibility } from "./SEligibility";
import { ServiceSite } from "./ServiceSite";
import { SsFaqKey } from "./SsFaqKey";
import { SQuestion } from "./SQuestion";
import { SAnswer } from "./SAnswer";
import { AuditParameters } from 'src/app/webapp/orm/AuditParameters';

export class SsFaq extends AuditParameters{
  constructor(
    public ssFaqKey: SsFaqKey,
    public sQuestion: SQuestion,
    public sAnswer: SAnswer,
    public serviceSite: ServiceSite,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
