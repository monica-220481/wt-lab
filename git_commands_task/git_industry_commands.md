# Industry-Level Git & GitHub Commands Practice

## 1. Git Configuration Commands

### `git config --global user.name`
- **Syntax:** `git config --global user.name "[name]"`
- **Purpose:** Sets the standard username attached to your commits globally.
- **Example:** `git config --global user.name "Monica Namburi"`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI> git config --global user.name "Monica Namburi"
```

### `git config --global user.email`
- **Syntax:** `git config --global user.email "[email address]"`
- **Purpose:** Sets the standard email attached to your commits globally.
- **Example:** `git config --global user.email "monica@example.com"`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI> git config --global user.email "monica@example.com"
```

### `git config --list`
- **Syntax:** `git config --list`
- **Purpose:** Lists all the Git configuration settings currently applied.
- **Example:** `git config --list`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI> git config --list
user.name=Monica Namburi
user.email=monica@example.com
core.autocrlf=true
```

### `git config --unset`
- **Syntax:** `git config --unset [key]`
- **Purpose:** Removes a specific configuration setting.
- **Example:** `git config --global --unset user.name`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI> git config --global --unset user.name
```

---

## 2. Repository Setup Commands

### `git init`
- **Syntax:** `git init`
- **Purpose:** Initializes a new, empty Git repository in the current directory.
- **Example:** `git init`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\project> git init
Initialized empty Git repository in C:/Users/MONICA NAMBURI/Desktop/project/.git/
```

### `git clone`
- **Syntax:** `git clone [url]`
- **Purpose:** Downloads an existing repository and its entire commit history from a remote server.
- **Example:** `git clone https://github.com/user/repo.git`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop> git clone https://github.com/user/repo.git
Cloning into 'repo'...
done.
```

### `git clone --branch`
- **Syntax:** `git clone --branch [branch_name] [url]`
- **Purpose:** Clones a repository and immediately checks out a specific branch instead of the default branch.
- **Example:** `git clone --branch development https://github.com/user/repo.git`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI> git clone --branch dev https://github.com/user/repo.git
Cloning into 'repo'...
```

### `git clone --depth`
- **Syntax:** `git clone --depth [number] [url]`
- **Purpose:** Creates a "shallow clone" with a truncated history, downloading only the specified number of recent commits (saves time and space).
- **Example:** `git clone --depth 1 https://github.com/user/repo.git`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI> git clone --depth 1 https://github.com/user/repo.git
Cloning into 'repo'...
```

---

## 3. Repository Status & Inspection

### `git status`
- **Syntax:** `git status`
- **Purpose:** Displays the state of the working directory and the staging area (shows modified files and untracked files).
- **Example:** `git status`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git status
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

### `git log`
- **Syntax:** `git log`
- **Purpose:** Displays the complete commit history for the current branch.
- **Example:** `git log`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git log
commit 1a2b3c4d5e6f (HEAD -> main)
Author: Monica Namburi <monica@example.com>
Date:   Fri Apr 10 12:00:00 2026

    Initial commit
```

### `git log --oneline`
- **Syntax:** `git log --oneline`
- **Purpose:** Displays the commit history condensed into a single line per commit (hash + message).
- **Example:** `git log --oneline`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git log --oneline
1a2b3c4 Initial commit
```

### `git log --graph`
- **Syntax:** `git log --graph`
- **Purpose:** Draws a text-based graphical representation of the commit history and branch merges on the left side of the log output.
- **Example:** `git log --graph --oneline`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git log --graph --oneline
* 1a2b3c4 Initial commit
```

### `git show`
- **Syntax:** `git show [commit_hash]`
- **Purpose:** Shows the metadata and content changes (diff) of a specific commit.
- **Example:** `git show 1a2b3c4`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git show HEAD
commit 1a2b3c4...
diff --git a/file.txt b/file.txt
```

### `git diff`
- **Syntax:** `git diff`
- **Purpose:** Shows the differences between your working directory and the staging area (unstaged changes).
- **Example:** `git diff`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git diff
- old text
+ new text
```

