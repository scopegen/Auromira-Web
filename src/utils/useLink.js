import React from "react";

export const LinkStatus = Object.freeze({
  Idle: "IDLE",
  Error: "ERROR",
  Loading: "LOADING",
  Success: "SUCCESS",
});

const useLink = (url, id) => {
  const [state, setState] = React.useState(LinkStatus.Idle);

  React.useEffect(() => {
    if (typeof document === "undefined") {
      setState(LinkStatus.Error);

      return () => {};
    }

    const existingLink = document.getElementById(id);
    if (existingLink) {
      setState(LinkStatus.Success);

      return () => {};
    }

    setState(LinkStatus.Loading);

    const link = document.createElement("link");
    link.id = id;
    link.href = url;
    link.rel = 'stylesheet';
    const onLinkLoad = () => {
      setState(LinkStatus.Success);
    };

    const onLinkError = () => {
      link.remove();

      setState(LinkStatus.Error);
    };

    link.addEventListener("load", onLinkLoad);
    link.addEventListener("error", onLinkError);

    // Add link to the document head
    document.head.appendChild(link);

    // Remove event listeners on cleanup
    return () => {
      link.removeEventListener("load", onLinkLoad);
      link.removeEventListener("error", onLinkError);
    };
  }, [url, id]);

  return state;
};

export default useLink;