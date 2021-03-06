import { Site } from "./Site";
import { SsBenefit } from "./SsBenefit";
import { SsDocumentRequired } from "./SsDocumentRequired";
import { SsEligibility } from "./SsEligibility";
import { SsPackage } from "./SsPackage";
import { SsFaq } from './SsFaq';
import { SsStc } from './SsStc';

export class ServiceSite extends Site {
  constructor(
    no: number,
    name: string,
    head: string,
    description: string,
    public ssEligibilityList: SsEligibility[],
    public ssDocumentRequiredList: SsDocumentRequired[],
    public ssBenefitList: SsBenefit[],
    public ssPackageList: SsPackage[],
    public ssFaqList: SsFaq[],
    public ssStcList: SsStc[],
    createdDate: Date,
    modifiedDate: Date,
    createdBy: string,
    modifiedBy: string
  ) {
    super(
      no,
      name,
      head,
      description,
      createdDate,
      modifiedDate,
      createdBy,
      modifiedBy
    );
  }
}