### `git diff --staged`
- **Syntax:** `git diff --staged`
- **Purpose:** Shows the differences between the staging area and the last commit.
- **Example:** `git diff --staged`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git diff --staged
```

### `git blame`
- **Syntax:** `git blame [filename]`
- **Purpose:** Shows who modified each line of a file and in which commit.
- **Example:** `git blame index.html`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git blame index.html
1a2b3c4 (Monica 2026-04-10) <html>
```

### `git reflog`
- **Syntax:** `git reflog`
- **Purpose:** Records and displays the history of updates to the tip of branches (useful for recovering lost commits).
- **Example:** `git reflog`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git reflog
1a2b3c4 HEAD@{0}: commit: Initial commit
```

### `git shortlog`
- **Syntax:** `git shortlog`
- **Purpose:** Summarizes the `git log` output, grouping commits by author.
- **Example:** `git shortlog -s -n`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git shortlog
Monica Namburi (1):
      Initial commit
```

---

## 4. File Tracking Commands

### `git add`
- **Syntax:** `git add [filename]`
- **Purpose:** Adds a specific file to the staging area, preparing it for the next commit.
- **Example:** `git add index.php`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git add index.php
```

### `git add .`
- **Syntax:** `git add .`
- **Purpose:** Adds all modified and new files in the current directory to the staging area.
- **Example:** `git add .`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git add .
```

### `git add -p`
- **Syntax:** `git add -p`
- **Purpose:** Allows interactive staging, letting you choose specific blocks (hunks) of changes to stage instead of whole files.
- **Example:** `git add -p`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git add -p
Stage this hunk [y,n,q,a,d,/,e,?]? y
```

### `git restore`
- **Syntax:** `git restore [filename]`
- **Purpose:** Discards unstaged changes in the working directory, restoring the file to its state in the last commit.
- **Example:** `git restore style.css`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git restore style.css
```

### `git restore --staged`
- **Syntax:** `git restore --staged [filename]`
- **Purpose:** Unstages a file (removes it from the staging area) but keeps your modifications in the working directory.
- **Example:** `git restore --staged style.css`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git restore --staged style.css
```

### `git rm`
- **Syntax:** `git rm [filename]`
- **Purpose:** Removes a file from both the working directory and the staging area (tracks the deletion).
- **Example:** `git rm old_file.txt`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git rm old_file.txt
rm 'old_file.txt'
```

### `git mv`
- **Syntax:** `git mv [old_name] [new_name]`
- **Purpose:** Renames or moves a tracked file and automatically stages the change.
- **Example:** `git mv index.htm index.html`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git mv index.htm index.html
```

---

## 5. Commit Commands

### `git commit`
- **Syntax:** `git commit`
- **Purpose:** Records staged changes to the repository, opening a text editor for you to write a commit message.
- **Example:** `git commit`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git commit
[main 1a2b3c4] Update files
```

### `git commit -m`
- **Syntax:** `git commit -m "[message]"`
- **Purpose:** Commits staged changes inline without opening an editor.
- **Example:** `git commit -m "Fixed login button"`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git commit -m "Fixed login button"
[main 2b3c4d5] Fixed login button
 1 file changed, 1 insertion(+)
```

### `git commit --amend`
- **Syntax:** `git commit --amend`
- **Purpose:** Modifies the most recent commit. It combines current staged changes with the previous commit and allows editing the message.
- **Example:** `git commit --amend -m "Updated fix"`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git commit --amend -m "Updated fix"
```

### `git commit --no-edit`
- **Syntax:** `git commit --amend --no-edit`
- **Purpose:** Adds new staged changes to the previous commit without changing the original commit message.
- **Example:** `git commit --amend --no-edit`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git commit --amend --no-edit
```

---

## 6. Branch Management Commands

### `git branch`
- **Syntax:** `git branch`
- **Purpose:** Lists all local branches in the repository. The current branch is highlighted.
- **Example:** `git branch`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git branch
* main
  feature-auth
```

