import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';

export interface UserProps {
    name?: string;
    age?: number;
    id?: number;
}

export class User {
    private events: Eventing = new Eventing();
    private sync: Sync<UserProps> = new Sync<UserProps>('http://localhost:3000/users');
    private attributes: Attributes<UserProps>;

    constructor(attrs: UserProps) {
        this.attributes = new Attributes<UserProps>(attrs);
    }
}