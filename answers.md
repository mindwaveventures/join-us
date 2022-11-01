- Who are you? What do you like building?

Hi This is Arshad pakkali, I like building Applications Using Web Technologies

- Do you own a PC and have a good internet
  connection? Let's hear those specs 💪!

Intel i5 11'th Gen ( i mean i want AMD but its costly now :( )) | 24 GB ram | 512 M.2 NVME SSD
Dual Monitor setup | 27" 1440p + 24" 1080p Vertical (like a Real Coder)

- Your stackoverflow, linkedin, personal site.
  Anything you'd want us to see.

  - https://stackoverflow.com/users/11897377/mohamed-arshad
  - https://arshadpakkali.dev
  - https://www.upwork.com/freelancers/~0140bb51417ac2c5ab

- What programming languages have you messed around with?
  In the order of Exposure
  Typescript, Javascript, Python, GO, Lua, Bash, Java, ELisp, C, C++, Elixir, Elm, Solidity, Rust, Haskell

- What sort of tooling is on your machine?

  - Programming languages, compilers, runtimes etc

    - toolchains: all the toolchains of above mentioned Languages on Line nu. 19 is Installed
    - docker stuff (docker compose , stack etc)
    - aws mocking stuff
    - mini Kube

  - What OS do you run?

    - I use Arch Btw | Arch linux , i3wm/awesomewm, Kitty terminal

  - What editor/IDE do you use?

    In the order of most to least
    Code Editors:

    - Neovim with Native LSP and a Customized 100% Lua Config
    - VScode (just to check if some Lsp feature )
    - Doom Emacs (Evil mode)

    Database IDE:

    - Dbeaver
    - mongo compass
    - PgAdmin

- Are you more into front-end or back-end? (If you're
  into web development).
  More of a Backend Guy, like to mess around with diffrent protocols like WSS,SSE etc
  but also like front end too

- Are you interested in AI/ML, Systems Programming
  or anything outside your current domain.

I only have a rough idea about AI and Stuff, Tried Tensorflow JS once but not captivating Apart from that I did some Blockchain Stuff with Solidity for sometime
the thing is i really like to Explore stuff like these

- What are you learning now?
  in the order of my intrests
  - Functional Programming
  - Golang ( the single binary out)
  - Rust ( Just i want to cuz of primeagen)

## Let's hack!

- Find the longest word in a string.
  - Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.

```
function findLongest(input:string):string{
    return input.split(' ').sort((x,y)=> y.length - x.length)[0]
}
```

- Repeat a string `n` times.
  - If `abc` and `3` are the arguments to your function, it shoudl return `abcabcabc`

```
function repeater(inpStr:string,times:number):string{
    return new Array(times).fill(inpStr).join('')
}

```

- Remove falsy values

  - If `[42, "everything", "", 2, false, "everything"]` is the input to your function, it should return `[42, "everything", 2, "everything"]`

  ```

  function isTruthy(x:T|undefined|null) x is T {
          return !!x
      }


  function filterTruthy(arr:T|null|undefined[]):T[]{
          return arr.filter(isTruthy)
    }

  ```

- Truncate a string

  - If `'Absolute victory'` and `3` are the inputs to
    your function, it should return `Abs...`

  function trunc(str:string,len:number):string{
  return str.slice(0,len)
  }
