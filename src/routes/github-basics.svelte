<h2>GitHub Basics</h2>

<h3>
  Github basics, including how to create an account and how start a repository.
</h3>
<p>
  GitHub is a server that allows you to store your changes in remote
  repositories. This is a wonderful tool, as you have access to your work from
  any computer that is hooked to the internet AND you can collaborate with
  others very easily while working on code.
</p>
<p>GitHub is free to use, simply go to:</p>
<a class="text-link" href="https://github.com" target="_blank">github.com</a>
<p>
  and sign up for a free account. Once you are signed up follow these steps:
</p>
<ol>
  <li>Navigate to your account page</li>
  <li>Click on the Repositories tab.</li>
  <li>Click on 'NEW' button to creat a repository.</li>
  <li>Do Not initialize with a README file for this repository.</li>
</ol>

<p>
  Now that you have created your remote repository, open your command line,
  navigate to your projects directory, and type in the following commands:
</p>

<p class="code-box">git remote add origin url-of-repository</p>

<p>
  To find the URL of your repository, simply navigate to that repo's page on
  GitHub. Then you can copy the address by clicking on the 'clone' button. You
  can also copy the address from the adress bar on your web browser while on the
  repo's page.
</p>
<p>
  Now your local repository is connected to your remote repository. Next we will
  push our changes to GitHub.
</p>
<a href="#top"><p class="symbol">back to top</p></a>

<h3>How to push your changes to an online repository, namely Github.</h3>
<p>
  Next we are going to push our changes to GitHub, saving them in our remote
  repository that we just created. The first time you push a commit you will
  type in this command:
</p>

<p class="code-box">git push origin master</p>

<p>
  The above is for the first time push on any new repository. Once you have
  pushed commits to your remote repo for the first time the rest of your pushes
  are done using:
</p>
<p class="code-box">git push</p>
<p>
  Now your files, and all of the changes made are saved to Github where you can
  work on them, share them and allow collaboration, just to name a few things.
  Once you have this set up, it is very quick and simple to keep everything up
  to date and in synch. To Summarize:
</p>

<div class="code-box">
  <p>git add filename</p>
  <p>git commit filename -m "message about changes"</p>
  <p>git push</p>
</div>
<p>
  That's all for basic use of Git and GitHub, there is a lot more you can do
  with these amazing tools. Don't be intimidated, you will get the hang of it.
  The following sections are just extra tidbits I am still learning, you might
  find them useful.
</p>
<a href="#top"><p class="symbol">back to top</p></a>
