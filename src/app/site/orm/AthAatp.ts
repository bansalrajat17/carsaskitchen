import { AthAatpKey } from "./AthAatpKey";
import { AnswerTableHeading } from "./AnswerTableHeading";
import { AtpAnswerTablePoint } from "./AtpAnswerTablePoint";
import { AuditParameters } from "src/app/webapp/orm/AuditParameters";

export class AthAatp extends AuditParameters {
  constructor(
    public athAatpKey: AthAatpKey,
    public answerTableHeading: AnswerTableHeading,
    public atpAnswerTablePoint: AtpAnswerTablePoint,
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(createdDate, modifiedDate, createdBy, modifiedBy);
  }
}
