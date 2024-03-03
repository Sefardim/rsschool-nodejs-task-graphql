export interface IPost {
    dto: {
        title: string;
        content: string;
        authorId: string;
    };
}

export interface IChangePost {
    id: string;
    dto: {
        title: string;
        content: string;
    };
}