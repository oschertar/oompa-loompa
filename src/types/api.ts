export interface ApiResponse {
  current: number;
  total: number;
  results: OompaLoompa[];
}

export interface OompaLoompa {
  id: number;
  first_name: string;
  last_name: string;
  favorite: FavoriteScheme;
  gender: string;
  image: string;
  profession: string;
  email: string;
  age: number;
  country: string;
  height: number;
}

export interface FavoriteScheme {
  color: string;
  food: string;
  random_string: string;
  song: string;
}
