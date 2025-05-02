interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: any;
}

export function successResponse<T>(data: T, message = 'Success'): ApiResponse<T> {
  return {
    success: true,
    message,
    data,
  };
}

export function errorResponse(error: any, message = 'Error'): ApiResponse {
  return {
    success: false,
    message,
    error,
  };
}

export function formatValidationErrors(errors: Record<string, string[]>): string {
  return Object.entries(errors)
    .map(([field, messages]) => `${field}: ${messages.join(', ')}`)
    .join('; ');
} 