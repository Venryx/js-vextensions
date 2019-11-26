import { TransferPrototypeProps } from "../Utils/General";
import { FunctionCE, DateCE } from "./CE_Others";
TransferPrototypeProps(Function.prototype, FunctionCE.prototype, {}, { configurable: true, enumerable: false });
TransferPrototypeProps(Date.prototype, DateCE.prototype, {}, { configurable: true, enumerable: false });
//# sourceMappingURL=CE_Others_Apply.js.map