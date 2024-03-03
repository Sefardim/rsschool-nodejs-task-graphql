export interface IProfile {
    dto: {
        isMale: boolean;
        yearOfBirth: number;
        userId: string;
        memberTypeId: string;
    };
}

export interface IChangeProfile {
    id: string;
    dto: {
        isMale: boolean;
        yearOfBirth: number;
        memberTypeId: string;
    };
}