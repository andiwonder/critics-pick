// Sample nodejs code for playlistItems.list

function playlistItemsListByPlaylistId(auth, requestData) {
  var service = google.youtube('v3');
  var parameters = removeEmptyParameters(requestData['params']);
  parameters['auth'] = auth;
  service.playlistItems.list(parameters, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    console.log(response);
  });
}

//See full code sample for authorize() function code.
authorize(
  JSON.parse(content),
  {
    params: {
      maxResults: '50',
      part: 'snippet,contentDetails',
      playlistId: 'ELDd1VOx7f0nI'
    }
  },
  playlistItemsListByPlaylistId
);

// relevant fields
//  "videoId": "6TmA2XSlQfk"
//  "thumbnails": { standard": { "url": "https://i.ytimg.com/vi/6TmA2XSlQfk/sddefault.jpg",
// "snippet": { "title": "'Please Vote for Me' | Critics' Picks | The New York Times",

// https://api.themoviedb.org/3/search/movie?api_key=ad2a48cc85b1e84b1127a1146288366b
// &language=en-US
// &query=the%20player
// &page=1
// &include_adult=false

// https://api.themoviedb.org/3/search/movie?
// api_key=ad2a48cc85b1e84b1127a1146288366b
// &language=en-US
// &query=the%20general
// &page=1
// &include_adult=false
// &append_to_response=videos,images,keywords

// "results": [
//   {
//     "vote_count": 319,
//     "id": 961,
//     "video": false,
//     "vote_average": 8,
//     "title": "The General",
//     "popularity": 7.88341,
//     "poster_path": "/hjK9y09NjHOqAaz6PfOmzxU1qCT.jpg",
//     "original_language": "en",
//     "original_title": "The General",
//     "genre_ids": [
//       28,
//       12,
//       35,
//       18
//     ],
//     "backdrop_path": "/4DK3HeNiKbwpF6zaSVsp4dvJSJV.jpg",
//     "adult": false,
//     "overview": "During America’s Civil War Union spies steal engineer Johnnie Gray's beloved
// locomotive The General - his lady love, Annabelle Lee, aboard an attached boxcar -
// and he single-handedly must do all in his power to both get The General back and to
// rescue Annabelle. Released throughout most of the world in 1927, this Silent
// comedy-action film flopped when originally released, but now is regarded as one of
// the great American motion pictures. The story is based on actual historic events.",
//     "release_date": "1926-12-31"
