interface response {
    status?: number;
    message?: string;
    authenticated?: boolean;
    data?: [];
    error?: any;
}
export default (error: any) => {
    const response: response = {
        status: 501,
        message: 'Failed',
        authenticated: true,
        data: [],
        error: error
    };
    return response
}

