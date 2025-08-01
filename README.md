## TODOS

- Element 1: Loader page
- Element 4: Navbar
- Element 6: Infinite Marquee
- Element 7: Our Team Section

## git process

### The Golden Rule: Keep `main` Clean

The `main` branch should **always** be stable, working, and represent the official, production-ready version of your project. Merging incomplete or experimental features into `main` can break the project for everyone and creates a messy history that is difficult to fix.

### The Solution: A Temporary Integration Branch

To solve your exact problem, you use a temporary, shared branch. Many teams call it `develop`, `dev`, or `integration`. Think of it as a temporary "preview" branch where everyone can merge their in-progress work to test how it fits together.

Here is the step-by-step workflow:

#### Step 1: Everyone Works on Their Own Feature Branch

This is the same as before. Each person creates a branch from the clean `main` branch to work on their feature in isolation.

  * Developer A is on `feature/cool-animation`
    * Developer B is on `feature/contact-form`

    #### Step 2: Create a Shared `dev` Branch

    One person creates a new branch from `main` and pushes it to GitHub. This will be your shared integration branch.

    ```bash
    # Make sure you are on the latest main
    git checkout main
    git pull origin main

    # Create the 'dev' branch and push it so everyone can access it
    git checkout -b dev
    git push -u origin dev
    ```

    #### Step 3: Merge Features into `dev` for Preview

    When you want to see how your features look together, each team member merges their feature branch **into the `dev` branch**.

    Here's how Developer A would do it:

    ```bash
    # Get the latest version of the dev branch
    git checkout dev
    git pull origin dev

    # Merge your feature into it
    git merge feature/cool-animation

    # If there are merge conflicts, fix them now. Then push the combined code.
    git push origin dev
    ```

    Now Developer B does the same thing, merging their `feature/contact-form` into `dev`. The `dev` branch now contains the combined, in-progress work from everyone. The team can pull this branch to their local machines to see and test the integrated site.

    #### Step 4: Continue Working on Your Feature Branch

    This is the key to your question. After merging into `dev`, your original feature branch is untouched. You can simply switch back to it and continue working on your feature until it's actually finished.

    ```bash
    # Just switch back to your branch
    git checkout feature/cool-animation

    # ...continue coding, adding, and committing your work as normal.
    ```

    The work you did to merge into `dev` does not affect your isolated feature work.

    #### Step 5: The Final Merge to `main` (When Ready)

    When your feature is **100% complete and approved**, you will open a Pull Request to merge your feature branch directly into the `main` branch. **You do not merge the `dev` branch into `main`**.

      * **Correct:** `feature/cool-animation` -\> `main`
        * **Incorrect:** `dev` -\> `main`

        This ensures that only clean, complete, and reviewed code ever makes it into your official `main` branch.

        ### Summary of the Flow

        1.  **`main`**: The stable, golden source of truth.
        2.  **`feature/*`**: Individual, isolated work happens here.
        3.  **`dev`**: A temporary playground to merge feature branches and test integration.
        4.  **Pull Request**: When a feature is complete, a PR is made from the `feature/*` branch directly to `main` for a final review and merge.

        This workflow gives you the best of both worlds: a place to see combined work (`dev`) while keeping your individual workspaces (`feature/*`) and your official codebase (`main`) clean and organized.
