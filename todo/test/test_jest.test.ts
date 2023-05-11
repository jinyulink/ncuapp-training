import { addition, concatString, createArray, makeObject } from "./test_jest";

test("1 + 2 = 3", () => {
  expect(addition(1, 2)).toBe(3);
});

test(">_ + _< = >__<", () => {
  expect(concatString(">_", "_<")).toBe(">__<");
});

test("create array 1~10", () => {
  expect(createArray(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("create todo object", () => {
  expect(makeObject("sleep", false)).toEqual({ title: "sleep", iscompleted: false });
});