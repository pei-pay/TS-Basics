/**
 * Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
 */

interface _Todo {
  title: string;
}

const todo: Readonly<_Todo> = {
  title: "Delete inactive users"
};

todo.title = "hello";  // error
// Cannot assign to 'title' because it is a read - only property.