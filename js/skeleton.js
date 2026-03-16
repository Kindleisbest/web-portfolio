// Fully Authored by ChatGPT-5

// Skeleton Screen Implementation

// Inject Skeleton CSS
const skeletonCSS = 
`
#loader{
  position:fixed;
  inset:0;
  background: rgb(0,153,255);
  padding:20px;
  z-index:9999;
}

#content{
  opacity:0;
  transition:opacity .4s ease;
}

.skeleton{

  background: linear-gradient(
    90deg,
    rgb(0,183,255) 25%,
    rgb(51,201,255) 50%,
    rgb(0,183,255) 75%
      );
  background-size:200% 100%;
  animation: shimmer 1.2s infinite;
  border-radius:6px;
  margin-bottom:12px;
}

.header{height:40px;width:60%;}
.text{height:20px;width:90%;}
.image{height:200px;width:100%;}

@keyframes shimmer{
  0%{background-position:200% 0;}
  100%{background-position:-200% 0;}
}
`;

const styleTag = document.createElement("style");
styleTag.id = "skeleton-style";
styleTag.textContent = skeletonCSS;
document.head.appendChild(styleTag);


// When page finishes loading
window.addEventListener("load", () => {

  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  if(loader){
    loader.style.opacity = "0";
    loader.style.transition = "opacity .3s ease";
  }

  if(content){
    content.style.opacity = "1";
  }

  setTimeout(() => {

    loader?.remove();
    styleTag?.remove();

  },300);

});