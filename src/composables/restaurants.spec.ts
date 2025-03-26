import { useAverageRating, useFormattedAddress } from './restaurants';
import restaurantsResponse from '@/mock/restaurants.json';

const restaurant = restaurantsResponse[0];

describe(`composable-restaurants`, () => {
  describe(`useFormattedAddress`, () => {
    it(`should return the formatted address`, () => {
      const formattedAddress = useFormattedAddress(restaurant.location);
      expect(formattedAddress).toBe(`Jungfernstieg 16 - 20\n4. OG\n20354 Hamburg\nGermany`);
    });

    it(`should return the default message if the location is undefined`, () => {
      const formattedAddress = useFormattedAddress(undefined);
      expect(formattedAddress).toBe(`Address not specified`);
    });
  });

  describe(`useAverageRating`, () => {
    it(`should return the average rating`, () => {
      const averageRating = useAverageRating(restaurant.reviews);
      expect(averageRating).toBe(4);
    });

    it(`should return the floored average rating when reviews are present`, () => {
      const reviews = [
        { id: `1`, text: `Lorem ipsum dolor sit amet`, rating: 4.5 },
        { id: `2`, text: `Consectetur adipiscing elit`, rating: 3 },
        { id: `3`, text: `Sed do eiusmod tempor incididunt`, rating: 5 },
      ];
      const averageRating = useAverageRating(reviews);
      expect(averageRating).toBe(4);
    });

    it(`should return 0 if the reviews are undefined`, () => {
      const averageRating = useAverageRating(undefined);
      expect(averageRating).toBe(0);
    });

    it(`should return 0 if the reviews are empty`, () => {
      const averageRating = useAverageRating([]);
      expect(averageRating).toBe(0);
    });
  });
});
