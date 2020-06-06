import { ServiceSite } from "./ServiceSite";
import { Site } from "./Site";

export class SDocumentRequired extends Site {
  constructor(
    no: number,
    name: string,
    head: string,
    description: string,
    public serviceSiteList: ServiceSite[],
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
