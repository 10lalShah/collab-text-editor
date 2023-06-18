
# Live Collaborative Editor

The project is a basic demonstration of Collaborative Text Editor where users can work and make file changes in realtime using websockets. 

The basic artchitecture of this project uses, React Js for frontend, and NodeJs using socket.io for the realtime implementation of sharing text in the users' window. 




## Run Locally

Clone the project

```bash
  git clone https://github.com/10lalShah/collab-text-editor
```

Go to the project directory

```bash
  cd collab-text-editor
```

Install dependencies Server 

```bash
  cd server  && yarn install
```

Start the server 

```bash
  yarn dev
```


Install dependencies Client  

```bash
  cd server && yarn install
```

Start the server 

```bash
  yarn start
```



## Architect Decision

Since the requirements were quite simple it was best to use the most basic technologies without complicating the project for no reason. 

NodeJs was used in the backend to create a simple server running a socket.io server. Since there is no persistance, meaning no database is required as well. Also there was no need to add TypeScript for this small project. 

On the frontend side, ReactJs is simple enough to get started with create-react-app. Basic react-app scaffolded with cra was enough to get started. 


### Production Level Requirements

If the goal is to have a production level application than things would be very different. The selection of technologies would warry, for arguemnet sake we can set the requirements as follow. 

- Authentication
- Permissions
- Persistance of documents
- Formatting of text
- Dashboard
- Modern UI Design

For the above requirements, the following technologies could be used in adition for scalable, and complex product. 

NestJs for building the backend which uses TypeScript by default, adding type safety to the project. MongoDB for non-relational data persistance such as saved documents, Postgres for relational database to use for storing users, their sessions, permission and access level. If scalability is a concern than the backend can deployed as firbase cloud functions or aws lambdas for horizontal scaling. 

For frontend React Application can be built using cra or the new recommended method of using the NextJS cli. NextJs allows the Server Side Rendering, Static Site Generation, routing out of the box, SEO optimization, and a opnionated architecture for the application. For Formatting Rich text Editors such as QuillJS, Monaco Editor, TinyMCE etc. For a modern design and not boring design Material UI could be skipped for Ant Design with good documentation and abundance of components. For state management Zustand is a modern state management which has very simple api to use, as opposed to redux. React-query can be integrated together with zustand for creating clean and consistent hooks for fetching data from the server. React-Query also provides hooks to get the state of the data along with caching mechanisms. 

This would be a breif overview of the technologies that could be used for a complex solution. 

## Demo


https://github.com/10lalShah/collab-text-editor/assets/31349820/aa129d7d-f2b9-4beb-b669-de32138bf3f2

