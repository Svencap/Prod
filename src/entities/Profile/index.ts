import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { Profile, ProfileSchema } from './model/types/profile';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from './model/slice/profileSlice';

export {
    Profile,
    ProfileSchema,
    fetchProfileData,
    profileActions,
    profileReducer,
};

export { getProfileData, getProfileError, getProfileIsLoading };

export { ProfileCard };