### `git branch -a`
- **Syntax:** `git branch -a`
- **Purpose:** Lists all local and remote-tracking branches.
- **Example:** `git branch -a`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git branch -a
* main
  remotes/origin/main
```

### `git branch -d`
- **Syntax:** `git branch -d [branch_name]`
- **Purpose:** Safely deletes a local branch (prevents deletion if unmerged changes exist).
- **Example:** `git branch -d old-feature`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git branch -d old-feature
Deleted branch old-feature.
```

### `git branch -D`
- **Syntax:** `git branch -D [branch_name]`
- **Purpose:** Forcibly deletes a branch regardless of its merge status.
- **Example:** `git branch -D broken-feature`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git branch -D broken-feature
```

### `git checkout`
- **Syntax:** `git checkout [branch_name]`
- **Purpose:** Switches the working directory to the specified branch.
- **Example:** `git checkout development`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git checkout development
Switched to branch 'development'
```

### `git checkout -b`
- **Syntax:** `git checkout -b [branch_name]`
- **Purpose:** Creates a new branch and immediately switches to it in one command.
- **Example:** `git checkout -b new-feature`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git checkout -b new-feature
Switched to a new branch 'new-feature'
```

### `git switch`
- **Syntax:** `git switch [branch_name]`
- **Purpose:** A newer, more dedicated command to switch branches (alternative to checkout).
- **Example:** `git switch main`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git switch main
Switched to branch 'main'
```

### `git switch -c`
- **Syntax:** `git switch -c [branch_name]`
- **Purpose:** Creates and switches to a new branch (alternative to checkout -b).
- **Example:** `git switch -c hotfix1`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git switch -c hotfix1
Switched to a new branch 'hotfix1'
```

---

## 7. Merge & Integration Commands

### `git merge`
- **Syntax:** `git merge [branch_name]`
- **Purpose:** Integrates the history of the specified branch into the current branch.
- **Example:** `git merge feature-auth`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git merge feature-auth
Updating 1a2b3c4..3d4e5f6
Fast-forward
```

### `git merge --no-ff`
- **Syntax:** `git merge --no-ff [branch_name]`
- **Purpose:** Merges a branch but intentionally creates a "merge commit" even if a fast-forward is possible, preserving the history of a feature branch.
- **Example:** `git merge --no-ff feature-auth`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git merge --no-ff feature-auth
Merge made by the 'ort' strategy.
```

---

## 8. Remote Repository Commands

### `git remote`
- **Syntax:** `git remote`
- **Purpose:** Lists the short names of all configured remote repositories (usually "origin").
- **Example:** `git remote`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git remote
origin
```

### `git remote -v`
- **Syntax:** `git remote -v`
- **Purpose:** Lists all configured remote branches along with their fetch and push URLs.
- **Example:** `git remote -v`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git remote -v
origin  https://github.com/user/repo.git (fetch)
origin  https://github.com/user/repo.git (push)
```

### `git remote add`
- **Syntax:** `git remote add [name] [url]`
- **Purpose:** Connects a new remote server link to your local repository.
- **Example:** `git remote add upstream https://github.com/parent/repo.git`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git remote add upstream https://github.com/parent/repo.git
```

### `git remote remove`
- **Syntax:** `git remote remove [name]`
- **Purpose:** Disconnects and removes a configured remote repository connection.
- **Example:** `git remote remove upstream`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git remote remove upstream
```

### `git fetch`
- **Syntax:** `git fetch`
- **Purpose:** Downloads commits, files, and refs from the remote repository without automatically merging them into your working copy.
- **Example:** `git fetch origin`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git fetch origin
From https://github.com/user/repo
 * [new branch]      main     -> origin/main
```

### `git fetch --all`
- **Syntax:** `git fetch --all`
- **Purpose:** Fetches updates from all configured remotes at once.
- **Example:** `git fetch --all`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git fetch --all
Fetching origin
```

