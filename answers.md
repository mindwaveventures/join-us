## Introductions

- Who are you? What do you like building?
  - I am Manoj Prabhakar, have completed my BE(CSE) with 70%, Started my career as a Front end developer, have _4 years of experience_ as of now. I likes to code and handle complex data, also likes designing complex component with a lots of animations.
- Do you own a PC and have a good internet
  connection? Let's hear those specs 💪!
  - Yes I have one but it's not in good condition now, planning to get a new one this year but my current spec is,
    - HP Notebook, windows 10 OS, 512GB HDD, 4GB RAM,
- Your stackoverflow, linkedin, personal site.
  - linkedin - [Manoj Prabhakar](https://www.linkedin.com/in/manoj-prabhakar-ba6a47121/)
    Anything you'd want us to see.
- What programming languages have you messed around with?
  - JS (build a carrer out of this)
  - C, C++ (learned in college days which helps me to start programming)
- What sort of tooling is on your machine?
  - Programming languages, compilers, runtimes etc
    - Javascript
  - What OS do you run?
    - windows10, macOS
  - What editor/IDE do you use?
    - Visual studio code, Sublime text
- Are you more into front-end or back-end? (If you're
  into web development).
  - My primary skill is Front end dvelopment only but i have a professional training on NodeJS and ExpressJS as well and i also intrested in Full Stack development, i worked as a Full stack developer in Online movie ticket Application.
- Are you interested in AI/ML, Systems Programming or anything outside your current domain.
  - yes, i am intrested.
- What are you learning now?
  - Miro Front-end

## Let's hack!

- Find the longest word in a string.

  - Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.

  ```
    const getLongestWord = (inputstr) => {
      let longstr = "";
      inputstr.split(" ").forEach((el) => {
        longstr = longstr.length > el.length ? longstr : el;
      });
      return longstr;
    };
    getLongestWord("The quick brown fox jumped over the lazy dog");
  ```

- Repeat a string `n` times.

  - If `abc` and `3` are the arguments to your function, it shoudl return `abcabcabc`

    ```
      const makeRepeatString = (str, n) => {
        return str.repeat(n);
      };
      makeRepeatString("abc", 3);

    ```

- Remove duplicates in an array

  - If `[1, 20, 3, 1, 3, 3]` is the input to your
    function, it should return `[1, 20, 3]`

    ```
      const removeDuplicates = (arr) => {
        return arr.length ? [...new Set(arr)] : [];
      };
      removeDuplicates([1, 20, 3, 1, 3, 3]);
    ```

- Remove falsy values

  - If `[42, "everything", "", 2, false, "everything"]` is the input to your function, it should return `[42, "everything", 2, "everything"]`

    ```
      const removeFalsy = (arr) => {
        return arr.length
        ? arr.filter((el) => {
        if (el) return el;
        })
        : [];
      };
      removeFalsy([42, "everything", "", 2, false, "everything"]);
    ```

- Truncate a string

  - If `'Absolute victory'` and `3` are the inputs to
    your function, it should return `Abs...`

    ```
      const addEllipsis = (str, n) => {
        return str.slice(0, 3).concat("...");
      };
      addEllipsis("Absolute victory", 3);
    ```

## Notes

- implemented the answers in src folder as well, please look into it.
