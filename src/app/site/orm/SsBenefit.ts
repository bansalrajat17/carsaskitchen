import { ServiceSite } from "./ServiceSite";
import { SBenefit } from "./SBenefit";
import { SsBenefitKey } from "./SsBenefitKey";

export class SsBenefit {
  constructor(
    public ssBenefitKey: SsBenefitKey,
    public sBenefit: SBenefit,
    public serviceSite: ServiceSite
  ) {}
}
