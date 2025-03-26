import { type Location, useFormattedAddress } from './restaurants';

describe(`composable-restaurants`, () => {
  describe(`useFormattedAddress`, () => {
    it(`should return the formatted address`, () => {
      const location: Location = {
        address1: `Jungfernstieg 16 - 20`,
        city: `Hamburg`,
        postal_code: `20354`,
        formatted_address: `Jungfernstieg 16 - 20\n4. OG\n20354 Hamburg\nGermany`,
      };
      const formattedAddress = useFormattedAddress(location);
      expect(formattedAddress).toBe(`Jungfernstieg 16 - 20\n4. OG\n20354 Hamburg\nGermany`);
    });

    it(`should return the default message if the location is undefined`, () => {
      const formattedAddress = useFormattedAddress(undefined);
      expect(formattedAddress).toBe(`Address not specified`);
    });
  });
});
