import "."; // just to make this a module

/*type ArrayCEProxy_Proxy<T> = {
	name: string;
};
type Proxy<T> = {
	[P in keyof T]: T[P];
};*/

//type ArrayCEProxy_Proxy<ItemT> = typeof import("../../Dist").ArrayCEProxy;
//type ArrayCEProxy_Proxy = typeof ArrayCE_funcs;
type ArrayCEProxy_Proxy = typeof import("../Dist").ArrayCE_funcs;
type ElementCEProxy_Proxy = typeof import("../Dist").ElementCE_funcs;
type NumberCEProxy_Proxy = typeof import("../Dist").NumberCE_funcs;
type ObjectCEProxy_Proxy = typeof import("../Dist").ObjectCE_funcs;
type FunctionCEProxy_Proxy = typeof import("../Dist").FunctionCE_funcs;
type DateCEProxy_Proxy = typeof import("../Dist").DateCE_funcs;
type StringCEProxy_Proxy = typeof import("../Dist").StringCE_funcs;

declare global {
	//interface Array<T> extends ArrayCEProxy<T> {}
	//interface Array<T> extends ArrayCEProxy<T> {}
	//interface Array<T> extends ArrayCEProxy<T> {}
	interface Array<T> extends ArrayCEProxy_Proxy {}
	//interface NodeList<T> extends NodeListCEProxy<T> {}
	interface Element extends ElementCEProxy_Proxy {}
	interface Number extends NumberCEProxy_Proxy {}
	interface Object extends ObjectCEProxy_Proxy {}
	interface Function extends FunctionCEProxy_Proxy {}
	interface Date extends DateCEProxy_Proxy {}
	//interface Error extends ErrorCEProxy {}
	interface String extends StringCEProxy_Proxy {}
}