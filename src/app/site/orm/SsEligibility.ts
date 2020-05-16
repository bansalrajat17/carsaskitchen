import { SEligibility } from './SEligibility';
import { ServiceSite } from './ServiceSite';
import { SsEligibilityKey } from './SsEligibilityKey';


export class SsEligibility {

    constructor(public ssEligibilityKey: SsEligibilityKey, public sEligibility: SEligibility, public serviceSite: ServiceSite) {
    }
}