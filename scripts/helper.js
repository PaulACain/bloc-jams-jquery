class Helper {
playPauseAndUpdate(song) {
player.playPause(song);
const totalTime = player.soundObject.getDuration();
$('#time-control .total-time').text(totalTime);
}
}

const helper = new Helper(); 
