import { AuditParameters } from "../../webapp/orm/AuditParameters";
import { SsFaq } from "./SsFaq";
import { AnswerHeading } from "./AnswerHeading";

export class SAnswer extends AuditParameters {
  constructor(
    public no: number,
    public answer: string,
    public ssFaq: SsFaq,
    public answerHeadingList: AnswerHeading[],
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
