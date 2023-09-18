import { usePDF } from "@react-pdf/renderer";
import { useEffect } from "react";

export const PDFViewer = ({
  title,
  style,
  className,
  children,
  innerRef,
  showToolbar = true,
  ...props
}) => {
  const [instance, updateInstance] = usePDF();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => updateInstance(children), [children]);

  const src = instance.url
    ? `${instance.url}#toolbar=${showToolbar ? 1 : 0}`
    : null;

  return (
    <iframe
      src={src}
      title={title}
      ref={innerRef}
      style={{
        ...style,
        MozUserSelect: "-moz-none",
        userSelect: "none",
      }}
      className={className}
      {...props}
    />
  );
};

export default PDFViewer;
