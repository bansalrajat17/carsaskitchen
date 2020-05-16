import { Site } from "../../site/orm/Site";

export class ContentSite extends Site {
    constructor(public no: number,
        public name: string,
        public head: string,
        public description: string,
        createdDate: Date,
        modifiedDate: Date,
        createdBy: string,
        modifiedBy: string) {
        super(no,name,head,description,createdDate,
            modifiedDate,
            createdBy,
            modifiedBy);
    }
}
