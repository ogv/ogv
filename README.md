Initiate a video stream from your webcam:
    $ ffmpeg2theora /dev/video0 -f video4linux2 -x 320 -y 240 --inputfps 10 --videobitrate 30 --audiobitrate 50 --channels 1 -o - | oggfwd lightcorp.net 8000 igrokvideo /<your mane here>.ogv -n "webcam" -d "Webcam Stream"</pre>

Initiate a video stream from an AVI
    $ ffmpeg2theora Downloads/torrents/Fringe.S02E18.HDTV.XviD-LOL.avi -x 320 -y 240  --videobitrate 30 --audiobitrate 50 --channels 1 -o - | oggfwd lightcorp.net 8000 igrokvideo /fringe.ogv -n "Fringe Season 2 Episode 18" -d "The one where the physicist develops a device to travel through time to save his wife"

Prepare a mp4 for streaming as ogg:
    $ ffmpeg2theora Downloads/torrents/BergensBanen720p_mLogo.mp4 -x 320 -y 176 --videobitrate 30 --audiobitrate 50 --channels 1 -o berg320.ogv -s 4500 -e 4620 --optimize
        
Initiate an ogg stream of an ogg file:
    $ cat berg320.ogv | oggfwd lightcorp.net 8000 igrokvideo webcam.ogv;

You may verify the server's acceptance of your stream with the login guest and password igrokvideo at:
http://lightcorp.net:8000/


Please join the screen session:
    $ ssh guest@lightcorp.net
    # <igrokvideo is the password>
    $ screen -x garage

TODO:
- add multiple streams and a js selector between the two

I really wish I could figure out how to pipe output from recordmydesktop
    <video autobuffer="autobuffer" src="http://lightcorp.net:8000/screen.ogg" controls="controls"></video>

Here's what a simple video embed looks like for a file in the media directory
    <video id="webcam_stream" preload autoplay loop src="media/berg320.ogv"></video>
