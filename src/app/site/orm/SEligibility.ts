import { SsEligibility } from './SsEligibility';
import { Site } from "./Site";


export class SEligibility extends Site {
    constructor(public no: number,
        public name: string,
        public head: string,
        public description: string, public ssEligibilityList
            : SsEligibility[],
        createdDate: Date,
        modifiedDate: Date,
        createdBy: string,
        modifiedBy: string) {
        super(no, name, head, description, createdDate,
            modifiedDate,
            createdBy,
            modifiedBy);
    }
}
