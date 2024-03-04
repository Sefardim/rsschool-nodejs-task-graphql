export interface IUser {
    dto: {
        name: string;
        balance: number;
    };
}

export interface IChangeUser {
    id: string;
    dto: {
        name: string;
        balance: number;
    };
}

export interface ISubscribeTo {
    userId: string;
    authorId: string;
}

export interface IUnsubscribeFrom {
    userId: string;
    authorId: string;
}


