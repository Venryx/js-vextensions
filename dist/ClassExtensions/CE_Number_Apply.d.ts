import { NumberCEClass } from "./CE_Number";
declare global {
    interface Number extends NumberCEClass {
    }
}
