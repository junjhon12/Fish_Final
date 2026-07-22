# Web Development Final Project - Catch Tracker

Submitted by: **[Quoc Bao Le]**

This web app: **Catch Tracker is a React-based fishing log that allows anglers to track their catches, categorize them by water type, and link related catches together to create interconnected fishing threads.**

Time spent: **[8]** hours spent in total

## Required Features

The following required functionality is completed:

- [x] **Web app includes a create form that allows the user to create posts**
  - [x] Form requires users to add a post title
  - [x] Forms have the option for users to add additional textual content
  - [x] Forms have the option for users to add an image added as an external image URL
- [x] **Web app includes a home feed displaying previously created posts**
  - [x] By default, each post on the posts feed shows only the post's creation time, title, and upvotes count
  - [x] Clicking on a post directs the user to a new page for the selected post
- [x] **Users can view posts in different ways**
  - [x] Users can sort posts by either creation time or upvotes count
  - [x] Users can search for posts by title
- [x] **Users can interact with each post in different ways**
  - [x] The app includes a separate post page for each created post when clicked, where any additional information is shown, including content, image, and comments
  - [x] Users can leave comments underneath a post on the post page
  - [x] Each post includes an upvote button on the post page. Each click increases the post's upvote count by one. Users can upvote any post any number of times (implemented robustly to allow toggle/single upvote per user).
  - [x] A post that a user previously created can be edited or deleted from its post page

## Stretch Features

The following stretch functionality is completed:

- [ ] **Web app implements pseudo-authentication**
- [x] **Users can repost a previous post by referencing its post ID**
  - [x] On the post page of the new post, the referenced post is displayed and linked, creating a thread (Implemented via an intuitive dropdown menu).
- [ ] **Users can customize the interface**
- [x] **Users can add more characteristics to their post**
  - [x] Users can set flags such as "Saltwater", "Freshwater", or "Question" while creating a post
  - [x] Users can filter posts by flags on the home feed
- [ ] **Users can share and view web videos**
- [ ] **Users can upload images directly from their local machine as an image file**
- [ ] **Whenever data is being fetched, the web app displays a loading animation**

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="https://www.loom.com/share/d4b88accb6594db5b79e29230db489c1" title="Video Walkthrough" width="800" alt="Video Walkthrough">

## Notes

Describe any challenges encountered while building the app:
*We utilized browser `localStorage` to simulate a backend database, which allowed for persistent state management, full CRUD operations, and complex cross-post referencing without needing a dedicated server setup.*

## License

Copyright [2026] [Quoc Bao Le]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.