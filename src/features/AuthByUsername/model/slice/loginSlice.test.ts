import { DeepPartial } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice.test", () => {
    test("setUsername success", () => {
        const state: DeepPartial<LoginSchema> = { username: "1233" };
        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername("123")),
        ).toEqual({ username: "123" });
    });
    test("setPassword success", () => {
        const state: DeepPartial<LoginSchema> = { password: "1233" };
        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword("123123")),
        ).toEqual({ password: "123123" });
    });
});
