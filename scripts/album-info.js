{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);

  var artist = $('.artist')

  artist.text(album.artist);

  $('#release-info').text(album.releaseInfo);
}
