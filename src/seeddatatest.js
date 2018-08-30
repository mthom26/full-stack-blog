import { seedDatabase } from './seedData';
import db from './models';

console.log('Seeding db...');

async function go(db) {
  await seedDatabase(db);
  
}

go(db);
console.log('finished!');
process.exit();