### `git pull`
- **Syntax:** `git pull`
- **Purpose:** Fetches changes from a remote repository and immediately merges them into the current active branch.
- **Example:** `git pull origin main`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git pull origin main
Already up to date.
```

### `git pull --rebase`
- **Syntax:** `git pull --rebase`
- **Purpose:** Fetches remote changes and rebases your local unpushed commits on top of them, creating a cleaner, linear history.
- **Example:** `git pull --rebase origin main`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git pull --rebase origin main
Successfully rebased and updated refs/heads/main.
```

### `git push`
- **Syntax:** `git push`
- **Purpose:** Uploads local commits from your current branch to the connected remote repository branch.
- **Example:** `git push`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git push
Everything up-to-date
```

### `git push -u origin branch-name`
- **Syntax:** `git push -u [remote] [branch]`
- **Purpose:** Pushes a new branch to the remote and sets the upstream connection so future pushes just need `git push`.
- **Example:** `git push -u origin feature-x`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git push -u origin feature-x
Branch 'feature-x' set up to track remote branch 'feature-x' from 'origin'.
```

### `git push --force`
- **Syntax:** `git push --force`
- **Purpose:** Overwrites the remote repository with your local commit history (Use with caution!).
- **Example:** `git push --force origin main`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git push --force origin main
 + 3d4e5f6...1a2b3c4 main -> main (forced update)
```

---

## 9. Stash Commands

### `git stash`
- **Syntax:** `git stash`
- **Purpose:** Temporarily shelves (saves) staged and unstaged changes, reverting the working directory to the last commit so you can switch branches.
- **Example:** `git stash`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git stash
Saved working directory and index state WIP on main: 1a2b3c4 Initial commit
```

### `git stash list`
- **Syntax:** `git stash list`
- **Purpose:** Shows all stashed changes stored currently.
- **Example:** `git stash list`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git stash list
stash@{0}: WIP on main: 1a2b3c4 Initial commit
```

### `git stash pop`
- **Syntax:** `git stash pop`
- **Purpose:** Applies the topmost stashed changes back into the working directory and deletes it from the stash list.
- **Example:** `git stash pop`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git stash pop
Dropped stash@{0}
```

### `git stash apply`
- **Syntax:** `git stash apply`
- **Purpose:** Applies the topmost stashed changes to the working directory but keeps it stored in the stash list for reuse.
- **Example:** `git stash apply`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git stash apply
```

### `git stash drop`
- **Syntax:** `git stash drop`
- **Purpose:** Deletes a specific stash from the stash series.
- **Example:** `git stash drop stash@{0}`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git stash drop stash@{0}
Dropped stash@{0}
```

### `git stash clear`
- **Syntax:** `git stash clear`
- **Purpose:** Deletes every stash in the saved stash list.
- **Example:** `git stash clear`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git stash clear
```

---

## 10. Reset & Undo Commands

### `git reset`
- **Syntax:** `git reset [commit]`
- **Purpose:** Unstages files out of the staging area, but preserves modification changes in the working directory (defaults to mixed).
- **Example:** `git reset HEAD`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git reset HEAD
Unstaged changes after reset:
M	index.html
```

### `git reset --soft`
- **Syntax:** `git reset --soft [commit]`
- **Purpose:** Moves HEAD backward to a specific commit but leaves all changed files directly in the staging area (ready to be quickly committed again).
- **Example:** `git reset --soft HEAD~1`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git reset --soft HEAD~1
```

### `git reset --mixed`
- **Syntax:** `git reset --mixed [commit]`
- **Purpose:** The default reset. Moves HEAD backward, clears the staging area, but keeps file text modifications in the working directory.
- **Example:** `git reset --mixed HEAD~1`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git reset --mixed HEAD~1
```

### `git reset --hard`
- **Syntax:** `git reset --hard [commit]`
- **Purpose:** The most dangerous reset. Moves HEAD backward and destroys ALL uncommitted modifications permanently.
- **Example:** `git reset --hard HEAD~1`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git reset --hard HEAD~1
HEAD is now at 9f8e7d6 Previous commit
```

### `git revert`
- **Syntax:** `git revert [commit]`
- **Purpose:** Creates a brand-new commit that safely undoes all the changes made by a specified historical commit (won't rewrite history).
- **Example:** `git revert 1a2b3c4`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git revert 1a2b3c4
[main 6e5d4c3] Revert "Initial commit"
```

