// Action creator
export const selectSong = (song) => {
    // Return an action
    return {
        type: 'SONG_DELETED',
        payload: song
    };

};