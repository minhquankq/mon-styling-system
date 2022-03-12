import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./index";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  type: "text",
  placeholder: "Input placeholder",
};

export const InvalidInput = Template.bind({});
InvalidInput.args = {
  type: "text",
  placeholder: "This field is required",
  invalid: true,
};
