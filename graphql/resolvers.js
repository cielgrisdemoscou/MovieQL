import { People, getById } from "./db";

const resolvers = {
  Query: {
    people: () => People,
	person: () => getById()
  }
};

export default resolvers;