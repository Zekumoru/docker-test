export interface JsonResponse {
  status?: number;
  message?: string;
}

const createJsonResponse = <T extends object>(
  json: JsonResponse & T
): JsonResponse => {
  return {
    status: 200,
    ...json,
  };
};

export default createJsonResponse;
