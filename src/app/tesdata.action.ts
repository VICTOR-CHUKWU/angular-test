import { Data } from "./Data";

export namespace TestAction {
    export class addTest {
        static readonly type = '[TestAdd] add'
        constructor(public payload: Data){}
    }

    export class removeTest {
        static readonly type = '[TestAdd] add'
        constructor(public payload: string){}
    }
}