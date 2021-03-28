import Style from "./style.module.css";

const Layout = (props) => {
  return (
    <div className={Style.layout}>
      <div className={Style.container}>{props.children}</div>
    </div>
  );
};

export default Layout;