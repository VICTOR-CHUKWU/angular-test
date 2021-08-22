import { State, Action, Selector, StateContext } from "@ngxs/store";
import { Data } from "../Data";
import { TestAction } from '../tesdata.action';

export class testDataStateModel {
    testdatas: Data[] = [];
}

@State<testDataStateModel>({
    name: 'testdata',
    defaults: {
        testdatas:[]
    }
    
})

export class testDataState{
   
    @Selector()
    static getTest(state: testDataStateModel){
        return state.testdatas
    }

    @Action(TestAction.addTest)
    add({getState, patchState }: StateContext<testDataStateModel>, { payload }:TestAction.addTest) {
        const state = getState();
        patchState({
            testdatas: [...state.testdatas, payload]
        })
    }
}