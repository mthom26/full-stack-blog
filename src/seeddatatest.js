import { seedDatabase } from './seedData';
import db from './models';

console.log('Seeding db...');

seedDatabase(db).then(() => {
  console.log('success')
});
