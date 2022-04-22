import Header from "../reusables/Header";

const MyQuizizz = () => {
  const links = [
    { to: "/", name: "home" },
    { to: "/build", name: "build" },
  ];

  return (
    <div
      style={{
        padding: "1rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header page="My Quizizz" links={links} />
    </div>
  );
};

export default MyQuizizz;
