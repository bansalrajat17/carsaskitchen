import { ServiceSite } from "./ServiceSite";
import { SPackage } from "./SPackage";
import { SsPackageKey } from "./SsPackageKey";

export class SsPackage {
  constructor(
    public ssPackageKey: SsPackageKey,
    public sPackage: SPackage,
    public serviceSite: ServiceSite
  ) {}
}
