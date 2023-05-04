module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx', './src/layouts/**/*.tsx'],
  corePlugins: {
    // 禁止tailwindcss的默认属性，会影响antd影响
    preflight: false,
  },
};
