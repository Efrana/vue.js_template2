<template>
  <div class="post-comments">
    <header>
      <h3 class="h6">
        Post Comments
        <span class="no-of-comments">(3)</span>
      </h3>
    </header>
    <div class="comment">
      <div class="comment-header d-flex justify-content-between">
        <div class="user d-flex align-items-center">
          <div class="image">
            <img
              src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/user.svg"
              alt="..."
              class="img-fluid rounded-circle"
            />
          </div>
          <div class="title">
            <strong>Jabi Hernandiz</strong>
            <span class="date">May 2016</span>
          </div>
        </div>
      </div>
      <div class="comment-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    </div>
    <div class="comment">
      <div class="comment-header d-flex justify-content-between">
        <div class="user d-flex align-items-center">
          <div class="image">
            <img
              src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/user.svg"
              alt="..."
              class="img-fluid rounded-circle"
            />
          </div>
          <div class="title">
            <strong>Nikolas</strong>
            <span class="date">May 2016</span>
          </div>
        </div>
      </div>
      <div class="comment-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    </div>
    <div class="comment">
      <div class="comment-header d-flex justify-content-between">
        <div class="user d-flex align-items-center">
          <div class="image">
            <img
              src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/user.svg"
              alt="..."
              class="img-fluid rounded-circle"
            />
          </div>
          <div class="title">
            <strong>John Doe</strong>
            <span class="date">May 2016</span>
          </div>
        </div>
      </div>
      <div class="comment-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PostComment'
}
</script>
