import Header from "./Header";

type ILayoutProps = {
  readonly children: React.ReactElement;
};
const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
