export class Users {
id: string;
userName: string;
normalizedUserName: string;
email: string;
normalizedEmail: string;
emailConfirm: boolean;
passwordHash: string;
securityStamp: string;
phoneNumber: string;
phoneNumberConfirmed: boolean;
twoFactorEnabled:boolean;
lookoutEnd: Date;
lookoutEndEnabled: boolean;
accessFailedCount: number;
country: string;
}
