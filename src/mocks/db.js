import { factory, primaryKey } from "@mswjs/data";
import faker from "@faker-js/faker";

export const db = factory({
  user: {
    id: primaryKey(() => String(faker.unique(faker.datatype.number))),
    email: faker.internet.email,
    first_name: faker.name.firstName,
    last_name: faker.name.lastName,
    avatar: faker.internet.url,
  },
});
