import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}
export const StoreProvider = (props: StoreProviderProps) => {
    const navigate = useNavigate();
    const { children, initialState, asyncReducers } = props;
    const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate,
    );
    return <Provider store={store}>{children}</Provider>;
};
