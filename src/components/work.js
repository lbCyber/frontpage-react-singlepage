import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Project from "../json/projects.json";

const Work = () => {
  const [work, setWork] = useState(Project.projects),
    [months] = useState(Project.months),
    [features] = useState(Project.featureList),
    [sort, setSort] = useState(1),
    [order, setOrder] = useState(1);

  const sortWork = (n) => {
    let s = order;
    if (sort === n) {
      s = ~s + 1; // If clicked again, reverse sort order (bitwise op)
    } else {
      s = -1;
    } // Otherwise, set default sort order on new option selected
    setSort(n);
    setOrder(s);
    const doSort = (a, b) => {
      const sortDate = (x) => {
        return (
          x["published"][0] * 365 + x["published"][1] * 30 + x["published"][2]
        );
      };
      const sortAlpha = (x) => {
        return (
          Math.pow(x["title"].toUpperCase().charCodeAt(0), 3) +
          Math.pow(x["title"].toUpperCase().charCodeAt(1), 2) +
          x["title"].toUpperCase().charCodeAt(2)
        );
      };
      if (n) {
        return (sortDate(b) - sortDate(a)) * (~s + 1); // Date should default latest>descending
      } else {
        return (sortAlpha(b) - sortAlpha(a)) * s;
      }
    };
    return work.sort(doSort);
  };

  const sorter = (obj = 1) => {
    let sortedObj = sortWork(obj);
    setWork(sortedObj);
  };
  return (
    <section className="">
      <div className="wrapper">
        <div className="">
          <h5 className="">Sort by:</h5>
          <div className="">
            <p className=""
              onClick={() => sorter(1)}>Latest <span className={sort === 1 ? (order === -1 ? "ascSort" : "descSort") : null}></span>
            </p>
            <p className=""
              onClick={() => sorter(0)}>
              Alphabetically <span className={sort === 0 ? (order === 1 ? "ascSort" : "descSort") : null}></span>
            </p>
          </div>
        </div>
        <div className="">
          {work.map((project, key) => {
            return (
              <div className="" key={key}>
                <h3 className="">Name: {project.title}</h3>
                <img className=""
                  src={`./assets/${project.image}`}
                  alt=""
                />
                <h4 className="">
                  Published: {`${months[project.published[1]]} ${project.published[2]}, ${project.published[0]}`}
                </h4>
                <div className="">
                  <ReactMarkdown
                    children={project.text}
                    linkTarget="_blank"
                    parserOptions={{ commonmark: true }}
                  />
                </div>
                <div className="">
                  <ul>
                    {project.features.map((feature, key) => {
                      return <li key={key}>{features[feature]}</li>
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Work;
