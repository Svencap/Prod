import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData.test', () => {
    test('success fetching', async () => {
        const profileData = {
            first: 'Maxim',
            lastname: 'Cher',
            age: 21,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'svencap',
            avatar: 'https://avatars0.githubusercontent.com/u/1500684?s=460&v=4',
        };
        const asyncThunk = new TestAsyncThunk(fetchProfileData);
        asyncThunk.api.get.mockReturnValue(
            Promise.resolve({ data: profileData }),
        );
        const result = await asyncThunk.callThunk();
        expect(asyncThunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
});
