import {CE} from "../Source";

/*class Test1{
	Test2() {}
}
ObjectCE(new Test1()).VSet({}).Test2
ObjectCE(new Object()).Pairs()[0].key;*/

let obj = {} as {[key: string]: number};
let vals: number[] = CE(obj).VValues();

let arr = [] as string[];
let numbers: number[] = CE(arr).Select(a=>a.length);