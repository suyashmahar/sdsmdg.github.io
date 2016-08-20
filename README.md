# Jekyll powered blog for Mobile Development Group

## Install and setup

Before using it, you may need [Bower](http://bower.io/) and [Bundler](http://bundler.io/) on your local to install dependencies.

0. Install Ruby as described in this [Link](https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-on-ubuntu-14-04-using-rvm).
1. Fork code and clone
2. Run `bower install` to install all dependencies in [bower.json](https://github.com/DONGChuan/DONGChuan.github.io/blob/master/bower.json)
3. Run `bundle install` to install all dependencies in [Gemfile](https://github.com/DONGChuan/DONGChuan.github.io/blob/master/Gemfile)
4. Update `_config.yml` with your own settings.
5. Add posts in `/_posts`
6. Commit to your own Username.github.io repository.
7. Then come back to star this theme!

> When install dependencies by bundler or gem, you may have some errors depending on your environment.

> Error about `json`. Check response of [Massimo Fazzolari on Stackoverflow](http://stackoverflow.com/questions/8100891/the-json-native-gem-requires-installed-build-tools) to quick fix your problem. (Please also use latest version instead of 1.9.3 mentioned in the response)
  
> Error about `jekyll-paginate`. Please check [here](http://stackoverflow.com/questions/35401566/dont-have-jekyll-paginate-or-one-of-its-dependencies-installed)

> Error about `SSL_connect`. Please check [here](http://stackoverflow.com/questions/15305350/gem-install-fails-with-openssl-failure) and [here](http://railsapps.github.io/openssl-certificate-verify-failed.html)

> For the moment, when you test on your local, you need to keep internet connection. Bug will be fixed soon.

## How to use

#### Create a new post

Create a `.md` file inside `_posts` folder.

Name the file according to the standard jekyll format.

```
2016-01-19-i-love-yummy.md
```

Write the Front Matter and content in the file.

```
---
layout: post
title: Post title
category: Category
tags: [tag1, tag2]
---
```

Please find examples [here](https://github.com/DONGChuan/DONGChuan.github.io/tree/master/_posts)

#### [Post Navigation Module](http://dongchuan.github.io/css/2016/04/22/CSS-Animation.html)

When writing post, please always follow this format:

```
Description about this post, blablabla

## Title A

### Title A-1

### Title A-2

## Title B

### Title B-1

```

So, Title A, A-1, A-2, Title B, B-1 will be detected and created as a directory

For example, [a demo post](https://github.com/DONGChuan/DONGChuan.github.io/edit/master/_posts/2016-04-22-CSS-Animation.md)

But if you do not like it or your post is quite short. You want to hide this navigation to make your post occupy your full screen. You just need to set **no-post-nav:true** in the Front Matter of the post where you want to hide this feature :D

#### [Github Module](http://dongchuan.github.io/open-source)

This module will get automatically all your repository information from github. But to test on your local, you must keep internet connection. 
In the future, it will also show the repositories you contributed a lot and the ones of your organization.

#### [Bookmark Module](http://dongchuan.github.io/bookmark)

To add new marks, you only need to edit [bookmark.md](https://github.com/DONGChuan/Yummy-Jekyll/blob/master/bookmark.md).

#### [Customize About Page](http://dongchuan.github.io/about)

Feel free to customize about.me page to show yourself. You only need to modify [about.md](https://github.com/DONGChuan/Yummy-Jekyll/blob/master/about.md) and [about.html](https://github.com/DONGChuan/Yummy-Jekyll/blob/master/_includes/about.html)