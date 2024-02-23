import axios from "axios";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { loginByUsername } from "./loginByUsername";

describe("loginByUsername.test", () => {
    test("success login", async () => {
        const userValue = { username: "123", id: "1" };
        const asyncThunk = new TestAsyncThunk(loginByUsername);
        asyncThunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await asyncThunk.callThunk({ username: '123', password: '123' });

        expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3);
        expect(asyncThunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
    test("error login", async () => {
        const asyncThunk = new TestAsyncThunk(loginByUsername);
        asyncThunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await asyncThunk.callThunk({ username: '123', password: '123' });

        expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(asyncThunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
