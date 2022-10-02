var Query_KEYS = ["users", "post", "comments"];
// conditionalTypes * keyof
var getValue = function (value, key) {
    return value[key];
};
var dog = {
    name: "Taro",
    age: 10
};
var cat = {
    name: "Jiro",
    age: 3,
    type: "hoge"
};
console.log(getValue(dog, "name"));
