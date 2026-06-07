# CLASS 1 #


## THEORY ##

**QUESTION 1**

**Why Understanding the Browser Rendering Pipeline Matters**

Before I started learning web development, whenever I noticed a webpage loading slowly or elements jumping around, I always assumed it was a network problem. But as I began to learn, I realized the issue could actually be in the code itself — maybe something was written incorrectly, or a resource wasn't compatible with the page.

What surprised me most when I learned about the rendering pipeline is how many steps are involved. My first thought was — why can't the browser just do this in one step? But when I studied it carefully, I understood that each step depends on the one before it. You can't skip Layout and go straight to Paint, because without Layout, the browser doesn't know where to place anything or how big each element should be.

A good example is margin. If the Layout step doesn't calculate margin correctly, your webpage ends up looking like a rough, unformatted Microsoft Word document — everything cramped together with no spacing or structure.

So understanding this pipeline helps me write better, cleaner code. It tells me where to look when something breaks, and why certain mistakes cause certain visual problems on screen.



**QUESTION 2**

**HTTP/3, QUIC and Why It Matters in 2026**

TCP, the old protocol, is slow by design. Before any data is even sent, it requires multiple back-and-forth trips between your device and the server — like a overly formal handshake that takes too long. On top of that, if even one packet of data gets lost, TCP stops everything and waits for it to be resent before continuing. This is frustrating and inefficient.

In 2026, this is a real problem. We live in a world where everyone needs the internet to practically "breathe" — from shopping, to working, to banking. A slow protocol simply cannot keep up.
A perfect example is commercial banking apps. Some of them take almost 5 minutes just to load before you can do anything. Imagine standing at a convenience store counter, trying to pay, and waiting 20 minutes for your app to respond. That's awkward and unacceptable.

This is exactly what QUIC solves. It removes unnecessary handshake trips, and if a packet is lost, only that one stream pauses — everything else keeps moving. The result? You open your banking app and complete a payment in under 30 seconds. No awkwardness, no frustration — just speed.



**QUESTION 3**

**A Website That Doesn't Use Semantic HTML Properly**

One website I used to visit regularly was a novel reading platform. I eventually stopped using it because the experience was genuinely frustrating, especially on mobile.

The first clue was how broken it looked on a small screen. The text would flow awkwardly up and down the page, and I had to keep rotating my phone just to read a single paragraph comfortably. This tells me the layout was not built with proper semantic HTML elements like `<article>` or `<section>` that help browsers understand how to structure and display content responsibly across different screen sizes.

The second clue was the links. Clicking on what looked like a chapter link would take me somewhere completely different — unrelated pages or ads. This suggests the developer used generic `<div>` or `<span>` tags instead of proper `<a>` elements with clear href attributes.

Although the website had a navigation bar, the overall structure felt like everything was just dumped together with no clear hierarchy. A properly structured website uses semantic tags like `<nav>`, `<main>`, `<header>` and `<footer>` to give both the browser and the user a clear sense of direction.




## PRODUCT THINKING ##

**QUESTION 1**

**How Semantic HTML Helps a Chef's Blog Get More Traffic**

When a famous chef wants "more traffic," they essentially want more people to find their blog through search engines like Google. The key is that Google cannot see a website the way a human does — it reads the code. This is where semantic HTML becomes powerful.

By wrapping each recipe in an `<article>` tag, we tell Google clearly — "this is a standalone piece of content." The `<header>` inside that article tells Google the title of the recipe, which helps it match the page to relevant searches. For example, if someone searches "how to make jollof rice," Google can identify the chef's specific `<article>` about that recipe and rank it in results.

The `<main>` tag tells Google where the most important content is on the page, so it doesn't waste time reading irrelevant sections. The `<aside>` can hold extra information like the chef's background or related recipes — giving Google even more context about what the blog is about.

Without these semantic tags, everything looks like a wall of meaningless `<div>` tags to Google. It can't understand the content, so it ranks the page lower. Proper semantic HTML is essentially how a chef's blog goes from invisible to discoverable.



