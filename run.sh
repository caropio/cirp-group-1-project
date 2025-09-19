# ============================================================
# Run the SAFE website locally on your computer
#
# Step 1: cd /Users/carolinepioger/Desktop/cirp-group-1-project
#         → "cd" means "change directory". Here it moves into
#           the folder where your project files live. 
#           (Update this path to your own folder!)
#
# Step 2: python -m http.server &
#         → Starts a simple local web server on port 8000 
#           using Python. The "&" just means "run it in the 
#           background so you still have your terminal free".
#
# Step 3: open -a "Google Chrome" http://localhost:8000/index.html
#         → Opens Google Chrome directly at your local website.
#           "localhost:8000" is your computer acting as a server,
#           and "index.html" is the entry page of your site.
#
# Now you can test the website locally !
# ============================================================

cd /Users/carolinepioger/Desktop/cirp-group-1-project # change directory to yours to run locally
python -m http.server & # starts the sever locally through python 
open -a "Google Chrome" http://localhost:8000/index.html # will load on your local 8000 server so change if needed