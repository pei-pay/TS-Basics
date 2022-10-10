/**
 * Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
 */

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Percian" },
  boris: { age: 5, breed: "Maine Corn" },
  mordred: { age: 8, breed: "British Shorthair" }
};