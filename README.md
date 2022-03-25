[![wakatime](https://wakatime.com/badge/user/9db7e6b3-4687-44a1-b37b-f11ae4e037d7/project/80063efc-bdc2-4c43-a43c-d66120efa821.svg)](https://wakatime.com/@HRahman1777/projects/uvvasxdtqr?start=2022-03-21&end=2022-03-31)

</p>

  <h1 align="center">Word Filter</h3>

## Table of Contents

- [Intro](#intro)
- [Requirement](#requirements)
- [Install & Use](#install-and-use)
- [Screenshot](#screenshot)
- [Contact](#contact)

## Intro

Word Filter শব্দ দুইটি থেকে আমরা ধারণা করতে পারতেসি যে অনেক গুলো শব্দ থেকে কাংখিত শব্দটা ফিল্টার/খুজে বাহির করার একটা সিস্টেম। এই Word Filter সিস্টেমটা এই ভাবে কাজ করে।
যেমন ধরি শব্দ ভান্ডারে কয়েকটি শব্দ আছে `cover`, `world`, `think`, `chest`, `eager`, `apple`, `night`, `anger`, `purge`
এখান থেকে যদি filter(বাছাই) করা হয় এমন একটি শব্দকে

- যার মধ্যে e, g  আছে

  - তাহলেঃ `anger`, `eager`, `purge`

- যার মধ্যে  t, c, n নাই

  - তাহলেঃ `world`, `eager`, `apple`, `purge`

- যদি উপরের ২টা এক সাথে ফিল্টার করি মানে e,g আছে আর  t, c, n নাই

  - তাহলেঃ `eager`, `purge`

- এই ফলাফল থেকে যদি ফিল্টার করা হয় যে এমন শব্দ যার ৪র্থ বর্ণ <b>g</b> দিয়ে
  তাহলে পাবো `purge`, এর থেকে আর ফিল্টার করা যাবে না, এইটাই আমাদের কাংখিত শব্দ।

  <br>

এই PRESENT আর NOT-PRESENT LETTERS ব্যবহারকারি Input হিসবে দিবে আর সিস্টেম (শব্দ ভান্ডার থেকে) সেই অনুযায়ী ফলাফল দিবে বাছাই করে।

- (PRESENT LETTERS) বলতে কোন কোন বর্ণ কাংখিত শব্দে আছে,
- (NOT-PRESENT LETTERS) কোন কোন বর্ন গুলো কাংখিত শব্দে নাই

এই ফিল্টার সিস্টেমটা <a href='https://www.nytimes.com/games/wordle/index.html'>Wordle Game</a> থেকে অনুপ্রানিত হয়ে বানানো ক্ষদ্র চেষ্টা হয়েছে,
যদিও এইটা পুরপুরি <b>wordle solver</b> না তবে আশা করি word guess করতে বেশ সাহায্য করবে।

---

\*\*\* Target was to design a filtering word system and most importantly develop a simple console project with `Node.js`

---

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node (1)

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer. Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v17.7.1

    $ npm --version
    8.5.4

### Yarn installation (2)

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

## Install and Use

Go to a specific folder where you want to store project files then open terminal console.

    $ git clone https://github.com/HRahman1777/Word-Filter.git
    $ cd Word-Filter
    $ yarn install

#### Running the project

    $ yarn start

Follow all instructions that appears after running this command.

## Screenshot

Screen record video -> [click here]()

### Main Console

 <img alt="Index" style="border-width:240" height="640" src="https://raw.githubusercontent.com/HRahman1777/Word-Filter/master/Screenshots/wfss.JPG" />

## Contact

Hasibur Rahman - [hasibur.cse7@gmail.com](mailto:hasibur.cse7@gmail.com)

<b>If face any issue PLEASE share in [Discussions](https://github.com/HRahman1777/Word-Filter/discussions) section.</b>
