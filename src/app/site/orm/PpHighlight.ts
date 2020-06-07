import { SPackageDetail } from "./SPackageDetail";
import { PpHighlightKey } from "./PpHighlightKey";
import { PHighlight } from "./PHighlight";

export class PpHighlight {
  constructor(
    public ppHighlightKey: PpHighlightKey,
    public pHighlight: PHighlight,
    public sPackage: SPackageDetail
  ) {}
}
