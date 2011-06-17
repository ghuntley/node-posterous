# node-posterous
A NodeJS library for working with the posterous API.

## Installation
`npm install posterous`

## Usage
Create the Posterous object with a posterous username/password to start using the API methods.

Then call the `auth` method to fetch the user's API token.

    var Posterous = require('posterous');

    var posterous = new Posterous('user', 'pass');

    //First call auth to get the API token
    posterous.auth(function (err, result) {
      if (err) {
        console.error('Could not fetch API token!');
      }

      //API token fetched, you can now use all the API methods!
      //See the tests folder for examples of the library in action!
    });

## Methods
`get(api name, [args,] options, callback)`

This makes GET request to the API endpoint specified by `api name`.

Some API endpoints require arguments such as a site ID, or post ID, and these should be passed as the parameters after the api name.

The `options` parameter is a dictionary used for POST and PUT requests, where you will want to include body data. For more info on which options are available to each type of request, see the [Posterous API docs](http://posterous.com/api). If there are no options, you must pass `null` to the function.

The callback function will be used to return error messages or request results.

The same applies to the following functions for different request methods:

`post(api name, [args,] options, callback)`

`put(api name, [args,] options, callback)`

`del(api name, [args,] options, callback)`

### auth(callback)
`auth` will fetch the API token and save it to the Posterous object for future method calls. After you call auth, you don't need to do anything yourself with the API token.

The callback for `auth` is slightly different: `result` will contain the API token directly as a string.

__auth should be called before any other API requests, except for public APIs.__


## Callbacks
All API methods have the same callback:

`err` - contains the error message if there was an error, or null otherwise.

`results` - contains the results of the API call, see the [Posterous API](http://posterous.com/api) for more info.


# APIs
## Users
### User (GET)
Get the current user's information.

    posterous.get('User', null, function (err, result) {
      //Use result here
      console.log(result.nickname);
    });

### Users (POST)
Create a new user (only for platform users of Posterous).

## Subscriptions
### Subscriptions (GET)
The user's current subscriptions.

    //Fetch the second page of subscriptions
    posterous.get('Subscriptions', {page: 2}, function(err, result) {
      //Use result here
    });

### SubscriptionPosts (GET)
The posts from the user's subscribed sites.

## Sites
### Sites (GET, POST)
List the user's Posterous sites, or create new sites.

    var options = {
      'site[hostname]': hostname,
      'site[name]': 'My Posterous Site',
      'site[is_private]': 'false'
    }
    
    posterous.post('Sites', options, function(err, result) {
      //Check result to make sure the site was created
    });

### Site (GET, PUT, DELETE)
__Args:__ site ID

Get a single Posterous site, update it, or delete it.

    posterous.del('Site', site_id, null, function(err, result) {
      //Use result here
    });

### Photos (GET)
__Args:__ site ID

Get 20 random photos from the user's sites.

### Subscribe (GET)
__Args:__ site ID

Subscribe the current user to a site.

### Unsubscribe (GET)
__Args:__ site ID

Unsubscribe the current user from a site.

### HeaderImage (POST, DELETE)
__Args:__ site ID

Upload a new header image, or delete it.

## Site Profiles
### SiteProfile (GET, POST, PUT, DELETE)
__Args:__ site ID

Get, create, update, delete a site's profile.

### SiteProfileImage (PUT, DELETE)
__Args:__ site ID

Upload or delete a site's profile image.

## Site Tags
### Tags (GET)
__Args:__ site ID

Get the list of tags for a site.

## Site Contributors
### Contributors (GET, POST)
__Args:__ site ID

Get the list of contributors, or add a new contributor.

### Contributor (DELETE)
__Args:__ site ID, contributor ID

Delete a contributor from a site.

## Site Subscribers
### Subscribers (GET, POST)
__Args:__ site ID

Get a list of subscribers to a site, or add a new subscriber (Platform users only).

### Subscriber (DELETE)
__Args:__ site ID, subscriber ID

Remove a subscriber from a site.

## External Autopost Sites
### ExternalSites (GET)
__Args:__ site ID

Get a list of external autopost sites.

### ExternalSite (GET, DELETE)
__Args:__ site ID, external site ID

Get or delete a single external autopost site.

## Site Theme
### Theme (GET, POST)
__Args:__ site ID

Get the theme for a site, or create a new theme.

## Posts
### AllPosts (GET)
Get a list of public posts.

### Posts (GET, POST)
__Args:__ site ID

Get a list of posts belonging to a site, or create a new post.

### Post (GET, PUT, DELETE)
__Args:__ site ID, post ID

Get a single post, update it or delete it.

### PublicPosts (GET)
__Args:__ site ID

Get a list of a site's public posts.

### PostPhotos (GET)
__Args:__ site ID, post ID
Get photos from a post.

### PostVideos (GET)
__Args:__ site ID, post ID
Get videos from a post.

### PostAudioFiles (GET)
__Args:__ site ID, post ID

Get audo files from a post.

## Post Comments
### Comments (GET, POST)
__Args:__ site ID, post ID

Get a list of comments from a post, or create a new comment.

### Comment (GET, PUT, DELETE)
__Args:__ site ID, post ID, comment ID

Get a single comment from a post, update it, or delete it.

## Post Likes
### Likes (GET, POST)
__Args:__ site ID, post ID

Get a list of likes for a post, or add a new like.

### Like (GET, DELETE)
__Args:__ site ID, post ID, like ID

Get a single like for a post, or delete it.

## Pages
### Pages (GET, POST)
__Args:__ site ID

Get a list of a site's pages, or create a new page.

### Page (GET, PUT, DELETE)
__Args:__ site ID, page ID

Get a single page, update it, or delete it.

## Link Categories
### Categories (GET, POST)
__Args:__ site ID

Get a list of categories, or create a new category.

### Category (GET, PUT, DELETE)
__Args:__ site ID, category ID

Get a single category, update it, or delete it.

### MoveCategory (PUT)
__Args:__ site ID, category ID

Move a category to a new position.

## Links
### Links (GET, POST)
__Args:__ site ID, category ID

Get a list of links, or create a link in the category.

### Link (GET, PUT, DELETE)
__Args:__ site ID, category ID, link ID

Get a single link, update it, or delete it.

### MoveLink (PUT)
__Args:__ site ID, category ID, link ID

Move a link to a new position.
