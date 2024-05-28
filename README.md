<h1>EJS COURSE</h1>
<h3>Click the Image To Watch The Video</h3>

<a href="https://www.youtube.com/watch?v=jn5MRu5ybH4">
        <img src="https://github.com/Yogaprasadmk/EJS-A-to-Z-Course/assets/120255515/39422035-ff53-4e5c-a8cc-80d13c211a6b">
</a>

<h2>Install Extension</h2>
<img src="https://github.com/Yogaprasadmk/EJS-A-to-Z-Course/assets/120255515/fd4d0c63-e403-4a9a-849b-451e6a71e143">
<h3>Display Varible</h3>

<h3>Instructions To Run The Uploaded File</h3>

<h5>Install Node js</h5>
<img src="https://github.com/Yogaprasadmk/EJS-A-to-Z-Course/assets/120255515/7018d282-1f37-4f12-b416-d0a4a3c44b60">

<h5>Install npm modules on Your Terminal </h5>

<img src="https://github.com/Yogaprasadmk/EJS-A-to-Z-Course/assets/120255515/4b8e2524-c31b-4a4f-ab4a-0fa09f267c28"
```js
npm install -g npm
```

<h3>To Check Version </h3>
<img src="https://github.com/Yogaprasadmk/EJS-A-to-Z-Course/assets/120255515/1caefa37-ab1a-4017-b2a4-aa41ea418eaf">

```js
node -v
npm -v
```

<h3>Variable To Declare</h3>

```js
<%= name %>
```

<h3> UpperCase </h3>

```js
<%= name.UpperCase() %>
```

<h3>If Condition</h3>

```js
<% if(age === 20) { %>
<h1> User age :<% {age} %></h1>
<% } %>
```
<h3> Else if Condition</h3>

```js

<% if(age === 20) { %>
<h1> User age <% age %></h1>
<% } else if (age >= 19) { %>
<h1> User age : <% age %> </h1>
<% } else {%>
<h1>Nothing...</h1>
```

<h3>For Loop</h3>

```js
<% for (let i = 0; i < 11; i++) { %>        
        <h1><%= i %></h1>
<% } %>
```

<h3>Array</h3>

```js
<% const data = [1,2,3,4,5] %>
<% for(d in data) { %>
<h1> <%= d %> </h1>
<% } %>
```

<h3>Date</h3>

```js
<% const va = Date(); %>
<%= va %>
```

  
