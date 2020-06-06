import { SsPackage } from "./SsPackage";
import { Site } from "./Site";

export class SPackage extends Site {
  constructor(
    public no: number,
    public name: string,
    public head: string,
    public description: string,
    public amount: number,
    public ssPackageSet: SsPackage[],
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
