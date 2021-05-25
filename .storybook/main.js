/**
 * @author GuangHui
 * @description storybook 主配置文件（配置插件，入口）
 */

module.exports = {
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    // @storybook/addon-links用于在不同故事中跳转
    '@storybook/addon-links',
    // @storybook/addon-essentials是一个聚合插件，包含Docs、Controls、Actions、Viewport、Backgrounds、Toolbars & globals插件
    // @storybook/addon-essentials包含了action、controls面板
    // 如果不显示，可能是面板被隐藏了
    // 尝试在启动后，使用按键A、D来切换显示隐藏
    '@storybook/addon-essentials'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
      // include: path.resolve(__dirname, '../')
    })

    // Return the altered config
    return config
  }
}
