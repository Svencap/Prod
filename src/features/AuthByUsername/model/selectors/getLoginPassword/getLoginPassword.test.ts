import { StateSchema } from "app/providers/StoreProvider";

import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword.test", () => {
    test("should return correct value", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'password',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('password');
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
