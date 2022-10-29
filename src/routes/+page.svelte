<svelte:head>
  <title>Tech Notes | Home</title>
  <link rel="noreferrer" />
</svelte:head>

<h2>Welcome...</h2>

<p>
  This site is for beginners, to get started <a href="/git-started"
    >Click here</a
  >.
</p>

<h3>More Resources</h3>

<p>
  There are several sources of good information on Git and GitHub, but the best
  way to learn is by doing. When I started trying to learn about version control
  it was hard for me to wrap my head around it. So the first source I am going
  to share is a series of YouTube videos by The Coding Train that helped me
  understand it a little better, while keeping it fun.
</p>
<a
  class="text-link"
  href="https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV"
  target="_blank"
  rel="noreferrer"
  >Git and GitHub for Poets
</a>

<p>GitHub is also a source of good information, including this:</p>
<a
  class="text-link"
  href="https://github.github.com/training-kit/"
  target="_blank"
  rel="noreferrer"
  >Git & GitHub CheatSheet
</a>

<h3>Additional Commands:</h3>

<p>To see hidden files, including your git repo type in:</p>
<div class="code-block">
  <h4>dir /ah</h4>
</div>

<p>Shows a log of commits for the current repo:</p>

<div class="code-block">
  <h4>git log</h4>
  <small>To exit the git log you can type either "q" or "z"</small>
</div>

<p>Combine commands to be more efficient, two examples below:</p>

<div class="code-block">
  <h4>add -A && git commit -m "message about commit"</h4>
</div>

<p>Example 2</p>
<div class="code-block">
  <h4>git init && git add -A && git commit -m "initial commit"</h4>
</div>

<p>
  Definitions taken from GitHub:
  <li>git: an open source, distributed version-control system.</li>
  <li>GitHub: a platform for hosting and collaborating on Git repositories.</li>
</p>
