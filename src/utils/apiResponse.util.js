/**
 * Represents a standardized API response structure.
 * This class helps in maintaining a consistent response format across the application.
 */
class ApiResponse {
    /**
     * Creates a new ApiResponse instance.
     *
     * @param {number} statusCode - The HTTP status code of the response.
     * @param {any} data - The payload/data to be returned (usually an object or array).
     * @param {string} message - A descriptive message regarding the response status.
     * @param {boolean} error - Indicates if the response represents an error state.
     */
    constructor(statusCode, data, message, error) {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.error = error;
    }

    /**
     * Factory method to create a successful response.
     *
     * @param {any} data - The data to return to the client.
     * @param {string} [message="OK"] - Optional success message (defaults to "OK").
     * @param {number} [statusCode=200] - Optional HTTP status code (defaults to 200).
     * @returns {ApiResponse} A new ApiResponse instance configured for success.
     */
    static success(data, message = "OK", statusCode = 200) {
        return new ApiResponse(statusCode, data, message, false);
    }

    /**
     * Factory method to create an error response.
     *
     * @param {string} message - The error message describing what went wrong.
     * @param {number} [statusCode=500] - Optional HTTP status code (defaults to 500).
     * @param {any} [data=null] - Optional additional data regarding the error (defaults to null).
     * @returns {ApiResponse} A new ApiResponse instance configured for an error.
     */
    static error(message, statusCode = 500, data = null) {
        return new ApiResponse(statusCode, data, message, true);
    }
}


module.exports = ApiResponse;