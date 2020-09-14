export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   'BQBKGS1wQWxPgKE_H3JDkrzPH7YMwXgMy2HaynY2r00dsAapQHzDbdq4G8pxhbCGrDvb81Ml-k4KAWuLHzZsaRjI8J3WwMAd8BI9w0Tc22pKMp9lBsZPMk6UhvBnjk1-xDuQKA6ZFMYq4YfIlnzLcNur_woegVr7qodZxh_AlMqa613LIC59'
};

const reducer = (state, action) => {

  console.log(action)

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly
      };

    default:
      return state;
  }

}

export default reducer;
