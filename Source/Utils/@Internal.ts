declare var global;
export const g =
	typeof globalThis == "object" ? globalThis :
	typeof window == "object" ? window :
	typeof global == "object" ? global :
	{};