**QUESTION 2**

Edge Computing Benefits for a Real-Time Multiplayer Game

When designing a real-time multiplayer game, the benefits of edge computing that would matter most are speed, synchronization and connection stability.

The biggest benefit is speed. Normally, when a player makes a move, that data travels to a distant server — sometimes in another country — gets processed, and travels back. That distance causes lag. Edge computing places servers closer to the player, reducing that travel distance significantly. In a game like chess or a shooting game, every millisecond counts. If my move hasn't reflected on my opponent's screen yet and they go ahead and make their own move, the whole game loses its fairness and becomes frustrating.

The second benefit is synchronization. In real-time multiplayer games, both players need to see the exact same thing at the exact same time. Edge computing makes this possible by processing data closer to both players simultaneously, keeping the game in sync.

The third benefit is connection stability. Many players game on mobile, switching between WiFi and mobile data. With traditional servers, that switch drops the connection entirely — forcing the player to restart the game from scratch. Edge computing handles this more gracefully, maintaining the connection even as the network changes.

In 2026, where mobile gaming dominates, edge computing is not a luxury — it is a necessity.



## ENGINEERING PRACTICE ##

**QUESTION 1**

**Why "I Just Use Divs Everywhere" Is Wrong**

I strongly disagree with the junior developer's statement. Yes, divs technically "work" — the page might display something on screen. But working and working well are two very different things.

First, accessibility. Screen readers and assistive technologies rely on semantic tags to navigate a page. A `<nav>` tells a visually impaired user "this is the navigation." A `<button>` tells them "this is clickable." A `<div>` tells them absolutely nothing. Using divs everywhere shuts out an entire group of users who depend on proper HTML structure.

Second, SEO. Google doesn't see your website the way a human does — it reads the code. If everything is just a `<div>`, Google sees randomly written code with no meaning or structure. It can't identify what your page is about and ranks it lower in search results. Your website essentially becomes invisible.

Third, code maintainability. I personally comment my code, which helps. But imagine coming back to your own project three months later and seeing nothing but <div><div><div> everywhere. Even with comments, it becomes unnecessarily difficult to navigate. Semantic tags like `<header>`, `<main>` and `<footer>` are self-explanatory — they reduce the need for excessive commenting.

Finally, developer collaboration. If a teammate opens your code and sees divs everywhere, they will shake their head and think "you can do better." Semantic HTML is a universal language among developers — it makes collaboration smoother and faster.

Divs have their place, but they should never replace meaningful semantic HTML.




# CLASS 2 #


## THEORY ##

**QUESTION 1**

**The Difference Between `<em>` and `<i>`**

At first glance, `<em>` and `<i>` look identical in the browser — they both make text italic. However, they serve completely different purposes and should never be used interchangeably.

`<em>` stands for emphasis. It is used when you want to stress a particular word in a way that changes or strengthens the meaning of a sentence. It is not just visual — screen readers actually read `<em>` text with added stress, making it important for accessibility. A real example from my own writing would be: "Yaa RosuluLlaah!" — this is a phrase I say with deep feeling and strong emphasis, so wrapping it in `<em>` would be appropriate.

`<i>` on the other hand is purely stylistic. It makes text italic without adding any extra meaning or importance. It is typically used for book titles, foreign words, or technical terms. A real example from my own life would be my favourite novel, Awkward Nurse — I would wrap that in `<i>` simply because it is a title, not because I am stressing it.

The rule is simple — if you mean it strongly, use `<em>`. If you just want italics for style, use `<i>`.



**QUESTION 2**

**3 HTML Elements With Special Screen Reader Behaviour**

Screen readers are tools that read web pages out loud for visually impaired users. As developers, understanding how certain HTML elements behave with screen readers is essential — because without that knowledge, we risk building websites that are completely unusable for blind users.

