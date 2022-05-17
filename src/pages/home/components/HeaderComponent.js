import styles from "./HeaderStyle.module.sass";

const { "header-box": headerBox } = styles;

function HeaderComponent() {
  return (
    <div
      className={`${headerBox} flex justify-center items-center text-center p-10`}
    >
      <h1 className="text-5xl leading-normal">
        Let's Recognize the World Better...
      </h1>
    </div>
  );
}

export default HeaderComponent;
