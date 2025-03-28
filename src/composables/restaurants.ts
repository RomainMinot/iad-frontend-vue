import { api } from '~/services/api';

export interface Restaurant {
  name: string
  id: string
  url: string
  phone: string
  display_phone: string
  photos: string[]
  location?: Location
  reviews: Review[]
}

export interface Location {
  address1: string
  city: string
  postal_code: string
  formatted_address: string
}

export interface Review {
  text: string
  rating: number
  id: string
}

export const restaurantsApiBasePath = `restaurants`;

export function useFetchRestaurants() {
  return useQuery({
    queryKey: [`restaurants-list`],
    queryFn: () => {
      return api(restaurantsApiBasePath).json<Restaurant[]>();
    },
  });
}

export function useFetchRestaurant({ restaurantId }: { restaurantId: string | string[] }) {
  return useQuery({
    queryKey: [`restaurant`, restaurantId],
    queryFn: () => {
      const url = `${restaurantsApiBasePath}/${restaurantId}`;
      return api(url).json<Restaurant>();
    },
  });
}

export function useFormattedAddress(location: Location | undefined): string {
  const returnDefaultMessage = `Address not specified`;
  if (!location) return returnDefaultMessage;
  const { formatted_address } = location;
  return formatted_address;
}

export function useAverageRating(reviews: Review[] | undefined): number {
  if (!reviews || reviews.length === 0) return 0;
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / reviews.length;
  return Math.round(averageRating * 2) / 2;
}
