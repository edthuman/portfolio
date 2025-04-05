# My Portfolio Website

A website that gives people an introduction into who I am, my journey into software development, and the projects I've worked on.

The site is a fullscreen website, where one page of the site at a time takes up the entire screen, with users then scrolling between pages.

### Hosted Website

Link to the hosted site: https://edwardirvine.netlify.app/

### Cloning The Repository

To clone this repo, run the following command in your shell:

```console
$ git clone https://github.com/edthuman/portfolio
```

## Installation

In order to begin working with this repo, first ensure that Node.js on your computer is version 18 or above. You can check your version using the command:

```console
$ node --version
```

Once you're happy that your node version is appropriate, you then need to run:

```console
$ npm install
```

This command will automatically install all of the dependencies required to run of this project.

## Working on the project

You can begin working on the project.

To check everything was set up correctly, you can run the site using:

```console
$ npm run dev
```

> [!TIP]
> If you are using VSCode or Cursor you can use the compound configuration "Open App" created in the launch.json file of .vscode folder - it runs the previous command for you, and opens your site in a Chrome Debugger tab

Once this has finished loading, you should see two links in your terminal "Local" and "Network".

The local link can be entered into a browser to visit a live-updating version of the site.

The network link allows you to try out the site on any other devices using the same local network.

If you wish to stop producing a network link, delete the "--host" at the end of the 'dev' script in package-json, and it will not be created the next time you run the script.