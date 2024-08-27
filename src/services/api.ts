import axios, { AxiosInstance, AxiosResponse } from "axios";

interface ApiResponse {
  current: number;
  total: number;
  results: OompaLoompa[];
}

interface OompaLoompa {
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

interface FavoriteScheme {
  color: string;
  food: string;
  random_string: string;
  song: string;
}

class ApiService {
  private axiosInstance: AxiosInstance;
  private baseURL: string =
    "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas";

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });
  }

  public async getAllOompaLoompas(page: number): Promise<ApiResponse> {
    try {
      const response: AxiosResponse<ApiResponse> = await this.axiosInstance.get(
        `/`,
        {
          params: {
            page,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error on fetch:", error);
      throw error;
    }
  }

  public async getOompaLoompaById(id: number): Promise<ApiResponse> {
    try {
      const response: AxiosResponse<ApiResponse> = await this.axiosInstance.get(
        `/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error on fetching Oompa Loompa with ID ${id}:`, error);
      throw error;
    }
  }
}

export const apiService = new ApiService();
