import { FunctionCEClass, DateCEClass } from "./CE_Others";
declare global {
    interface Function extends FunctionCEClass {
    }
    interface Date extends DateCEClass {
    }
}
