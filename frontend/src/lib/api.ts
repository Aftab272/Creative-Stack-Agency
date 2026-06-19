const API_BASE_URL = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

interface BackendResponse<TResponse> {
  ok: boolean;
  data?: TResponse;
  message?: string;
  errors?: string[];
}

export async function postToBackend<TPayload, TResponse = unknown>(
  path: string,
  payload: TPayload
): Promise<BackendResponse<TResponse> | null> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return {
        ok: false,
        message: data?.message || `Backend request failed with status ${response.status}`,
        errors: data?.errors
      };
    }

    return data;
  } catch (error) {
    console.error(`Unable to submit ${path}`, error);
    return null;
  }
}

export async function getFromBackend<TResponse = unknown>(
  path: string
): Promise<BackendResponse<TResponse> | null> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return {
        ok: false,
        message: data?.message || `Backend GET request failed with status ${response.status}`,
        errors: data?.errors
      };
    }

    return data;
  } catch (error) {
    console.error(`Unable to fetch from ${path}`, error);
    return null;
  }
}
