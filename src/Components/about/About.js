import React from "react";

const About = ({ banner }) => {
  return (
    <section id="about">
      <div className="image main" data-position="center">
        <img src={banner} alt="" />
      </div>
      <div className="container">
        <header className="major">
          <h2>Read Only</h2>
          <p>
            Just an incredibly simple responsive site
            <br />
            template freebie by <a href="http://html5up.net">HTML5 UP</a>.
          </p>
        </header>
        <p>
          Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col.
          Commodo id in arcu ante lorem ipsum sed accumsan erat praesent
          faucibus commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet
          tortor ultricies non ante erat nunc integer eu ante ornare amet
          commetus vestibulum blandit integer in curae ac faucibus integer non.
          Adipiscing cubilia elementum.
        </p>
      </div>
    </section>
  );
};

export default About;
