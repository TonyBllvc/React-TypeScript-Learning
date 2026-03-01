type MixedArray = [string, number, (string | number | boolean)[], boolean];

const myArray: MixedArray = ["hello", 42, ["nested", 123, false], true];

// ___________________
type StringName = string;

let name: StringName = "Alice";

// _______________
let age: number = 10;
