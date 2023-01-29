// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LandingCard } = initSchema(schema);

export {
  LandingCard
};