import "@/assests/styles/globals.css";

const mainLayout = ({ children }) => {
  return (
    <html lang="en">
      <div>{children}</div>;
    </html>
  );
};

export default mainLayout;
