import React from "react";

const pdata = [
  {
    links: "https://www.linkedin.com/in/khan-hassan-m/",
  },
];

const linksxs = "https://www.linkedin.com/in/khan-hassan-m";

console.log(pdata[3]);

const Footer = () => {
  return (
    <>
      <footer>
        <p>
          🔥 Made with ❤️ by{" "}
          <a target="blank" rel="noreffrer" href={linksxs}>
            💎 Hassan Khan 💎
          </a>
        </p>
      </footer>
    </>
  );
};
export default Footer;
