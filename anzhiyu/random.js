var posts=["post/MyAI/","post/EP07/","post/Ventoy也能豪堪？教你自定义Ventoy主题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };