export const validatePaymentData = (data: any): string | null => {
    if (!data.productID || data.productID.trim() === "") {
        return "Product ID is required and cannot be empty.";
    }
    if (!data.transactionID || data.transactionID.trim() === "") {
        return "Transaction ID is required and cannot be empty.";
    }
    if (!data.account || data.account.trim() === "") {
        return "Account no. is required and cannot be empty.";
    }
    if (!data.amount || data.amount.trim() === "") {
        return "Amount is required and cannot be empty.";
    }
    if (!data.successRedirectURL || data.successRedirectURL.trim() === "") {
        return "Success redirect URL is required and cannot be empty.";
    }
    if (!data.failedRedirectURL || data.failedRedirectURL.trim() === "") {
        return "Failed redirect URL is required and cannot be empty.";
    }
    if (!data.env || data.env.trim() === "") {
        return "Environment is required and cannot be empty.";
    }
    if (!data.email || data.email.trim() === "") {
        return "Email Address is required and cannot be empty.";
    }
    if (!data.firstName || data.firstName.trim() === "") {
        return "Firstname is required and cannot be empty.";
    }
    if (!data.lastName || data.lastName.trim() === "") {
        return "Lastname Address is required and cannot be empty.";
    }
    if (!data.site || data.site.trim() === "") {
        return "Site URL is required and cannot be empty.";
    }

    return null;
};