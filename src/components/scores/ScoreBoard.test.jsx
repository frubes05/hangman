import { advancedSort } from "../../utils/sortUtils";
import { exampleData, exampleData2, exampleData3, exampleData4 } from "../../utils/testUtils";

describe("advancedSort", () => {
  it("should be a pure function", () => {
    const sortedData = advancedSort(exampleData);
    expect(sortedData).toEqual(exampleData);
  });

  it("should sort from lowest errors occurence to highest", () => {
    const sortedData = advancedSort(exampleData);
    expect(sortedData).toEqual([
      { length: 8, uniqueCharacters: 5, timestamp: 1647797723, errors: 1 },
      { length: 5, uniqueCharacters: 3, timestamp: 1647801323, errors: 2 },
      { length: 6, uniqueCharacters: 4, timestamp: 1647804923, errors: 3 },
    ]);
  });

  it("should position elements with more unique characters more to the top, if number of errors is the same", () => {
    const sortedData = advancedSort(exampleData2);
    expect(sortedData).toEqual([
      { length: 8, uniqueCharacters: 5, timestamp: 1647797723, errors: 2 },
      { length: 5, uniqueCharacters: 3, timestamp: 1647801323, errors: 2 },
      { length: 6, uniqueCharacters: 4, timestamp: 1647804923, errors: 3 },
    ]);
  });

  it("should position quotes with bigger length more to the top, if number of errors and unique characters is the same", () => {
    const sortedData = advancedSort(exampleData3);
    expect(sortedData).toEqual([
      { length: 8, uniqueCharacters: 5, timestamp: 1647797723, errors: 2 },
      { length: 5, uniqueCharacters: 5, timestamp: 1647801323, errors: 2 },
      { length: 6, uniqueCharacters: 4, timestamp: 1647804923, errors: 3 },
    ]);
  });

  it("should position elements with faster solution more to the top, if number of errors, unique characters and length is the same", () => {
    const sortedData = advancedSort(exampleData4);
    expect(sortedData).toEqual([
      { length: 8, uniqueCharacters: 5, timestamp: 1647797723, errors: 2 },
      { length: 8, uniqueCharacters: 5, timestamp: 1647801323, errors: 2 },
      { length: 6, uniqueCharacters: 4, timestamp: 1647804923, errors: 3 },
    ]);
  });
});
