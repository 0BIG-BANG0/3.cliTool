1. Example Usage
If you run your script with:

bash
Copy code
node index.js ./sample.txt
Then:

process.argv[0] is /path/to/node.
process.argv[1] is /path/to/index.js.
process.argv[2] is ./sample.txt.
So, filePath will be assigned the string ./sample.txt, which your script then uses to locate and read the specified file.

2.5. Make It Executable
Add the #!/usr/bin/env node line at the top of your index.js file so the script can be run directly from the command line.
In package.json, add a bin field to specify the command name for your CLI tool:
json
Copy code
"bin": {
  "readfile": "./index.js"
}
Link the command globally by running:
bash
Copy code
npm link
You can now use readfile <file-path> to read the content of a file.