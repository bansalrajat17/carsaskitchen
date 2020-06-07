import { ServiceSite } from "./ServiceSite";
import { SPackageDetail } from "./SPackageDetail";
import { SsPackageKey } from "./SsPackageKey";

export class SsPackage {
  constructor(
    public ssPackageKey: SsPackageKey,
    public sPackageDetail: SPackageDetail,
    public serviceSite: ServiceSite
  ) {}
}
