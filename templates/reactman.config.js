function commaSplit(i) {
  return i.replace(' ', '').split(',');
}

module.exports = {
  templatesFolder: './templates/',
  outputFolder: './app/',
  scripts: {
    displayobject: {
      files: {
        'displayobject.js': 'displayobjects/{%=o.exports%}/{%=o.exports%}.js',
      },
      script: [
        {
          name: 'exports',
          message: 'Exports',
          required: true,
          default: 'Exports',
          type: 'input',
        },
        {
          name: 'extendpixi',
          message: 'Extend Pixi.js?',
          default: true,
          required: true,
          type: 'confirm',
        },
        {
          name: 'extends',
          message: 'Extends',
          default: 'Extends',
          required: true,
          type: 'input',
        },
        {
          name: 'description',
          message: 'Description',
          default: 'A display object',
          required: true,
          type: 'input',
        },
        {
          name: 'functions',
          message: 'Comma seperated list of functions',
          default: '',
          required: false,
          type: 'input',
          filter: commaSplit,
        },
      ],
    },
    store: {
      files: {
        'store.js': 'stores/{%=o.exports%}.js',
      },
      script: [
        {
          name: 'exports',
          message: 'Exports',
          required: true,
          default: 'Exports',
          type: 'input',
        },
      ],
    },
  },
};
