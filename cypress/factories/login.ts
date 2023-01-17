import { faker } from '@faker-js/faker';
import {mergePartially, NestedPartial} from 'merge-partially';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    blah: string;
    hhh: string;
}

export interface Address {
    userName: string;
    preferences: {
        lastUpdated?: Date;
        favoriteColor?: string;
        backupContact?: string;
        mailingAddress: {
            street: string;
            city: string;
            state: string;
            zipCode: string;
        }
    }
}

export function makeFakeUser(overrides?: NestedPartial<User>): User {
    return mergePartially.deep(
        {
            id: faker.datatype.number({ max: 10 }),
            age: faker.datatype.number({ max: 50 }),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            blah: 'a random value',
            hhh: 'asdasdasd'
        },
        overrides
    );
}

export function makeFakeAddress(overrides?: NestedPartial<Address>): Address {
    return mergePartially.deep(
        {

            userName: 'Bob Smith',
            preferences: {
                mailingAddress: {
                    street: faker.address.streetAddress(),
                    city: faker.address.city(),
                    state: faker.address.stateAbbr(),
                    zipCode: faker.address.zipCode(),
                },
            }
        },
        overrides
    );
}