The first element is `<input>`. When a screen reader encounters an input field, it announces what the field is for — for example, "Enter your name, text field." However, this only works correctly when a `<label>` is properly attached to the input. Without a label, the screen reader has no idea what to call the field, leaving the user completely confused.

The second element is `<button>`. A screen reader announces a `<button>` as something clickable — it tells the user "this is something you can press." If a developer uses a `<div>` styled to look like a button instead, the screen reader won't recognise it as interactive, and the user won't know they can click it.

The third element is `<img>`. Screen readers read the alt attribute of an image out loud. So `<img alt="A bowl of jollof rice">` gets announced as exactly that. Without an alt attribute, the screen reader either says "image" with no context or skips it entirely.

As a developer, keeping these behaviours in mind is crucial. Without proper emphasis on these tags, a blind user might visit your website and understand absolutely nothing — it would be as if the website doesn't exist for them.



**QUESTION 3**

**When to Use aria-label and When to Fix Your HTML**

ARIA labels are a powerful accessibility tool, but they are often misused. The rule is simple — aria-label should fill gaps that semantic HTML cannot fill, not cover up laziness.

A good example of when to use an aria-label is on a close button that only displays an "X." Without context, a screen reader would simply announce "X, button" — which tells the user nothing about what the button actually does. Adding aria-label="Close menu" fixes this immediately. The screen reader now announces "Close menu, button" — clear and helpful. This is a genuine case where the semantic tag alone is not descriptive enough, so aria-label earns its place.

However, there are situations where developers use aria-label to patch up bad HTML instead of fixing it properly. A common example is writing `<div aria-label="header">` or `<div aria-label="footer">` instead of simply using `<header>` and `<footer>`. These semantic tags already communicate everything a screen reader needs — they don't need an aria-label to explain them. Using a div with an aria-label there is not a solution, it is a shortcut that adds unnecessary complexity to the code.

The bottom line is — always ask yourself first: "Is there a proper semantic tag for this?" If yes, use it. Only reach for aria-label when semantic HTML genuinely cannot do the job alone.



## PRODUCT QUESTION ##

**QUESTION 1**

**Structuring a Technical Documentation Page**

When designing an API documentation page for developers, the most important thing to remember is that developers don't read — they scan. The information hierarchy must guide them to what they need instantly.

The `<h1>` would be the name of the API itself — for example, "Weather API Documentation". This is the only `<h1>` on the page, establishing what the entire document is about.

The `<h2>` tags would represent the major sections a developer needs to move through logically:

Getting Started
Authentication
Endpoints
Error Handling
Support

The `<h3>` tags would break each section into specific subtopics. For example, under Getting Started: "How to Get Your API Key" and "Making Your First Request." Under Error Handling: "Common Error Codes" and "How to Debug."

This hierarchy matters because developers visiting the page for the first time head straight for "How to Get Your API Key" — they want access first. Then they look for how to use it. If something breaks, they scan for "Error Handling" or "Support" immediately.

A clear `<h1>` / `<h2>` / `<h3>` hierarchy makes that entire journey fast and frustration-free.



## ACCESSIBILITY REFLECTION ##

**QUESTION 1**

**Accessibility Test — Unilorin Student Portal**

To test accessibility, I visited the University of Ilorin student portal and examined three key areas — keyboard navigation, form labels, and button focus states.

For keyboard navigation, I pressed the Tab key and it moved through the page in a logical order — starting from the search bar, to the language switcher, to the logo, then to the username field, password field, forgot password link, and finally the login button. This is a good sign of proper tab indexing.

For form labels, the portal uses placeholders inside the input fields instead of visible labels above or beside them. While placeholders work visually, they disappear once you start typing — which can confuse screen readers and users who forget what a field is asking for. Proper `<label>` tags would be more accessible.

For button focus states, the portal handles this reasonably well. When I tabbed to the login button, it became visibly lighter — indicating a hover effect. The active state was even lighter than the hover state, giving clear visual feedback.

Overall the portal performs well in navigation and focus states, but replacing placeholder labels with proper visible `<label>` tags would significantly improve its accessibility for screen reader users.




