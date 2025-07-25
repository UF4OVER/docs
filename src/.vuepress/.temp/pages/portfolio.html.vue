<template><div><div class="page-portfolio">
  <div class="art-text">
<pre><code>你好，我是四氟化铀（UF4）
</code></pre>
  </div>
</div>
</div></template>



<style>.page-portfolio {
}


.art-text {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  background-size: 300% 300%;
  animation: gradientShift 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Arial Black', 'Arial Bold', sans-serif;
  letter-spacing: 2px;
  line-height: 1.2;
}


@keyframes gradientShift {

  0% {

    background-position: 0% 50%;

  }

  50% {

    background-position: 100% 50%;

  }

  100% {

    background-position: 0% 50%;

  }

}


@media (max-width: 768px) {

  .art-text {

    font-size: 2rem;

  }

}


@media (max-width: 480px) {

  .art-text {

    font-size: 1.5rem;

  }

}

</style>