# React Terminal Portfolio!

Credits to: https://github.com/nitin42/terminal-in-react for the awsome library!

# What I added

At the same time that I am building my portfolio I am creating a small but fun plugin for this module, 
will be a CTF plugin allowing you to hide flags in the terminal and even establish ssh connections!

# Change logs

## Thursday Jan 27 @ 2:32 AM
I setup a simple way for filesystems to work with no hard coding needed,
this is what the object looks like:

```
export const defaultFilesystem = {
    '/': {
        home: {
            guest: {
                guesttxt: "Hello Guest!"
            },
            hometxt: 'Hello Home!'
        },
        root: {
            roottxt: 'Hello Root!'
        }
    }
}

```

and basically whenever you use the command `cd (dir)` it will,
add your current directory to the directory you want to reach and,
loop through the object using nodes to go all the way down the filesystem.

I also added a `cat` command which will read any txt file in your current directory defined by the `(filename)txt` properties in the filesystem.

## Friday Jan 28 @ 1:06 AM

Today I added commands `crackMD5 (hash)` and `crackSHA1 (hash)`,
to be able to match the MD5 and SHA1 hashed with the wordlist defined by the coder,
using the template below:

```
export const wordlist = ['hello', 'world', 'guest', 'test', 'easy', 'peasy', 'i', 'love', 'nft', 'R00T FL4G', 'GU3ST FL4G'];
```

I also added cookies to save the current Directory

## Friday Jan 28 @ 5:21 PM

I just added `touch (filename)` to create new files, `mkdir (dirName)` to create new directories,
`rm (file/dir name)` to remove files and directories, finally I added `echo (text) (null or >> (filename))` to save text into files or just print it out!