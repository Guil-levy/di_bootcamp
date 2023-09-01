// 1/

class Video {
    constructor(title, uploader,time){
        this.title =title;
        this.uploader =uploader;
        this.time =time;
    }
    watch() {
        return `${this.uploader} watched all ${this.time} seconds of "${this.title}"!`;
      }
}

const myVideo = new Video('Django Unchained', 'Guil12', 200)
const video1 = myVideo.watch()
console.log(video1);

const myVideo2 = new Video('Pulp Fiction', 'Guil12', 180)
const video2 = myVideo2.watch()
console.log(video2);

const videoData = [
    { title: "Video 1", uploader: "User1", time: 120 },
    { title: "Video 2", uploader: "User2", time: 180 },
    { title: "Video 3", uploader: "User3", time: 240 },
    { title: "Video 4", uploader: "User4", time: 300 },
    { title: "Video 5", uploader: "User5", time: 150 },
];
const videoArray = [];

for (const data of videoData) {
    const video = new Video(data.title, data.uploader, data.time);
    videoArray.push(video);
}

for (const video of videoArray) {
    console.log(video.watch());
}