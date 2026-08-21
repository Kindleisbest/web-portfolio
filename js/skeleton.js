// Skeleton Screen Implementation

const skeletonCSS = `
html {
  overflow: hidden;
  overscroll-behavior: none;
  scrollbar-gutter: stable;
  touch-action: none;
}

body {
  overflow: hidden;
  overscroll-behavior: none;
  touch-action: none;
}

#loader {
  position: fixed;
  top: 105px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  box-sizing: border-box;
  overflow: hidden;
  background: rgb(0, 153, 255);
  padding: 45px 20px 20px;
  z-index: 9999;
  transition: opacity .3s ease;
}

#loader .skeleton {
  flex: 0 0 auto;
  background: linear-gradient(
    90deg,
    rgb(0, 183, 255) 25%,
    rgb(51, 201, 255) 50%,
    rgb(0, 183, 255) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.2s infinite;
  border-radius: 6px;
}

#loader .image {
  width: min(360px, calc(100vw - 48px));
  aspect-ratio: 36 / 46;
  border-radius: 70px;
}

#loader .header {
  width: min(230px, 60%);
  height: 50px;
  border-radius: 100px;
}

#loader .text {
  width: min(620px, 80%);
  height: 20px;
}

#loader .image + .header + .text {
  width: 130px;
}

#loader .text + .text {
  width: min(720px, calc(100% - 16px));
  height: 180px;
  border-radius: 10px;
}

#loader .text + .header {
  margin-top: 24px;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media screen and (max-width: 999px) {
  #loader {
    top: 78px;
    gap: 10px;
    padding: 24px 8px 16px;
  }

  #loader .image {
    width: min(260px, calc(100vw - 32px));
    aspect-ratio: 260 / 327;
  }

  #loader .header {
    width: min(220px, 65%);
    height: 41px;
  }

  #loader .text {
    width: min(340px, 82%);
  }

  #loader .text + .text {
    width: calc(100% - 16px);
    height: 230px;
  }
}

@media (prefers-reduced-motion: reduce) {
  #loader,
  #loader .skeleton {
    animation: none;
    transition: none;
  }
}
`;

const styleTag = document.createElement("style");
styleTag.id = "skeleton-style";
styleTag.textContent = skeletonCSS;
document.head.appendChild(styleTag);

let pageLoaded = document.readyState === "complete";
let contentLoaded = false;
let skeletonRemoved = false;

const removeSkeleton = () => {
  if (skeletonRemoved) {
    return;
  }

  skeletonRemoved = true;
  const loader = document.getElementById("loader");

  if (!loader) {
    styleTag.remove();
    return;
  }

  loader.style.opacity = "0";
  loader.style.pointerEvents = "none";

  window.setTimeout(() => {
    loader.remove();
    styleTag.remove();
  }, 300);
};

window.finishSkeletonLoading = () => {
  contentLoaded = true;

  if (pageLoaded) {
    removeSkeleton();
  }
};

const finishPageLoading = () => {
  pageLoaded = true;

  if (!document.getElementById("submissions") || contentLoaded) {
    removeSkeleton();
  }
};

if (pageLoaded) {
  finishPageLoading();
} else {
  window.addEventListener("load", finishPageLoading, { once: true });
}
