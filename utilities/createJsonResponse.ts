export interface JsonResponse {
  status?: number;
  message?: string;
}

const createJsonResponse = (json: JsonResponse): JsonResponse => {
  return {
    status: 200,
    ...json,
  };
};

export default createJsonResponse;
