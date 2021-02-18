const initialState = {
  defaultLanguage: 'EN',
  selectedLanguage: 'DE',
};

function reducer(state, action) {
  switch (action.type) {
    case 'update_lang':
      return { lang: 'ev' };
    default:
      throw new Error();
  }
}
