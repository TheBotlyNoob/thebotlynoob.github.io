---
title: 'Nicer Code Fonts For Coding Sites'
desc: 'Have You Ever Wanted To Have Nicer Fonts For Coding Sites?'
num: 0
date: '07-3-2021'
slug: '/blog/nicer-code'
cat: 'Code'
---

# Nicer Code Fonts For Coding Sites

#### My 5¢

I Personally Like [Operator](https://www.typography.com/fonts/operator/styles) Fonts As A Coding Font, But Most Coding Sites (StackOverflow, GitHub, Replit, etc...) Don't Use It. So, Now I Use Custom Stylesheets To Add `Operator` Fonts To The Sites.

### First: Install The [Stylish](https://chrome.google.com/webstore/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=en) Extension

The Stylish Extension Enables The Use Of Custom Stylesheets On Websites, Almost Like `User Agent Stylesheets` Of The Modern Age. We Will Use This To Actually Implement The Fonts.

### Next, Open The GUI

Click On The Puzzle Piece In The Top Right Corner Of The Webbrowser, Then Click On The Button That Has `Stylish - Custom Themes For...`, Then This Popup Should Appear:

![Stylish GUI](/Blog-Images/Nicer-Code/Stylish.png)

When The Popup Appears, Press The Three Dots On The Top Right Corner, Then Click `Create New Style`:

![Stylish GUI](/Blog-Images/Nicer-Code/Stylish-CNS.png)

A New Tab Should Open With A Text Editor:

![Stylish GUI](/Blog-Images/Nicer-Code/Stylish-Text-Editor.png)

In The Text Editor, Write:

```css
@import url(https://jj.is-a.dev/fonts/fonts.css);
```

This Imports Fonts That You Might Like To Use, Check Out The Fonts [Here](https://jj.is-a.dev/fonts/)

Then Write:

```css
code,
[class*='code'],
.view-lines {
  font-family: 'Operator Mono Lig', monospace /* Or Any Other Font You Want */ !important;
  /* Allow Ligatures On Replit */
  font-feature-settings: 'liga' on !important;
}

pre code,
[class*='code'],
.view-lines {
  font-size: 16px;
}
```

## Thats How You Get Nicer Code Fonts For Coding Sites
