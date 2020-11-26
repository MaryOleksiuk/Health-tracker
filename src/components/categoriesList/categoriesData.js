import { healthAppRoutes } from '../../navigation/healthAppRoutes';

export const categories = [
  {
    id: 1,
    kind: 'breakfast',
    title: "Add breakfast",
    description: "Good breakfast is very important",
    link: healthAppRoutes.breakfast
  },
  {
    id: 2,
    kind: 'lunch',
    title: "Add lunch",
    description: "Successful people eat lunch",
    link: healthAppRoutes.lunch
  },
  {
    id: 3,
    kind: 'dinner',
    title: "Add dinner",
    description: "Better do not have dinner",
    link: healthAppRoutes.dinner
  },
  {
    id: 4,
    kind: 'activity',
    title: "Add activity",
    description: "At least walking",
    link: healthAppRoutes.steps
  },
  {
    id: 5,
    kind: 'fruits',
    title: "Add fruits",
    description: "Fruits boosts your mood",
    link: healthAppRoutes.fruits
  },
  {
    id: 6,
    kind: 'vegetables',
    title: "Add vegetables",
    description: "Vegetables are very important",
    link: healthAppRoutes.vegetables
  },
  {
    id: 7,
    kind: 'junk',
    title: "Add junk food",
    description: "This food is the worst",
    link: healthAppRoutes.junk
  },
  {
    id: 8,
    kind: 'water',
    title: "Add water",
    description: "Water is life",
    link: healthAppRoutes.water
  },
  {
    id: 9,
    kind: 'sleep',
    title: "Add sleep",
    description: "Everybody needs to sleep",
    link: healthAppRoutes.sleep
  },
  {
    id: 10,
    kind: 'coffee',
    title: "Add coffee",
    description: "Better without it",
    link: healthAppRoutes.coffee
  }
]
