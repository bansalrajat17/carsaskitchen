import { SEligibility } from './SEligibility';
import { ServiceSite } from './ServiceSite';
import { SsEligibilityKey } from './SsEligibilityKey';
import { SBenefit } from './SBenefit';
import { SsBenefitKey } from './SsBenefitKey';


export class SsBenefit {

    constructor(public ssBenefitKey: SsBenefitKey, public sBenefit: SBenefit, public serviceSite: ServiceSite) {
    }
}