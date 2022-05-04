import { IAlien } from "../interfaces/IAlien";

interface response {
    status?: number;
    message?: string;
    authenticated?: boolean;
    data?: IAlien[];
    error?: any;
}

export default (data:IAlien[]) => {
	const response:response = {
		status: 200,
		message: 'Success',
		authenticated: true,
        data:data
	};
    return response
}