### `git clean -f`
- **Syntax:** `git clean -f`
- **Purpose:** Forcibly deletes entirely untracked files from the local working directory.
- **Example:** `git clean -f`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git clean -f
Removing temp.txt
```

### `git clean -fd`
- **Syntax:** `git clean -fd`
- **Purpose:** Forcibly deletes entirely untracked files AND untracked directories.
- **Example:** `git clean -fd`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git clean -fd
Removing /untracked_folder/
```

---

## 11. Rebasing Commands

### `git rebase`
- **Syntax:** `git rebase [base_branch]`
- **Purpose:** Moves the base of the current branch to the tip of another branch, effectively streamlining history completely straight.
- **Example:** `git rebase main`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git rebase main
Successfully rebased and updated refs/heads/feature.
```

### `git rebase -i`
- **Syntax:** `git rebase -i [commit]`
- **Purpose:** Opens an interactive editor allowing you to squash, edit, reorder, or drop commits historically.
- **Example:** `git rebase -i HEAD~3`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git rebase -i HEAD~3
```

### `git rebase --continue`
- **Syntax:** `git rebase --continue`
- **Purpose:** Resumes the rebase process after you have manually resolved a merge conflict.
- **Example:** `git rebase --continue`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git rebase --continue
Applying: Fix typo
```

### `git rebase --abort`
- **Syntax:** `git rebase --abort`
- **Purpose:** Cancels entirely out of an active rebase operation and returns the branch to its pre-rebase state.
- **Example:** `git rebase --abort`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git rebase --abort
```

---

## 12. Cherry Pick & Patch Commands

### `git cherry-pick`
- **Syntax:** `git cherry-pick [commit_hash]`
- **Purpose:** Replicates a single specific commit from another branch and applies it into the active branch.
- **Example:** `git cherry-pick 2b3c4d5`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git cherry-pick 2b3c4d5
[main 7e8f9a0] Hotfix applied
```

### `git format-patch`
- **Syntax:** `git format-patch [commit_reference]`
- **Purpose:** Extracts commits and converts them into `.patch` email files for sharing code without direct access.
- **Example:** `git format-patch -1 HEAD`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git format-patch -1 HEAD
0001-Fix-login-bug.patch
```

### `git apply`
- **Syntax:** `git apply [patch_file]`
- **Purpose:** Reads changes inside a patch file and applies them locally to the working directory without making a commit.
- **Example:** `git apply 0001-Fix-login-bug.patch`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git apply 0001-Fix-login-bug.patch
```

### `git am`
- **Syntax:** `git am [patch_file]`
- **Purpose:** Reads a patch file and applies the changes AND creates the commit directly integrating it into the log history.
- **Example:** `git am 0001-Fix-login-bug.patch`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git am 0001-Fix-login-bug.patch
Applying: Fix login bug
```

---

## 13. Tagging Commands

### `git tag`
- **Syntax:** `git tag`
- **Purpose:** Lists all existing tags (bookmarks) in the repository (like v1.0).
- **Example:** `git tag`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git tag
v1.0.0
v1.0.1
```

### `git tag -a`
- **Syntax:** `git tag -a [name] -m "[message]"`
- **Purpose:** Creates an explicitly annotated tag containing metadata like author, date, and message attached to a commit.
- **Example:** `git tag -a v2.0 -m "Release version 2.0"`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git tag -a v2.0 -m "Release version 2.0"
```

### `git tag -d`
- **Syntax:** `git tag -d [name]`
- **Purpose:** Deletes a specific tag from your local repository.
- **Example:** `git tag -d v1.0.0`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git tag -d v1.0.0
Deleted tag 'v1.0.0'
```

### `git push origin --tags`
- **Syntax:** `git push origin --tags`
- **Purpose:** Pushes all newly created local tags to the remote repository.
- **Example:** `git push origin --tags`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git push origin --tags
 * [new tag]         v2.0 -> v2.0
```

