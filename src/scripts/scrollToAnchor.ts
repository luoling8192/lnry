const scrollToAnchor = (anchorName: string, delay?: number) => {
  setTimeout(() => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  }, delay || 200);
};

export default scrollToAnchor;
