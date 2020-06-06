import { ServiceSite } from "./ServiceSite";
import { SsDocumentRequiredKey } from "./SsDocumentRequiredKey";
import { SDocumentRequired } from "./SDocumentRequired";

export class SsDocumentRequired {
  constructor(
    public ssDocumentRequiredKey: SsDocumentRequiredKey,
    public sDocumentRequired: SDocumentRequired,
    public serviceSite: ServiceSite
  ) {}
}
