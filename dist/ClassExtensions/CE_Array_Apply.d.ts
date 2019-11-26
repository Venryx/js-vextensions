import { ArrayCEClass, NodeListCEClass } from "./CE_Array";
declare global {
    interface Array<T> extends ArrayCEClass<T> {
    }
    interface NodeList extends NodeListCEClass {
    }
}
