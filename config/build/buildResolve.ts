import webpack from "webpack";
const buildResolve = (): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
};

export default buildResolve;