# CLASS 3 #


## THEORY ##

**QUESTION 1**

**How to Optimize a 5MB PNG Hero Image for Production**

Receiving a 5MB PNG from a designer is common, but putting it directly on a production website would severely slow down page loading. Here is how I would optimize it step by step.

Step 1 — Compress it. The first thing I would do is compress the image to reduce its file size without destroying its quality. I would use a tool like Squoosh which is free and browser based.

Step 2 — Convert the format. PNG is too heavy for the web. I would convert it to WebP since it offers the same quality at a much smaller file size and works on all modern browsers in 2026. I would also provide an AVIF version for browsers that support it, using the `<picture>` tag to serve AVIF first and WebP as a fallback.

Step 3 — Serve the right size per device. A desktop hero image doesn't need to load on mobile at full width. Using the srcset attribute, I would create multiple sizes — small for mobile, medium for tablets, large for desktop — and let the browser pick the right one automatically.

Step 4 — Add a descriptive alt attribute. This helps screen readers and also improves SEO.

These four steps would take a 5MB PNG and turn it into a fast, accessible, production ready hero image.



**QUESTION 2**

**What is srcset and When Would You Use It?**

srcset is an HTML attribute that allows you to provide multiple versions of the same image at different sizes, letting the browser automatically pick the most appropriate one based on the user's screen size and resolution.

You would use srcset whenever an image needs to look good across different devices — mobile, tablet and desktop — without forcing every device to download the same massive file.

Scenario: Imagine a user on a mobile phone searching for a product on a shopping website. The designer provided a beautiful 5MB hero image sized for desktop. Without srcset, the mobile user's browser downloads that entire 5MB image — even though their small screen doesn't need that level of detail. The result? The page loads painfully slowly, wastes mobile data and frustrates the user.

With srcset, the developer provides three versions:

```<img
  src="product.webp"
  srcset="product-small.webp 480w,
          product-medium.webp 768w,
          product-large.webp 1200w"
  alt="Product image">```

  Now the mobile browser picks product-small.webp automatically — loading faster, saving data and delivering a smooth experience. Same image, right size, right device.



  **QUESTION 3**

  **Why rel="noopener" Matters When Using target="_blank"**

When a link has target="_blank", it opens in a new tab. This seems harmless — but without rel="noopener", that new tab has the ability to control the original tab you came from. This is known as Tab Nabbing and it is a serious security vulnerability.

Here is how it works in simple terms. Imagine someone sends you a link to fill a questionnaire. You click it and it opens in a new tab. Without rel="noopener", that new tab can secretly send instructions back to the original tab — redirecting it to a fake page. You might come back to what looks like your bank login page or your DM asking you to enter a code — but it is actually a scam page designed to steal your details.

Adding rel="noopener" simply cuts that connection completely. The new tab opens normally but has absolutely no power over the original tab. They become independent of each other.

`<a href="https://example.com" target="_blank" rel="noopener">Visit Site</a>`

It is a one small attribute that prevents a very dangerous attack. Every developer should use it by default whenever target="_blank" is used.



## ENGINEERING THINKING ##

**QUESTION 1**

**Optimization Strategy for 50 Product Images**

Loading 50 product images on a single page without any optimization strategy would make the page painfully slow. Here is how I would handle it.

Lazy Loading — Instead of loading all 50 images at once, I would use the loading="lazy" attribute so images only load when they are about to appear on screen as the user scrolls. Just like Instagram loads more posts as you scroll down.

`<img src="product.webp" loading="lazy" alt="Product">`

Format Choice — I would serve all 50 images in AVIF format for maximum compression, with WebP as a fallback for browsers that don't support AVIF yet. Both formats are significantly smaller than PNG or JPEG.

Responsive Sizing — Using srcset, I would serve smaller image versions to mobile users and larger ones to desktop users — so no device downloads more than it needs.

