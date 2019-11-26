import { TransferPrototypeProps } from "../Utils/General";
import { FunctionCE, DateCE } from "./CE_Others";
TransferPrototypeProps(Function.prototype, FunctionCE, {}, { configurable: true, enumerable: false });
TransferPrototypeProps(Date.prototype, DateCE, {}, { configurable: true, enumerable: false });
//# sourceMappingURL=CE_Others_Apply.js.map