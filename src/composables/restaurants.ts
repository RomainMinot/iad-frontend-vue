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
  return formatted_address ?? returnDefaultMessage;
}
