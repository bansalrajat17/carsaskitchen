import { SEligibility } from "./SEligibility";
import { ServiceSite } from "./ServiceSite";
import { SsFaqKey } from "./SsFaqKey";
import { SQuestion } from "./SQuestion";
import { SAnswer } from "./SAnswer";
import { AuditParameters } from 'src/app/webapp/orm/AuditParameters';
import { StcHeadingKey } from './StcHeadingKey';
import { AnswerTableHeading } from './AnswerTableHeading';
import { STaxComputation } from './STaxComputation';

export class StcHeading extends AuditParameters{
  constructor(
    public stcHeadingKey: StcHeadingKey,
    public sTaxComputation: STaxComputation,
    public answerTableHeading: AnswerTableHeading,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
