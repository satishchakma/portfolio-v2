import "./ProjectBanner.css";

const ProjectBanner = (props) => {
  // console.log(props);
  return (
    <h3 className="project__banner">
      <span className="bar--64">
        {`- ${props?.text} - ${props?.text} - ${props?.text} - ${props?.text} - Hello
        Summer - ${props?.text} - ${props?.text} - ${props?.text} - ${props?.text} -
        ${props?.text} - ${props?.text} - ${props?.text} - ${props?.text} - ${props?.text}
        - ${props?.text} - ${props?.text} - `}
      </span>
    </h3>
  );
};

export default ProjectBanner;
