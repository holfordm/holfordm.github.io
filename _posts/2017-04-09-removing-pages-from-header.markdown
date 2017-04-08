---
layout: post
title:  "Removing pages from the header of your Jekyll site"
date:   2017-04-08 12:20:45 +0000
categories: 
---
If you have more than a couple of pages on your Jekyll site, you may not want them all appearing in your page headers (which is the default). Fortunately 
[Stack Overflow](http://stackoverflow.com/questions/25452429/excluding-page-from-jekyll-navigation-bar) has some answers. The simplest to my mind is the last. It allows you to use a simple yaml tag in the front matter of your page to show if you want the page excluded from the header:
{% raw %}
    ---
	exclude: true
	---
{% endraw %}

Set it up by creating the file _includes/header.html. (You may need to create the directory _includes first.)
(Since I am still using the default minima theme, I wanted to use the header from that theme which is at [GitHub](https://github.com/jekyll/minima/blob/master/_includes/header.html).) Then insert the relevant templating logic.
{% highlight html %}
   <div class="trigger">   {% raw %}
    {% for my_page in site.pages %}
     {% unless my_page.exclude %}
	{% if my_page.title %}{% endraw %}
	 <a class="page-link" href="{% raw %}{{ my_page.url | relative_url }}{%endraw%}">{%raw%}{{ my_page.title | escape }}{%endraw%}</a>{% raw %}
	{% endif %}
     {% endunless %}
    {% endfor %}{% endraw %}
    </div>
{% endhighlight %}