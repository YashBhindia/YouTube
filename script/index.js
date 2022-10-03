// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=kgf2&key=[] HTTP/1.1YOUR_API_KEY

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json


// <!-- GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf&key=[YOUR_API_KEY]
    // const api = "AIzaSyBlx4_3hZ9nJx7G8hIW5G8ogVPBTZiJEJc";


    // const myfunction= async () => {
    //     try{
    //       const q = document.getElementById("query").value;
    //       const res = await fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=&key=AIzaSyBlx4_3hZ9nJx7G8hIW5G8ogVPBTZiJEJc`);
    //       const data = await res.json();
    //       append(data.items);
    //       console.log(data.items)
    //     }catch (err){
    //         console.log(err);
    //     }
    //  };

    const url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=trending&key=AIzaSyBlx4_3hZ9nJx7G8hIW5G8ogVPBTZiJEJc";
    fetch(url)
    .then(function(res){
      return res .json();
    })
    .then(function(res){
      append(res.items);
    })
    .catch(function(err){
      console.log(err)
    })
     
     const append = (videos) => {
       let show_videos = document.getElementById("show_videos");
       show_videos.innerHTML=null;
       videos.forEach (({id:{videoId},snippet:{title}}) => {
         let div = document.createElement("div")
         let iframe = document.createElement("iframe");
         iframe.src=`https://www.youtube.com/embed/${videoId}`;
         iframe.width="100%";
         iframe.height="100%";
         iframe.allow="fullscreen";
         let name = document.createElement("h5")
         name.innerText=title;
         div.append(iframe,name)
         let data = {
           title,
           videoId
         }
         div.onclick = () =>{
           showVideo(data);
         };
         show_videos.append(div);
       });
     }
     
     const showVideo = (x) => {
       window.location.href="video.html";
       localStorage.setItem("video",JSON.stringify(x));
     }
     