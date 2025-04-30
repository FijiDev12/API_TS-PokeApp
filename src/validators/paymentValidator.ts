export const validatePaymentData = (data: any): string | null => {
    if (!data.productID || data.productID === "") {
        return "Product ID is required and cannot be empty.";
    }
    if (!data.transactionID || data.transactionID === "") {
        return "Transaction ID is required and cannot be empty.";
    }
    if (!data.transactionType || data.transactionType === "") {
        return "Transaction type is required and cannot be empty.";
    }
    if (!data.account || data.account === "") {
        return "Account no. is required and cannot be empty.";
    }
    if (!data.amount || data.amount === "") {
        return "Amount is required and cannot be empty.";
    }
    if (!data.successRedirectURL || data.successRedirectURL === "") {
        return "Success redirect URL is required and cannot be empty.";
    }
    if (!data.failedRedirectURL || data.failedRedirectURL === "") {
        return "Failed redirect URL is required and cannot be empty.";
    }
    if (!data.env || data.env === "") {
        return "Environment is required and cannot be empty.";
    }
    if (!data.email || data.email === "") {
        return "Email Address is required and cannot be empty.";
    }
    if (!data.firstName || data.firstName === "") {
        return "Firstname is required and cannot be empty.";
    }
    if (!data.lastName || data.lastName === "") {
        return "Lastname Address is required and cannot be empty.";
    }
    if (!data.site || data.site === "") {
        return "Site URL is required and cannot be empty.";
    }

    return null;
};