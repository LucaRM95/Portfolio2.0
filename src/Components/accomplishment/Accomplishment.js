import React from "react";
import useFireBase from "../Base/useFirebase";
import { CircularProgress } from "@mui/material";

const Accomplishment = () => {
  const projects = useFireBase();

  return (
    <section id="accomplishments">
      <div className="container">
        <h3>A Few Accomplishments</h3>
        <p>
          Integer eu ante ornare amet commetus vestibulum blandit integer in
          curae ac faucibus integer non. Adipiscing cubilia elementum integer.
          Integer eu ante ornare amet commetus.
        </p>
        {projects.data.length > 0 ? (
          <div className="features">
            {projects.data.map((project) => (
              <article key={project.id}>
                <a href="#" className="image">
                  <img src={project.img} alt="" />
                </a>
                <div className="inner">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="circular-progress-box">
            <CircularProgress />
          </div>
        )}
      </div>
    </section>
  );
};

export default Accomplishment;
