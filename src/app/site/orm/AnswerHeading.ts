import { SAnswer } from "./SAnswer";
import { AnswerTableHeading } from "./AnswerTableHeading";
import { AnswerHeadingKey } from "./AnswerHeadingKey";
import { AuditParameters } from "src/app/webapp/orm/AuditParameters";

export class AnswerHeading extends AuditParameters {
  constructor(
    public answerHeadingKey: AnswerHeadingKey,
    public answerTableHeading: AnswerTableHeading,
    public sAnswer: SAnswer,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
