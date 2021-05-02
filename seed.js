require('dotenv').config();
require('./config/database');

const Breed = require('./models/breed');
const Puppy = require('./models/puppy');

(async function() {

  await Breed.deleteMany({});
  const breeds = await Breed.create([
    {name: 'Hypoallergenic', sortOrder: 10},
    {name: 'Small Dog Breeds', sortOrder: 20},
    {name: 'Medium Dog Breeds', sortOrder: 30},
    {name: 'Large Dog Breeds', sortOrder: 40},
    {name: 'Emotional Support Dogs', sortOrder: 50},
  ]);

  await Puppy.deleteMany({});
  const puppies = await Puppy.create([
    {name: 'Giant Schanuzer', emoji: '🐕', breed: breeds[0], price: 105.00},
    {name: 'Wire Fox Terrier', emoji: '🐕', breed: breeds[0], price: 105.00},
    {name: 'Kerry Blue Terrier', emoji: '🐕', breed: breeds[0], price: 105.00},
    {name: 'Irish Water Spaniel', emoji: '🐕', breed: breeds[0], price: 105.00},
    {name: 'Havanese', emoji: '🐕', breed: breeds[0], price: 105.00},
    {name: 'Beagle', emoji: '🐶', breed: breeds[1], price: 85.00},
    {name: 'Brussels Griffon', emoji: '🐶', breed: breeds[1], price: 85.00},
    {name: 'Pug', emoji: '🐶', breed: breeds[1], price: 85.00},
    {name: 'Dachsund', emoji: '🐶', breed: breeds[1], price: 85.00},
    {name: 'American Cocker Spaniel', emoji: '🐕', breed: breeds[2], price: 95.00},
    {name: 'Australian Cattle Dog', emoji: '🐕', breed: breeds[2], price: 95.00},
    {name: 'English Bulldog', emoji: '🐕', breed: breeds[2], price: 95.00},
    {name: 'Great Dane', emoji: '🐩', breed: breeds[3], price: 100.00},
    {name: 'German Shepard', emoji: '🐩', breed: breeds[3], price: 100.00},
    {name: 'Husky', emoji: '🐩', breed: breeds[3], price: 100.00},
    {name: 'Golden Retriever', emoji: '🐕‍🦺', breed: breeds[4], price: 175.00},
    {name: 'Labrador Retriever', emoji: '🐕‍🦺', breed: breeds[4], price: 175.00},
  ]);

  console.log(puppies)

  process.exit();

})();