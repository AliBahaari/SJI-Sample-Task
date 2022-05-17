import styles from "./FooterStyle.module.sass";

const { "footer-box": footerBox } = styles;

function FooterComponent() {
  return (
    <div className={`${footerBox} text-center p-4`}>
      <p>&copy; All Rights Reserved - 2022</p>
      <small>Written for JSI</small>
    </div>
  );
}

export default FooterComponent;
