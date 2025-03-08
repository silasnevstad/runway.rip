export function getErrorDetails(status, errorData) {
    let type = "error";
    let message = errorData?.error || errorData?.message || "An error occurred";

    // Customize error messages based on status codes
    switch (status) {
        case 400:
            type = "warning";
            message = errorData?.error || "Bad Request";
            break;
        case 401:
            type = "error";
            message = errorData?.error || "Unauthorized. Please log in.";
            break;
        case 404:
            type = "info";
            message = errorData?.error || "Resource not found";
            break;
        case 500:
            type = "error";
            message = errorData?.error || "Internal Server Error";
            break;
        default:
            break;
    }

    return { type, message };
}
