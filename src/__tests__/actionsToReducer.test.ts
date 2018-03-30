import { actionsToReducer, ITsarActions } from "../actionsToReducer";

interface IState {
  foo: string;
  baz: number;
}

describe("actionsToReducer", () => {
  it("exists", expect(actionsToReducer).toBeDefined);

  it("accepts an actions map object and returns a reducer", () => {
    const actions: ITsarActions<IState> = {
      one: payload => getState => {
        return { ...getState(), baz: payload };
      }
    };
    const reducer = actionsToReducer<IState>(actions);
    const statePrev = { foo: "bar", baz: 0 };
    const recieved = reducer(statePrev, { type: "one", payload: 2 });
    const expected = { foo: "bar", baz: 2 };
    expect(recieved).toEqual(expected);
  });

  it("returns previous state if non-matching action type is passed", () => {
    const actions = {};
    const reducer = actionsToReducer<IState>(actions);
    const statePrev = { foo: "bar", baz: 0 };
    const recieved = reducer(statePrev, { type: "BAD" });
    expect(recieved).toEqual(statePrev);
  });
});
