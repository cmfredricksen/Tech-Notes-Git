<h2>Get Started with GIT</h2>

<h3>Initializing Git to start tracking your files.</h3>

<p>
  Git is version control software. It keeps track of every change you make to
  your files. This allows you the freedom to go back to an earlier rendition of
  your code if things go awry. Another handy feature is the ability to work on
  branches, only merging to your main project once everything is working
  properly.
</p>
<p>
  In order for Git to track your changes you need to start a repository for your
  project directory. After you create your directory, then use the 'git init'
  command in your terminal. (Instructions below) Git init is short for git
  initialize, and this command begins a repository for your project directory.
</p>
<p>
  Once you have initialized your git repository, then any files or other assets
  you add to the directory will be added to the list of items to be saved when
  you commit. You can prevent certain things from being added if you want.
</p>
<p>
  To start you need to open your command prompt, powershell, or terminal. Once
  you have opened your prompt, navigate to the directory (folder) you want to
  track using git. Next type in the following command and hit enter:
</p>

<p class="code-box">git init</p>

<p>
  Now your directory is being tracked by git, and this repository that you just
  created will record all of the changes you make to your code.
</p>

<p>
  I am using Visual Studio Code, which has a built in terminal. If you have your
  folder open and open a new terminal in VSC it will already be in the current
  directory. There are also tools you can use for git in VSC that do not require
  using the terminal.
</p>

<p>
  Whether you use the terminal, or the tools in your editor to work with Git,
  the steps are the same and proceed in the same order. I suggest learning how
  to use the terminal first, but you can do it either way.
</p>

<p>
  Now you have initialized a git repository to keep track of your files, what's
  next?
</p>
<a href="#top"><p class="symbol">back to top</p></a>

<section class="main-section" id="staging">
  <h3>Staging your changes so you can save, or commit them.</h3>
  <p>
    You have done some work on your project and now you want to save it, along
    with each change you've made along the way. In Git, a save is called a
    commit, and before you make a 'commit' you have to 'stage' your changes.
  </p>
  <p>
    Here is how to do it, return to your command prompt and type in the
    following:
  </p>

  <p class="code-box">git status</p>

  <p>
    This will get you a list of files and other assets from your directory that
    need to be staged in red, and those already staged in green.
  </p>
  <p class="code-box">git add filename</p>

  <p>'filename' means the name of your file, for example index.html.</p>

  <p>
    If you have changes across several files within your directory you can
    simply type in:
  </p>

  <p class="code-box">git add .</p>

  <p>
    This will add all of the files in the current directory that have changes to
    the staging area. Now that the files are staged, they are ready to
    commit.You can check you git status agin and you will see everything that is
    staged is now colored green, which means it is ready to commit.
  </p>
  <a href="#top"><p class="symbol">back to top</p></a>
</section>

<section class="main-section" id="committing">
  <h3>Saving your changes, which is called committing in Git.</h3>
  <p>
    Now your files are staged and ready to save. To do this you use the 'git
    commit' command. When you use 'git commit' you are also required to add a
    message about the changes. You do this by appending the message tag(-m)
    followed by the message to your commit command:
  </p>

  <p class="code-box">-m "message about changes"</p>

  <p>The full command is written below:</p>
  <p class="code-box">git commit filename -m "message about changes"</p>

  <p>
    Your message is about the changes you have made to your code since the last
    commit. Normally once your files are made, you do an initial commit and the
    message is just "initial commit" This is before you add any code, or maybe
    once you add the very basic bits.
  </p>
  <p>
    Normally the advice is too commit often. It makes it easier to find code
    that is causing problems, or go back before unwanted changes were made. Each
    commit is a record of every change you made to every file included in that
    commit. Just something to keep in mind.
  </p>

  <p>
    Just like staging, you can also use the ' . ' to include all files that are
    staged to commit. Once you commit, your latest version is saved to your
    repository. Your previous versions are also saved, so you can go back to
    them if needed or desired. But what if you want to share them, maybe even
    collaborate with others? That's what GitHub is for.
  </p>
  <a href="#top"><p class="symbol">back to top</p></a>
</section>
