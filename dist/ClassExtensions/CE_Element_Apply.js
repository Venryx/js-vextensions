import { TransferPrototypeProps } from "../Utils/General";
import { ElementCE } from "./CE_Element";
if (typeof Element != "undefined") {
    TransferPrototypeProps(Element.prototype, ElementCE, {}, { configurable: true, enumerable: false });
}
//# sourceMappingURL=CE_Element_Apply.js.map