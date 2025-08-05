#!/usr/bin/env python3
import os
import shutil

# Paths
root = os.getcwd()  # spaceseis-analytics-website/
pages_src = os.path.join(root, "src", "pages")
assets_src = os.path.join(root, "src", "assets")

# 1. Move HTML files to root
for fname in os.listdir(pages_src):
    if fname.endswith(".html"):
        src = os.path.join(pages_src, fname)
        dst = os.path.join(root, fname)
        print(f"Moving {src} → {dst}")
        shutil.move(src, dst)

# 2. Move assets folder into root
dst_assets = os.path.join(root, "assets")
if os.path.exists(assets_src):
    print(f"Moving {assets_src} → {dst_assets}")
    # If destination exists, remove it first or merge
    if os.path.exists(dst_assets):
        shutil.rmtree(dst_assets)
    shutil.move(assets_src, dst_assets)

# 3. Remove now-empty src/pages and src (if desired)
try:
    shutil.rmtree(os.path.join(root, "src", "pages"))
    print("Removed src/pages folder")
    # Optionally remove entire src if empty:
    if not os.listdir(os.path.join(root, "src")):
        shutil.rmtree(os.path.join(root, "src"))
        print("Removed src folder (was empty)")
except Exception as e:
    print(f"Cleanup warning: {e}")

print("Reorganization complete. Review files before committing.")