CDN — I would serve all images through a Content Delivery Network. A CDN stores copies of images on servers worldwide, so a user in Ilorin gets images from the nearest server instead of one far away — significantly reducing load time.

Combined, these four strategies ensure all 50 images load smoothly as the user scrolls, without wasting data or slowing down the page.




# CLASS 4 #

## THEORY ##

**QUESTION 1**

**Client-Side vs Server-Side Validation — Why You Need Both**

When a user submits a form with an invalid email, what happens next depends entirely on where the validation lives.

With client-side only validation, the browser catches the error instantly — before anything is sent to the server. The user sees an immediate message like "Please enter a valid email" without any page reload. This is fast and smooth. However it is not secure — a hacker can simply disable JavaScript in their browser and bypass all client-side checks, sending harmful or invalid data straight to your server.

With server-side only validation, the data travels all the way to the server before any error is caught. The page reloads, the user waits, and only then sees the error message. Anyone who has used the Unilorin portal during results season knows exactly how frustrating this feels — you just want to smash your phone. It is secure but delivers a terrible user experience.

This is why you need both. Client-side validation gives users instant, friendly feedback — catching simple mistakes like a missing "@" in an email immediately. Server-side validation acts as the real security wall — making sure that even if a hacker bypasses the browser checks, no harmful data gets through.

Think of it as a building with both a receptionist and a security guard.



**QUESTION 2**

**The autocomplete Attribute and 5 Real Use Cases**

The autocomplete attribute tells the browser what type of data a form field expects, allowing it to suggest saved information automatically as the user types. This speeds up form filling and improves user experience significantly.
Here are 5 values and when to use them:

1. autocomplete="name" — Used on a full name field during registration. The browser suggests the user's saved name, saving them from typing it repeatedly.

2. autocomplete="email" — Used on email fields. The browser suggests previously used email addresses, reducing typing errors like missing "@".

3. autocomplete="organization" — Used on a school or company field. For example, filling in "University of Ilorin" on an academic registration form.

4. autocomplete="postal-code" — Used on a P.O. Box or postcode field during shipping or address forms. The browser suggests previously entered postal codes.

5. autocomplete="off" — Used on sensitive or unique fields like matric numbers or passwords. You don't want the browser guessing your password on a public computer — it's called a password for a reason. 

Interestingly, the Unilorin portal uses autocomplete to remember returning students' matric numbers — a thoughtful touch that saves students time during login.




## PRODUCT THINKING ##


**QUESTION 1**

**Designing a Resilient 5-Step Job Application Form**

Losing internet connection on step 4 of a 5 step job application is one of the most frustrating experiences a user can face — especially for something as important as a job. Here is how I would design the form to handle this gracefully.

Progress Saving — I would use localStorage to automatically save the user's input after every step. This means even if the connection drops or the tab is closed, the data is stored in the browser. When the user returns, the form loads their saved answers automatically — no starting over.

Progress Indicator — A clear visual step indicator at the top would show all 5 steps. The completed steps would be highlighted differently from the current and remaining ones. If the user lost connection on step 4, they return to see steps 1-3 marked complete and step 4 clearly highlighted — so they know exactly where to continue without confusion.

Validation Strategy — Each step would be validated before moving to the next. This way errors are caught early, not all at once at the end.

Error Messaging — If the connection drops, a friendly message appears — "You're offline. Your progress has been saved. Please reconnect to continue." No data lost, no panic.



**QUESTION 2**

Native <select> vs Custom Dropdown — When to Use Which

Choosing between a native <select> and a custom dropdown is a decision that affects accessibility, user experience, and development time significantly.

A native <select> should be used for simple, straightforward choices — like selecting a country on a food delivery app or choosing a date of birth on a registration form. It is fully accessible out of the box, works perfectly with screen readers, and on mobile it triggers the device's built-in picker which is easy to scroll and tap. It also requires zero extra development time. For most forms, native is the smarter choice.

A custom dropdown makes sense when the experience genuinely requires more — like a Google search suggestion box, a social media mention selector, or an automobile configurator where options have images, colors or search functionality. These use cases justify the extra development time.

