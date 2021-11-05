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
<p class="code-box">git branch</p>
<p>
  This will give you a list of current branches in your project. The branch you
  are currently working on will be highlighted. To make a new branch:
</p>
<p class="code-box">git branch name-of-new-branch</p>
<p>Then to switch over to your new branch type in:</p>
<p class="code-box">git checkout name-of-new-branch</p>
<p>
  Now you are working on your new branch. Once you have made some changes you go
  through the same process of:
</p>
<p class="code-box">git add filename</p>
<p class="code-box">git commit filename -m "message about changes"</p>
<p class="code-box">git push</p>
<p>
  If it is your first time pushing this branch to your remote repository then
  use:
</p>
<p class="code-box">git push origin name-of-new-branch</p>
<p>
  Once you are finished pushing your changes to GitHub, then you can switch back
  to Master by typing in:
</p>
<p class="code-box">git checkout master</p>
<p>
  Once you have switched to the master branch, you can then merge your other
  branch to master by typing in:
</p>
<p class="code-box">git merge name-of-new-branch</p>
<p>
  Now you have merged your changes from your other branch in with the master.
</p>
<p>
  This is just a little bit of basic information, things I have had to look up
  quite a bit until I got it down pat. There is a lot more to explore with Git
  and GitHub.
</p>
<a href="#top"><p class="symbol">back to top</p></a>
