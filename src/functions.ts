function firstFunction<T>(array: T[]): T[] {
  console.log(array.reverse());
  return array.reverse();
}

let strings = firstFunction<string>(["1", "2", "3", "4", "5"]);
console.log(strings);

firstFunction<number>([1, 2, 3, 4, 5]);

type Obg = {
  [key: string]: string | number;
};

const obg: Obg = {
  name: "igor",
  secondName: "artir",
  thirdName: "dru",
  age: 67,
};

function secondFunction<T>(arr2: T[]): string {
  const result = arr2.join();
  console.log(result);
  return result;
}

secondFunction<string>(["qwe", "ewq", "zxc"]);
