import { Stack, IStackProps } from "../index";
import { props } from "../props";
import { Squares } from "./Squares";

const story = {
  title: "layout/Stack",
  components: [Stack],
  argTypes: props,
};

export const Default = (args: IStackProps) => (
  <Stack {...args}>
    {Array.isArray(args.children)
      ? args.children.map((item, index) => <Squares key={index} item={item} />)
      : args.children}
  </Stack>
);

Default.args = {
  children: [...Array(6 + 1).keys()].slice(1),
  gap: "10px",
  wrap: "wrap",
  direction: "row",
  justifyContent: "unset",
  alignItems: "initial",
  alignContent: "unset",
  height: "100%",
  width: "100%",
  margin: "s0",
  padding: "s0 s300",
};

export default story;
