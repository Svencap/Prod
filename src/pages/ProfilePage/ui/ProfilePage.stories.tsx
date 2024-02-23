import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ProfilePage from "./ProfilePage";

export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Light.decorators = [StoreDecorator({})];
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
