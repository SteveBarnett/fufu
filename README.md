# fufu

A future friendly front-end style guide that even caters for feature phones.

## Style Guide

### HTML

We've used an [atomic-design](http://bradfrost.com/blog/post/atomic-web-design/)-like pattern. It's a static site, generated with [Jekyll](http://jekyllrb.com/). The atoms, molecules, organisms, and ecosystems are [Jekyll collections](http://jekyllrb.com/docs/collections/), set in `_config.yml`. 

### CSS

We use [Sass](http://sass-lang.com/), and let Jekyll handle compiling it. We set the [output style](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_16) to `:compressed`

The main Sass file is `css/style.scss`. This imports partials from the `_sass` directory. We use a `link rel="stylesheet" media="screen and (min-width: 20em)"` to pull in (the compiled version of) `css/enhanced.scss`, (which pulls in a few additional partials from the `_sass` directory).

### JavaScript

We [cut the mustard](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard), checking for support of `querySelector`, `localStorage` and `addEventListener` before using [Filament Group's loadJS](https://github.com/filamentgroup/loadJS) to asynchronously load our minified JavaScript file and add a [Google Web Font](https://www.google.com/fonts).

We use [Filament Group's loadCSS](https://github.com/filamentgroup/loadCSS) to asynchronously load our `css/enhanced.css`. We also place a link to the enhanced stylesheet inside a `<noscript>` element in case JavaScript is disabled.

The small bits of JavaScript in `<head>` of the document (loadCSS, loadJS, and our mustard cut are minifed before inclusion. The original files are in the `js` directory.)

### Images

Supplied by [placekitten.com](https://placekitten.com/). (^._.^)ﾉ

## Some problems

### CSS

There aren't a lot of safe styles that can be applied to featurephones, and behaviour is inconsistent. The worst of these is not respecting [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). Here's an example.

```css
a {
  color: orange;
}

/* ...
some more rules
... */

.highlight a {
  color: green;
}
```

Links inside `.highlight` will stay `orange`: they won't be overwritten by the `.highlight a` selector. This hits most often when you're changing up colours and background colours, and can lead to bad contrast or invisible text and links. Ouch.

### Images

Images that are wider than the viewport stretch the page since the usual responsive images trick of

```css
img {
  max-width: 100%;
  height: auto;
}
```

doesn't work for many featurephones. Setting `width: 100%;` also doesn't work. Ouch.

## Some solutions

### CSS

What we've done is apply a simple, colourful, typographic layer of presentation in `style.css`. Selectors only go one level deep.

Everything else is moved to a separate `enhanced.css` file, and served using `<link rel="stylesheet" media="only screen" href="/css/enhanced.css">`. We do this because the extra styles contain `@media` blocks, which can cause parsing errors in featurephones: they can freak out and immediately stop parsing the CSS file. Ouch again.

### Images

Looking at the user base of the project that **fufu** was created for ([Universal Core](http://docs.unicore.io/)), the majority of devices run with a screen resolution of 240 pixels wide (or higher). We use images of 230 pixels wide (to allow for a little browser chrome) as our base.

Images use in banners / headers have `width: 100%; height: auto;` applied to them, so that phones that support those rules (and have wider screens) will stretch the image.