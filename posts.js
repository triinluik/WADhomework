// Task 4: Fetch JSON from the publicly accessible online endpoint
// fetch("https://triinluik.github.io/WADhomework/postitused.json")

// Task 5: Fetch JSON from the local file instead
// fetch() returns a Promise because the request is asynchronous
fetch("./postitused.json")
    //Reads the response body and parses the JSON into JS objects
    .then(response => response.json())
    // Gives the resulting array as post objects
    .then(data => {
        console.log(data);

        /* Added an id for the posts section in index.html so
        * document.getElementById searches the HTML doc
        * for an element with that id
        */
        const postsContainer = document.getElementById('posts-container');

        data.forEach((post) => {
            /* Creates new HTML <article> element in memory
            * Gives it the same CSS class as our existing posts so we don't lose styling
            * & adds the new article to the posts section
            */
            const article = document.createElement("article");
            article.className = "post";
            postsContainer.appendChild(article);

            /* Gets the post from the JSON array
            * Creates a paragraph for the post's text
            * Sets the paragraph's text using the JSON data
            */
            const paragraph = document.createElement("p");
            paragraph.textContent = post.text;

            /* Creates a container for the author's avatar and date
            * applies existing CSS for post headers
            * and appends it to the article */
            const header = document.createElement("div");
            header.className = "post-header";
            article.appendChild(header);

            /* Creates an image elem for author's avatar
            * gets the avatar's path from JSON
            * Sets alternative text for accessiblity
            * & adds it in the header*/
            const avatar = document.createElement("img");
            avatar.src = post.authorAvatar;
            avatar.alt = post.author;
            header.appendChild(avatar);

            /* Creates the time element for the post's date
            * sets the machine-readable date from JSON
            * Formats the JSON date for display as required
            * Appends it to the header after the avatar */
            const date = document.createElement("time");
            date.dateTime = post.createTime;
            date.textContent = new Date(post.createTime + "T00:00:00")
                .toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"});
            header.appendChild(date);

            if (post.image) {
                const postImage = document.createElement("img");
                postImage.className = "post-image";
                postImage.src = post.image;
                postImage.alt = post.imageAlt;
                article.appendChild(postImage);
            }

            // Adds the paragraph inside the article
            article.appendChild(paragraph);

            /* creates the button, applies existing CSS class
            * sets the button type and accessibility label
            * adds the correct symbol to it and appends it to the article */
            const likeButton = document.createElement("button");
            likeButton.className = "like";
            likeButton.type = "button";
            likeButton.setAttribute("aria-label", "Like");
            likeButton.textContent = "👍";
            article.appendChild(likeButton);
        });
    })
    // Catches an error if request fails
    .catch(error => console.log("Error fetching posts:", error));