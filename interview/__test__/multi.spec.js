import { it, expect, test } from "@jest/globals";
import { add, multi } from "../multi";
it("乘法", () => {
  expect(add("100", "200")).toEqual("300");
  expect(add("1", "999")).toEqual("1000");
  expect(add("2222222222", "8888888888")).toEqual("11111111110");
  expect(multi("2", "200")).toEqual("400");
  expect(multi("200", "200")).toEqual("40000");
  expect(multi("9", "8")).toEqual("72");
  expect(multi("34", "67")).toEqual("2278");
  expect(multi("9999999", "8888888")).toEqual("88888871111112");
  expect(multi("0", "0")).toEqual("0");
  expect(multi("971760341161", "8455738366101455974611535948671636301137077335932515768462241304266372179032527079565403847080606555763")).toEqual("8216951199410907575427327927927365076757078404192222527233879694180595433516447485754447834051792100495066050660843");
});