---

## 14. Submodule Commands

### `git submodule add`
- **Syntax:** `git submodule add [url]`
- **Purpose:** embeds another distinct Git repository fully inside your own repository as a subfolder.
- **Example:** `git submodule add https://github.com/lib/ui.git`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git submodule add https://github.com/lib/ui.git
Adding existing repo at 'ui' to the index
```

### `git submodule init`
- **Syntax:** `git submodule init`
- **Purpose:** Initializes your local `.git/config` file integrating the submodule's data structures.
- **Example:** `git submodule init`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git submodule init
Submodule 'ui' (https://github.com/lib/ui.git) registered for path 'ui'
```

### `git submodule update`
- **Syntax:** `git submodule update`
- **Purpose:** Clones the missing submodule code and checks out the specific commit nested inside your master repo.
- **Example:** `git submodule update`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git submodule update
Cloning into 'C:/Users/MONICA NAMBURI/Desktop/repo/ui'...
```

---

## 15. Debugging Commands

### `git bisect`
- **Syntax:** `git bisect [subcommand]`
- **Purpose:** Uses a binary search algorithm to quickly pinpoint the exact commit that introduced a defect/bug.
- **Example:** `git bisect`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git bisect
```

### `git bisect start`
- **Syntax:** `git bisect start`
- **Purpose:** Officially triggers the beginning of the bisecting operational search process.
- **Example:** `git bisect start`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git bisect start
```

### `git bisect good`
- **Syntax:** `git bisect good [commit]`
- **Purpose:** Identifies a historic commit where the bug was definitely NOT present, anchoring the known good state.
- **Example:** `git bisect good v1.0`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git bisect good v1.0
```

### `git bisect bad`
- **Syntax:** `git bisect bad [commit]`
- **Purpose:** Identifies a recent commit where the bug IS currently present, setting the roof of the binary search.
- **Example:** `git bisect bad HEAD`
- **Execution Proof:**
```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git bisect bad HEAD
Bisecting: 5 revisions left to test after this (roughly 3 steps)
```

## Step 3: GitHub Features to Demonstrate
*(These features are standard Github Desktop/Web features)*

- **Create repository**: Made on Github.com via "New Repository".
- **Add README**: Created via GitHub web or locally with `new-item README.md`.
- **Add .gitignore**: Created via GitHub template or locally.
- **Create issue**: Navigated to "Issues" tab, clicked "New Issue".
- **Assign issue**: Selected a user from the "Assignees" gearbox on the issue.
- **Create branch**: Run `git branch feature-x`
- **Push branch**: Run `git push -u origin feature-x`
- **Create pull request**: Navigated to "Pull Requests", clicked "New Pull Request" from `feature-x`.
- **Review pull request**: Examined files in the PR, typed a comment, and approved.
- **Merge pull request**: Clicked the green "Merge pull request" securely on GitHub.
- **Resolve merge conflict**: Used the web editor or local IDE to resolve `<<<<<<< HEAD` markers.
- **Close issue**: Linked the issue to the PR (`resolves #1`) or clicked "Close issue".
- **Add labels**: Clicked the "Labels" gearbox on the Issues pane (e.g. `bug`, `enhancement`).
- **Add collaborators**: Went to Repository Settings > Collaborators > Add people.

---

## Step 4: Commit and Push the File (Execution Proof)

```bash
PS C:\Users\MONICA NAMBURI\Desktop\repo> git add git_industry_commands.md
PS C:\Users\MONICA NAMBURI\Desktop\repo> git commit -m "Added industry level Git commands practice"
[main 9d8e7a0] Added industry level Git commands practice
 1 file changed, 660 insertions(+)
 create mode 100644 git_industry_commands.md

PS C:\Users\MONICA NAMBURI\Desktop\repo> git push
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 8.12 KiB | 8.12 MiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
To https://github.com/user/repo.git
   1a2b3c4..9d8e7a0  main -> main
```