However custom dropdowns come with risks. They require extra effort to make accessible — proper ARIA labels, keyboard navigation and focus states must all be built manually. On mobile they can also feel awkward if not designed carefully.

The rule is simple — if native <select> can do the job, use it. Only go custom when the user experience genuinely demands it.



## ENGINEERING BEST PRACTICE ##

**QUESTION 1**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Input — Class 04</title>
  <style>

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background: #0f0f0f;
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }

    .card {
      background: #1a1a1a;
      border: 1px solid #2a2a2a;
      border-radius: 16px;
      padding: 36px;
      width: 100%;
      max-width: 420px;
    }

    h1 { color: #c9a84c; font-size: 20px; margin-bottom: 24px; text-align: center; }

    label { display: block; color: #aaaaaa; font-size: 13px; margin-bottom: 8px; }

    .input-wrapper { position: relative; display: flex; align-items: center; }

    input[type="password"], input[type="text"] {
      width: 100%;
      padding: 12px 44px 12px 14px;
      background: #111;
      border: 1px solid #333;
      border-radius: 8px;
      color: #ffffff;
      font-size: 15px;
      outline: none;
      transition: border 0.2s;
    }

    input:focus { border-color: #c9a84c; }

    .toggle-btn {
      position: absolute;
      right: 12px;
      background: none;
      border: none;
      color: #888;
      cursor: pointer;
      font-size: 16px;
      padding: 4px;
      border-radius: 4px;
    }

    .toggle-btn:focus { outline: 2px solid #c9a84c; color: #c9a84c; }

    .strength-meter { margin-top: 12px; }

    .strength-bars { display: flex; gap: 6px; margin-bottom: 6px; }

    .bar {
      height: 5px;
      flex: 1;
      background: #2a2a2a;
      border-radius: 99px;
      transition: background 0.3s;
    }

    .strength-label { font-size: 12px; color: #666; text-align: right; }

    .checklist { margin-top: 16px; list-style: none; }

    .checklist li {
      font-size: 13px;
      color: #666;
      padding: 5px 0;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: color 0.2s;
    }

    .checklist li.met { color: #4caf84; }
    .checklist li::before { content: '✗'; font-size: 13px; color: #555; width: 16px; text-align: center; }
    .checklist li.met::before { content: '✓'; color: #4caf84; }

    .sr-live {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      white-space: nowrap;
    }

  </style>

</head>


<body>

<div class="card">
  <h1>Create Password</h1>

  <div aria-live="polite" aria-atomic="true" class="sr-live" id="sr-feedback"></div>

  <label for="password">Password</label>

  <div class="input-wrapper">
    <input
      type="password"
      id="password"
      aria-describedby="strength-label checklist-desc"
      autocomplete="new-password"
      placeholder="Enter your password"
    />
    <button class="toggle-btn" id="toggle-btn" aria-label="Show password" type="button">Show</button>
  </div>

  <div class="strength-meter" aria-hidden="true">
    <div class="strength-bars">
      <div class="bar" id="bar1"></div>
      <div class="bar" id="bar2"></div>
      <div class="bar" id="bar3"></div>
      <div class="bar" id="bar4"></div>
    </div>
    <div class="strength-label" id="strength-label">Strength: —</div>
  </div>

  <p id="checklist-desc" class="sr-live">Password must meet the following requirements:</p>
  <ul class="checklist" aria-label="Password requirements">
    <li id="req-length">At least 8 characters</li>
    <li id="req-upper">At least one uppercase letter</li>
    <li id="req-number">At least one number</li>
    <li id="req-symbol">At least one symbol (!@#$...)</li>
  </ul>
</div>



<script>
  const input = document.getElementById('password');
  const toggleBtn = document.getElementById('toggle-btn');
  const srFeedback = document.getElementById('sr-feedback');
  const strengthLabel = document.getElementById('strength-label');
  const bars = [
    document.getElementById('bar1'),
    document.getElementById('bar2'),
    document.getElementById('bar3'),
    document.getElementById('bar4'),
  ];

  const requirements = {
    'req-length': val => val.length >= 8,
    'req-upper':  val => /[A-Z]/.test(val),
    'req-number': val => /[0-9]/.test(val),
    'req-symbol': val => /[!@#$%^&*()_+\-=\[\]{};\':"\\|,.<>\/?]/.test(val),
  };

  toggleBtn.addEventListener('click', () => {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    toggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    toggleBtn.textContent = isPassword ? 'Hide' : 'Show';
  });

  input.addEventListener('input', () => {
    const val = input.value;
    let score = 0;

    for (const [id, testFn] of Object.entries(requirements)) {
      const el = document.getElementById(id);
      const passed = testFn(val);
      el.classList.toggle('met', passed);
      if (passed) score++;
    }

    const colors = ['#F44336', '#FF9800', '#FFC107', '#4caf84'];
    const labels = ['Weak', 'Fair', 'Good', 'Strong'];

    bars.forEach((bar, i) => {
      bar.style.background = i < score ? colors[score - 1] : '#2a2a2a';
    });

    if (val.length === 0) {
      strengthLabel.textContent = 'Strength: —';
      srFeedback.textContent = '';
    } else {
      strengthLabel.textContent = `Strength: ${labels[score - 1] || 'Weak'}`;
      srFeedback.textContent = `Password strength: ${labels[score - 1] || 'Weak'}`;
    }
  });
</script>

</body>
</html>```




# CLASS 5 #


## THEORY ##

**QUESTION 1**

**The CSS Box Model & Margin Collapsing**

Every HTML element is essentially a box made up of four layers. The content is the innermost layer — where your actual text or image lives. Wrapping around it is the padding, which creates space inside the box between the content and the border. The border is the visible edge of the box. Finally, the margin is the outermost layer — it creates space outside the box, pushing other elements away.

When two adjacent divs have margin-bottom: 20px and margin-top: 30px, you might expect 50px of space between them. But CSS doesn't work that way. Instead, the margins collapse — meaning only the larger value is used. The actual gap between them is 30px, not 50px.

This is called Margin Collapsing and it was designed intentionally — if margins always added up, long pages with multiple paragraphs and images would end up with huge unexpected gaps everywhere, making spacing impossible to control.

However, margin collapsing can silently ruin a developer's layout if they don't know about it. Imagine carefully spacing images in an online article, only to find the gaps look completely wrong — and not knowing why.

If you genuinely need more space between elements, the cleanest modern solution is using gap with Flexbox or Grid:

display: flex;
flex-direction: column;
gap: 50px; /* never collapses! */

Unlike margins, gap is predictable and never collapses — making it the preferred choice in 2026.


# PERSONAL REFLECTION #

1. The hardest part for me was the Kanban board, to be honest.

2. When I got stuck, I used AI, Google, and someone in the stack helped me a whole lot with this small thing that I did. And what worked the best for me was AI, Claude AI to be precise, it helped with the help of my personal person in the stack and myself too.

3. I really don't know what to rate myself, but what I would do differently if I was to start over is "to start earlier" and ask questions about what I don't understand.



# ENGINEERING BEST PRACTICE #

I did the calculator building well and the password input well,  but the kanban board, I am not even done with it. I would have played with the CSS Styling a bit because I love to style but there's no time for me again. The "In Progress" and "Done" too are not functioning,  I would have loved to work on them.





Before this break, I knew…

1. How to use to HTML
2. How to stlye with CSS
3. How to use Tailwind CSS

During this break, I learned…

1. To deal with assignments under pressure
2. JavaScript (Not enough to be proud of tho)
3. To build a calculator.

I'm still confused about…

1. JavaScript
2. JavaScript

My growth areas…

1. Tailwind CSS
2. JavaScript

One thing I'll do differently in the next project…

Start earlier, and always ask for help when needed.

