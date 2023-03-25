import { advancedSort } from "../../utils/sortUtils";
import { exampleData } from "../../utils/testUtils";
import axios from "axios";

describe("advanced sorting functionality", () => {
  it("should be a pure function", async() => {
    const newData = await axios.get('https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores');
    const { data } = newData;
    expect(data).toEqual(exampleData);
  });

  it("should sort from lowest errors occurence to highest", async() => {
    const newData = await axios.get('https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores');
    const { data } = newData;
    const sortedData = advancedSort(data);
    expect(sortedData).toEqual([
      { length: 8, uniqueCharacters: 5, timestamp: 1647797723, errors: 1, userName: "Quashawn", quoteId: "2xpHvSOQMD" },
      { length: 5, uniqueCharacters: 3, timestamp: 1647801323, errors: 2, userName: 'Filip', quoteId: "Ckh_FdZYHyf" },
      { length: 6, uniqueCharacters: 4, timestamp: 1647804923, errors: 3, userName: "Huy", quoteId: "HMBEfGB94i" },
    ]);
  });

  it("should position elements with more unique characters more to the top, if number of errors is the same", async() => {
    const newData = await axios.get('https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores/2');
    const { data } = newData;
    const sortedData = advancedSort(data);
    expect(sortedData).toEqual([
      { length: 8, uniqueCharacters: 5, timestamp: 1647797723, errors: 2, userName: "Quashawn", quoteId: "2xpHvSOQMD" },
      { length: 5, uniqueCharacters: 3, timestamp: 1647801323, errors: 2, userName: 'Filip', quoteId: "Ckh_FdZYHyf" },
      { length: 6, uniqueCharacters: 4, timestamp: 1647804923, errors: 3, userName: "Huy", quoteId: "HMBEfGB94i" },
    ]);
  });

  it("should position quotes with bigger length more to the top, if number of errors and unique characters is the same", async() => {
    const newData = await axios.get('https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores/3');
    const { data } = newData;
    const sortedData = advancedSort(data);
    expect(sortedData).toEqual([
      { length: 8, uniqueCharacters: 5, timestamp: 1647797723, errors: 2, userName: "Quashawn", quoteId: "2xpHvSOQMD" },
      { length: 5, uniqueCharacters: 5, timestamp: 1647801323, errors: 2, userName: 'Filip', quoteId: "Ckh_FdZYHyf" },
      { length: 6, uniqueCharacters: 4, timestamp: 1647804923, errors: 3, userName: "Huy", quoteId: "HMBEfGB94i" },
    ]);
  });

  it("should position elements with faster solution more to the top, if number of errors, unique characters and length is the same", async() => {
    const newData = await axios.get('https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores/4');
    const { data } = newData;
    const sortedData = advancedSort(data);
    expect(sortedData).toEqual([
      { length: 8, uniqueCharacters: 5, timestamp: 1647797723, errors: 2, userName: "Quashawn", quoteId: "2xpHvSOQMD" },
      { length: 8, uniqueCharacters: 5, timestamp: 1647801323, errors: 2, userName: 'Filip', quoteId: "Ckh_FdZYHyf" },
      { length: 6, uniqueCharacters: 4, timestamp: 1647804923, errors: 3, userName: "Huy", quoteId: "HMBEfGB94i" },
    ]);
  });
});
