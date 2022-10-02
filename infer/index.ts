// reference from https://zenn.dev/brachio_takumi/articles/464106a6a80eca8ab919

const Query_KEYS = ["users", "post", "comments"] as const;
type Unpacked<T> = T extends { [K in keyof T]: infer U } ? U : never;
type QueryKeysTypes = Unpacked<typeof Query_KEYS>;


// Conditional Types
type IsNumber<T> = T extends number ? true : false;
type Hoge = IsNumber<"a">;    // false
type Fuga = IsNumber<1>;      // true
type Foo = IsNumber<boolean>; // false

// conditionalTypes * keyof
const getValue = <T, U extends keyof T>(value: T, key: U): T[U] => {
  return value[key];
};

const dog = {
  name: "Taro",
  age: 10
};

const cat = {
  name: "Jiro",
  age: 3,
  type: "Ragdoll"
};

console.log(getValue(dog, "name")); // Taro

// ↓error: Argument of type '"type"' is not assignable to parameter of type '"name" | "age"'.ts(2345)
// console.log(getValue(dog, "type"));

console.log(getValue(cat, "type")); // "Ragdoll"

// infer
type Id<T> = T extends { id: infer U; } ? U : never;