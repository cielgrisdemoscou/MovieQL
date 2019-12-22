import { People, getById } from "./db";

const resolvers = {
  Query: {
    people: () => People,
	person: (_, { id }) => getById(id)
  }
};

export default resolvers;