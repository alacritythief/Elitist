ELITIST
=======

"Mostly Harmless"

Elitist is a space pilot's best friend.

Setup instructions:
------------------------

* Make sure Python, Virtualenv, Virtualenvwrapper, and NPM are installed.
* Clone this repo and go into its folder, `rm -rf .git && git init` to start a fresh project.
* `mkvirtualenv elitist` to create your initial Python environment
* `npm run setup` will set up everything for you, including the superuser and basic pages
* `grunt` will concatenate .styl and .js files from `client/src` into `client/dist`, and watch for any changes.
* `npm run server` runs the Django server
* Go to [localhost:8000](http://localhost:8000/) in your browser
* visit [localhost:8000/admin](http://localhost:8000/admin) to play around in the admin interface.

Special things that make your life easier:
------------------------------------------

* `npm run reset-db` clears the local dev database, and runs setup for you.
* `npm run debug` runs the server with Werkzeug debugger, enabling use of Python commands in the error pages.
* `npm run shell` runs an IPython shell and automagically loads all your models for debugging. No need to import all the things manually!
* Add `from IPython.core.debugger import Tracer` at the top of any `.py` file, and add `Tracer()()` to debug from a breakpoint in your code.
* `npm test` runs Django tests.

Linking with Facebook/OAuth (handled by [Python Social](http://psa.matiasaguirre.net/)):
-------------------------------------------------

* Go to [developers.facebook.com](https://developers.facebook.com/) and create your app.
* Edit `server/base/settings.py` with your `SOCIAL_AUTH_FACEBOOK_KEY` and `SOCIAL_AUTH_FACEBOOK_SECRET` values from your app. Make sure the values are within the quotes.

Before you deploy to production:
--------------------------------

* Make sure to set any `DEBUG` settings to `False` in `server/base/settings.py`
* Check over anything that has a `SECURITY WARNING` comment near it.
