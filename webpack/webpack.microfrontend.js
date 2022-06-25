const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJson = require("../package.json");
const appVersion = packageJson.version;

module.exports = ({ serve }) => {
  return {
    optimization: {
      moduleIds: "named",
      chunkIds: "named",
      runtimeChunk: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "OrderApp",
        filename: "remoteEntry.js",
        remotes: {
          ShellApp: "ShellApp@http://localhost:3060/remoteEntry.js",
        },
        exposes: {
          "./OrderDetail": "./src/OrderDetail.tsx",
        },
        shared: {
          ...Object.fromEntries(
            Object.entries(packageJson.dependencies).map(([module]) => [
              module,
              { singleton: true, shareScope: "default" },
            ])
          ),
          Header: {
            singleton: true,
            import: "src/Header.tsx",
            requiredVersion: appVersion,
          },
        },
      }),
    ],
    output: {
      publicPath: "auto",
    },
  };
};
