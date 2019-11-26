import { ArrayCE, NodeListCE } from "./CE_Array";
import { TransferPrototypeProps } from "../Utils/General";
TransferPrototypeProps(Array.prototype, ArrayCE, {}, { configurable: true, enumerable: false });
if (typeof NodeList != "undefined") {
    TransferPrototypeProps(NodeList.prototype, NodeListCE, {}, { configurable: true, enumerable: false });
}
//# sourceMappingURL=CE_Array_Apply.js.map