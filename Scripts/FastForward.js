// Change this value to increase or decrease the seconds the video will fast forward at each press of the hotkey.
// Default value = 10.
timeUnit = 10;

video = document.getElementsByClassName('video-stream')[0];
video.currentTime = video.currentTime + timeUnit;
