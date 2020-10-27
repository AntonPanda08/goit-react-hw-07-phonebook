import { v4 as uuidv4 } from "uuid";

export default function createContact(name, number) {
  return {
    name: name,
    id: uuidv4(),
    number: number,
  };
}
