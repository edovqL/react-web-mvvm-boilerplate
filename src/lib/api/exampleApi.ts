import apiClient from "./apiClient";
import {
  Example,
  CreateExampleRequest,
} from "@/features/example/model/example.types";
import { CreateExampleSchema } from "@/features/example/model/example.schema";

export const getExamples = async (): Promise<Example[]> => {
  const response = await apiClient.get<Example[]>("/examples");
  return response.data;
};

export const createExample = async (
  data: CreateExampleRequest
): Promise<Example> => {
  const validatedData = CreateExampleSchema.parse(data);
  const response = await apiClient.post<Example>("/examples", validatedData);
  return response.data;
};
