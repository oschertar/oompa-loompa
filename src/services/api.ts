import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ApiResponse, OompaLoompa } from "../types/api";

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

  public async getOompaLoompaById(id: string): Promise<OompaLoompa> {
    try {
      const response: AxiosResponse<OompaLoompa> = await this.axiosInstance.get(
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
