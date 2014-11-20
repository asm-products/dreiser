# Dreiser

[![Dependencies Status](http://jarkeeper.com/asm-products/dreiser/status.png)](http://jarkeeper.com/asm-products/dreiser)

## Find grammar and spelling mistakes everywhere

This is a product being built by the Assembly community. You can help push this idea forward by visiting [https://assembly.com/dreiser](https://assembly.com/dreiser).

## Tech Stack

We use Clojure and PostgreSQL on server-side, ClojureScript and Om on the client-side.
Dreiser is web based application with traditional architecture.


## Instructions

To run Dreiser locally you need to have Clojure, Node.js and PostgreSQL installed.
Clojure uses [Leiningen](http://leiningen.org/) as package manager. Please install it.


### Database setup

Than you need to create `dreiser` database in the PostgreSQL. This can be achived with

```
  CREATE DATABASE dreiser
```

Then open dreiser directory in terminal and run `lein ragtime up` - this will apply SQL migtrations.


### Frontend setup

You need to compile all frontend assets.

To compile ClojureScript into JavaScript in the new window run command

```
  lein cljsbuild auto

```

You can change your ClojureScript code and it will compiled to JavaScript automatically in the background.

To compile Stylus into CSS please navigate to the `frontend` directory. Install node.js dependencies and grunt using `npm install` command.

Then run `grunt watch` in the separate window and your CSS will be compiled automatically.


### Server setup

To run server please run:

```
  lein ring server
```

You can open dreiser web app on `http://localhost:3000`.


## Other tools

  * https://github.com/lpenz/atdtool
  * http://www.afterthedeadline.com/
  * http://www.elto.com/blog/4-essential-plugins-for-wordpress-maintenance/
  * http://www.paperrater.com/page/developers-api
  * http://textalytics.com/

### How Assembly Works

Assembly products are like open-source and made with contributions from the community. Assembly handles the boring stuff like hosting, support, financing, legal, etc. Once the product launches we collect the revenue and split the profits amongst the contributors.

Visit [https://assembly.com](https://assembly.com) to learn more.
