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
export const filesystem = {
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