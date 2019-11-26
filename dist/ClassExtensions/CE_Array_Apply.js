import { ArrayCE, NodeListCE } from "./CE_Array";
import { TransferPrototypeProps } from "../Utils/General";
TransferPrototypeProps(Array.prototype, ArrayCE.prototype, {}, { configurable: true, enumerable: false });
if (typeof NodeList != "undefined") {
    TransferPrototypeProps(NodeList.prototype, NodeListCE.prototype, {}, { configurable: true, enumerable: false });
}
//# sourceMappingURL=CE_Array_Apply.js.map