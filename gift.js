// Código JavaScript para insertar un reproductor de Spotify con la canción "(Back to December)" de Taylor Swift
const reproductorDiv = document.getElementById("reproductor");

// Código del widget de Spotify para la canción "(Back to December)" de Taylor Swift
const spotifyEmbedCode = `
<iframe src="https://open.spotify.com/embed/track/79uDOz0zuuWS7HWxzMmTa2?" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
`;

// Insertar el reproductor en el div con id "reproductor"
reproductorDiv.innerHTML = spotifyEmbedCode;
