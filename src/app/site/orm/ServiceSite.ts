import { SsEligibility } from './SsEligibility';
import { SDocumentRequired } from './SDocumentRequired';
import { SBenefit } from './SBenefit';
import { Site } from './Site';

export class ServiceSite extends Site {
    constructor(no: number,
        name: string,
        head: string,
        description: string, public ssEligibilitySet: SsEligibility[], sDocumentRequiredList: SDocumentRequired[],public sBenefitList: SBenefit[], createdDate: Date,
        modifiedDate: Date,
        createdBy: string,
        modifiedBy: string) {
        super(no,name,head,description,createdDate,
            modifiedDate,
            createdBy,
            modifiedBy);
    }
}
