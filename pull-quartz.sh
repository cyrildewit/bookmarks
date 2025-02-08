#!/bin/bash

# Define variables
REPO_URL="https://github.com/jackyzha0/quartz.git"
SUBTREE_PREFIX="quartz"
BRANCH="v4"

# Pull the latest changes from Quartz repository
echo "Updating Quartz..."
if git subtree pull --prefix=$SUBTREE_PREFIX $REPO_URL $BRANCH --squash; then
    echo "Quartz has been updated successfully!"
else
    echo "Failed to update Quartz. Please check the error message above." >&2
    exit 1
fi