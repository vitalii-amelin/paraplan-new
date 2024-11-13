import plugin  from 'tailwindcss/plugin';

function transformStyles(styles) {
    const transformedStyles = {};
  
    Object.keys(styles).forEach((key) => {
      const className = `.${key}`;
      transformedStyles[className] = {
        '@apply': styles[key],
      };
    });
  
    return transformedStyles;
  }

module.exports = plugin(function({ addComponents }) {
  // Преобразуем объект в формат, пригодный для Tailwind
  const newComponents = transformStyles(textStyles);

  // Добавляем новые компоненты в Tailwind
  addComponents(newComponents);
});

