import React from "react";
import useScript from "./useScript";
import scripts from "../components/home/exposeScripts";

const WithScripts = (children) => {
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    scripts.forEach((script, index) => useScript(script, index));
  });

  return {children};
};

export default WithScripts;
