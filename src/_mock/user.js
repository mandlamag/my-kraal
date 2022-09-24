import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_1.png`,
  gender: sample(['Male', 'Female']),
  age: sample([1, 2, 0.6, 0.3, 3]),
  status: sample(['healthy', 'unhealthy']),
  vaccinated: faker.datatype.boolean(),
}));

export default users;
