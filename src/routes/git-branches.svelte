<svelte:head>
  <title>Tech Notes | Git Branches</title>
</svelte:head>
<h2>Git Branches</h2>

<h3>
  How to use branches while working on your project. This includes creating
  branches, switching branches, and merging branches.
</h3>
<p>
  Branches allow you to work on, or add special features, without interfering
  with your current project. When you start a repository in Git, it is
  automatically assigned to the role of 'Master' branch.
</p>
<p>
  I often make another branch to work on the layout while I am building my site.
  I call it layout. Once I am pleased with my work I merge it with the 'Master'
  branch.
</p>
<p>To start in your terminal type in:</p>

<div class="code-block">
  <h4>git branch</h4>
</div>

<p>
  This will give you a list of current branches in your project. The branch you
  are currently working on will be highlighted. To make a new branch:
</p>

<div class="code-block">
  <h4>git branch name-of-new-branch</h4>
</div>

<p>Then to switch over to your new branch type in:</p>

<div class="code-block">
  <h4>git checkout name-of-new-branch</h4>
</div>

<p>
  Now you are working on your new branch. Once you have made some changes you go
  through the same process of:
</p>

<div class="code-block">
  <h4>git add filename</h4>
  <h4>git commit filename -m "message about changes"</h4>
  <h4>git push</h4>
</div>

<p>You can also combine the commands:</p>

<div class="code-block">
  <h4>git add filename && git commit -m "message about changes" && git push</h4>
</div>

<p>
  If it is your first time pushing this branch to your remote repository then
  use:
</p>

<div class="code-block">
  <h4>git push origin name-of-new-branch</h4>
</div>

<p>
  Once you are finished pushing your changes to GitHub, then you can switch back
  to Master by typing in:
</p>

<div class="code-block">
  <h4>git checkout master</h4>
</div>

<p>
  Once you have switched to the master branch, you can then merge your other
  branch to master by typing in:
</p>

<div class="code-block">
  <h4>git merge name-of-new-branch</h4>
</div>

<p>
  Now you have merged your changes from your other branch in with the master.
</p>
<a href="#top"><p class="symbol">back to top</p></a>
