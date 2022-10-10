/**
 * Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
 */

interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };


const obj2: Required<Props> = { a: 5 };  // error
// Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>';