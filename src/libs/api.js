import axios from "axios";
import { getErrorDetails } from "../utils/error";

const apiClient = axios.create({
    baseURL: "/api", // All requests will be sent to /api/...
});

// Response interceptor to catch errors globally
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const { status, data } = error.response;

            // Redirect to login page if error status is 401 (Unauthorized)
            if (status === 401 && typeof window !== "undefined") {
                window.location.href = "/login";
            }

            // Get error details (type and message) from our helper
            const { type, message } = getErrorDetails(status, data);

            // Dispatch a custom event with the error details.
            if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("apiError", { detail: { type, message } }));
            }
        }
        return Promise.reject(error);
    }
);

export default apiClient;
