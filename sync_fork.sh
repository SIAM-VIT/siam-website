#!/bin/bash

set -e

# Make sure we're on the main branch
git checkout main

# Fetch upstream without merging yet
git fetch upstream

# Check if there are changes between your main and upstream/main
if git diff --quiet HEAD..upstream/main; then
  echo "✅ Your fork is already up to date. No changes."
else
  echo "🔄 Upstream has new commits. Syncing..."

  # Merge changes from upstream
  git pull upstream main

  # Push them to your fork
  git push origin main

  # Make a dummy commit so you're the last committer
  git commit --allow-empty -m "Sync with upstream and keep fork updated"
  git push origin main
fi
