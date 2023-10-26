package java_interface;

interface Playable {
    void play();
    void pause();
    void stop();
}

class MP3Player implements Playable {
    @Override
    public void play() {
        System.out.println("음악 재생");
    }

    @Override
    public void pause() {
        System.out.println("음악 일시 중지");
    }

    @Override
    public void stop() {
        System.out.println("음악 정지");
    }
}

class DVDPlayer implements Playable {
    @Override
    public void play() {
        System.out.println("동영상 재생");
    }

    @Override
    public void pause() {
        System.out.println("동영상 일시 중지");
    }

    @Override
    public void stop() {
        System.out.println("동영상 정지");
    }
}

public class Practice1 {
    public static void main(String[] args) {
        Playable mp3 = new MP3Player();
        Playable dvd = new DVDPlayer();

        System.out.println("MP3 플레이어:");
        mp3.play();
        mp3.pause();
        mp3.stop();

        System.out.println("\nDVD 플레이어:");
        dvd.play();
        dvd.pause();
        dvd.stop();
    }
}
